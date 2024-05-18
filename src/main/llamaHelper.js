import { LlamaModel, LlamaContext, LlamaChatSession } from 'node-llama-cpp'

const modelPath = "D:\\PROJECTAI\\MODELS\\microsoft\\phi-3\\Phi-3-mini-4k-instruct-Q8_0.gguf"

const model = new LlamaModel({
  modelPath: modelPath,
  gpuLayers: 33,
})

const context = new LlamaContext({ model })
const session = new LlamaChatSession({ context })

export async function generateQA(event, query) {
  console.log("Query: ", query)
  console.log("Please wait while generating answer...")

  const answer = await session.prompt(query, {
    maxTokens: 512,
    temperature: 0.8,
    topK: 40,
    topP: 0.02
  })

  console.log("Answer: ", answer)

  return answer
}
