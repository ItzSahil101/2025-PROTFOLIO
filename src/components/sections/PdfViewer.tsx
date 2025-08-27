import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

// ✅ Use the minified worker from a CDN (works in CRA, Vite, etc.)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDF_PATH = "/ppdf.pdf"; // ✅ should be inside public/

const PdfViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [fallback, setFallback] = useState<boolean>(false);

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const onAnyError = (err: unknown) => {
    console.error("react-pdf error:", err);
    setFallback(true); // fall back if react-pdf fails
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 w-full max-w-6xl">
      <h2 className="text-3xl font-bold text-white mb-8">My PDF 📄</h2>

      {!fallback && (
        <Document
          file={PDF_PATH}
          onLoadSuccess={onLoadSuccess}
          onLoadError={onAnyError}
          onSourceError={onAnyError}
          loading={<div className="text-white">Loading PDF…</div>}
          error={<div className="text-red-400">Viewer error. Falling back…</div>}
          options={{
            cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        >
          {/* ✅ Renders all pages automatically */}
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(
                900,
                typeof window !== "undefined" ? window.innerWidth - 48 : 600
              )}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="mb-6"
            />
          ))}
        </Document>
      )}

      {fallback && (
        <div className="w-full">
          <object
            data={PDF_PATH}
            type="application/pdf"
            className="w-full h-[720px] rounded-xl shadow-lg"
          >
            <iframe src={PDF_PATH} className="w-full h-[720px] rounded-xl shadow-lg" />
            <p className="text-white mt-4">
              Your browser can’t display the PDF.{" "}
              <a
                href={PDF_PATH}
                target="_blank"
                rel="noreferrer"
                className="underline ml-2"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </object>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
