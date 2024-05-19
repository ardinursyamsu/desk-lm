import { ipcMain } from 'electron'
import { generateQA, streamingQA } from './llamaHelper'

export function declareHandler() {
  ipcMain.on('test-generate', (event, query) => {
    console.log('from-client> ' + query)
  })
  ipcMain.on('stream-qa', streamingQA)
  ipcMain.handle('generate-qa', generateQA)
  
}
