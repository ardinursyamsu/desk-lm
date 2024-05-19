import { useState } from 'react'
import Navbar from './components/Navbar'

import '../../scss/styles.scss'

function App() {
  const [query, setQuery] = useState('')
  // const [content, setContent] = useState('')

  window.electron.ipcRenderer.on('answer', (event, chunk) => {
    document.getElementById('content').innerHTML = chunk // using this is faster than setstate
  })

  function onQueryChange(e) {
    setQuery(e.target.value)
  }

  function onGenerateClick(e) {
    window.api.streamQA(query)
  }

  /**
   * this function is using generate handler which is make it wait until answer
   * is fully generated
  async function onGenerateClick(e) {
    const generatedValue = await window.api.generateQA(query)

    setContent(generatedValue)
  }
  */

  return (
    <>
      <Navbar />
      <div className="container">
        <p></p>
        <h3>Generate</h3>
        {/* <div className="content" id="content">{content}</div> */}
        <div className="content" id="content"></div>
        <div className="form-group row">
          <label className="col-form-label col-sm-2" htmlFor="query">
            Insert Query
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              rows="3"
              className="form-control"
              value={query}
              onChange={onQueryChange}
            />
          </div>
        </div>
        <p></p>
        <div className="form-group row justify-content-end">
          <button
            type="button"
            className="btn primary btn-primary"
            id="btn-generate"
            onClick={onGenerateClick}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  )
}

export default App
