import myPDF from "assets/Resume.pdf";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function AboutMeScreen() {
  return (
    /* pdfLoadingDone && */<Document
      file={myPDF}
      onLoadError={console.error}
    >
      <Page pageNumber={1} />
    </Document>
  );
}

export default AboutMeScreen;
