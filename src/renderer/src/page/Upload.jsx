import { useState } from 'react'

export default function Upload() {
  const [file, setFile] = useState()

  function onFileChange(e) {
    setFile(e.target.value)
  }

  async function onClickUpload(e) {
    const filePath = await window.api.fileUpload(file)

    setFile(filePath)
  }

  async function onClickParse(e) {
    window.api.parseDocument(file)
  }

  return (
    <>
      <div className="container">
        <p></p>
        <h3>Generate</h3>
        <p></p>
        <div className="form-group row">
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label col-sm-3">
              Upload document here
            </label>
            <div className="form-group row">

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Select File..."
                  aria-label="Select File"
                  aria-describedby="basic-addon2"
                  value={file}
                  disabled
                />
                <div className="input-group-append">
                  <button className="btn btn-danger px-4" type="button" onClick={onClickUpload}>
                    Select File
                  </button>
                </div>

              </div>
              <div className="col-sm">
                <button
                  type="submit"
                  className="btn btn-primary px-4"
                  onClick={onClickParse}
                >
                  Parse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
