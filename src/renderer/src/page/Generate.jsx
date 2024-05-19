import { useState, useEffect } from 'react'
import markdownIt from 'markdown-it'

export default function Generate() {
  const [query, setQuery] = useState()
  const md = markdownIt()
//   const [content, setContent] = useState('')

  useEffect(() => {
    window.electron.ipcRenderer.on('answer', (event, chunk) => {
      document.getElementById('content').innerHTML = md.render(chunk) // using this is faster than setstate
    //   setContent(md.render(chunk))
    })
  }, [])

  function onQueryChange(e) {
    setQuery(e.target.value)
  }

  function onGenerateClick(e) {
    window.api.streamQA(query)
  }
  return (
    <>
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