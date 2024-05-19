import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Generate from './page/Generate'

import '../../scss/styles.scss'

function App() {
  const [page, setPage] = useState(<Generate />)

  /**
   * this function is using generate handler which is make it wait until answer
   * is fully generated
  async function onGenerateClick(e) {
    const generatedValue = await window.api.generateQA(query)

    setContent(generatedValue)
  }
  */

  function onNavUpdate(e, value) {
    setPage(value)
  }

  return (
    <>
      <Navbar onNavUpdate={onNavUpdate} />
      {page} {/* act as router */}
    </>
  )
}

export default App
