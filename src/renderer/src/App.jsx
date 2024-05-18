import { useState } from 'react'
import Navbar from './components/Navbar'

import '../../scss/styles.scss'

function App() {
  const [query, setQuery] = useState('')
  const [content, setContent] = useState('')
  return (
    <>
      <Navbar />
      <div className="container">
        <p></p>
        <h3>Generate</h3>
        <div className="content">{content}</div>
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
              // onChange={onQueryChange}
            />
          </div>
        </div>
        <p></p>
        <div className="form-group row justify-content-end">
          <button
            type="button"
            className="btn primary btn-primary"
            id="btn-generate"
            // onClick={onGenerateClick}
          >
            Generate
          </button>
        </div>
      </div>
    </>
  )
}

export default App
