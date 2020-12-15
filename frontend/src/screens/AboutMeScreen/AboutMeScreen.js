import myPDF from 'assets/Resume.pdf'
import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function handleLoadError (error) {
  console.error(error)
}

function AboutMeScreen () {
  return (
    <div>
      <Document
        file={myPDF}
        onLoadError={handleLoadError}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default AboutMeScreen
