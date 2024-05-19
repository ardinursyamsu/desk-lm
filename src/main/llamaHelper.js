import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp'
import { BrowserWindow } from 'electron'
import { Phi3ChatPrompWrapper } from './phi3wrapper'

const modelPath = 'D:\\PROJECTAI\\MODELS\\microsoft\\phi-3\\Phi-3-mini-4k-instruct-Q8_0.gguf'

const model = new LlamaModel({
  modelPath: modelPath,
  gpuLayers: 33
})

const context = new LlamaContext({ model })
const session = new LlamaChatSession({ context, promptWrapper: new Phi3ChatPrompWrapper() })

export async function generateQA(event, query) {
  console.log('Query: ', query)
  console.log('Please wait while generating answer...')

  const answer = await session.prompt(query, {
    maxTokens: 512,
    temperature: 0.8,
    topK: 40,
    topP: 0.02
  })

  console.log('Answer: ', answer)

  return answer
}

export function streamingQA(event, query) {
  const win = event.sender
  const webContents = BrowserWindow.fromWebContents(win)

  var sent = ''
  session.prompt(query, {
    maxTokens: 512,
    temperature: 0.8,
    topK: 40,
    topP: 0.02,
    onToken(chunk) {
      sent += context.decode(chunk)
      webContents.send('answer', sent)
    }
  })
}
