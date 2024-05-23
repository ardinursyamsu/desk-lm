import { ipcMain, dialog } from 'electron'
import { generateQA, streamingQA } from './llamaHelper'
import fs from 'node:fs'
import { readPdfPages } from 'pdf-text-reader'

async function handleFile(event, file) {
  const files = await dialog.showOpenDialog()
  return files.filePaths[0]
}

async function parseDocument(event, file) {
  const pages = await readPdfPages({ url: file })
  let text = ''
  for (const page of pages) {
    for (const line of page?.lines) {
      if (line.length < 5) {
        text += "\n\n"
      } else {
        text += line
      }
    }
  }

  return text
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
