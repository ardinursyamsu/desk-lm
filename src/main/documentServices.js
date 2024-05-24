import { readPdfPages } from 'pdf-text-reader'
import { dialog, BrowserWindow } from 'electron'

export async function parseDocument(event, file) {
  const pages = await readPdfPages({ url: file })
  let text = ''
  for (const page of pages) {
    for (const line of page?.lines) {
      if (line.length < 5) {
        text += '\n\n'
      } else {
        text += line
      }
    }
  }

  return text
}

export async function handleFile(event, file) {
  const files = await dialog.showOpenDialog(BrowserWindow.fromWebContents(event.sender), {
    properties: ['openFile'],
    filters: [{ name: 'Pdf File', extensions: ['pdf'] }]
  })
  return files.filePaths[0]
}
