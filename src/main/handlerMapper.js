import { ipcMain, dialog } from 'electron'
import { generateQA, streamingQA } from './llamaHelper'
import fs from 'node:fs'

async function handleFile(event, file) {
  const files = await dialog.showOpenDialog()
  return files.filePaths[0]
}

async function parseDocument(event, file) {
  const pdf = fs.openSync(file)
  console.log(fs)
}

export function declareHandler() {
  ipcMain.on('test-generate', (event, query) => {
    console.log('from-client> ' + query)
  })
  ipcMain.on('stream-qa', streamingQA)
  ipcMain.handle('generate-qa', generateQA)
  ipcMain.handle('file-upload', handleFile)
  ipcMain.handle('parse-document', parseDocument)
}
