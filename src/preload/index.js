import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  testGenerate: (query) => {
    ipcRenderer.send('test-generate', query)
  },
  streamQA: (query) => {
    ipcRenderer.send('stream-qa', query)
  },
  generateQA: (query) => ipcRenderer.invoke('generate-qa', query) // invoke can only declared as one-liner
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
