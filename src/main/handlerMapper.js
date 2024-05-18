import { ipcMain } from 'electron'
import { generateQA } from './llamaHelper'

export function declareHandler() {
  ipcMain.on('test-generate', (event, query) => {
    console.log('from-client> ' + query)
  })

  ipcMain.handle('generate-qa', generateQA)
}
