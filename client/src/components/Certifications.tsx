import React from "react";

const Certifications: React.FC = () => (
  <div
    className="py-16 px-4"
    style={{ background: "linear-gradient(180deg, #1e1e2f, #2e3440)" }} // Midnight gradient
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl text-center text-transparent font-stretch-200% bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">
        Certifications
      </h2>
    </div>
    <div className="flex flex-col items-center mt-10">
      {/* SEO Certification */}
      <div
        className="rounded-xl p-6 shadow-md w-full max-w-md flex flex-col items-center"
        style={{ background: "#2b2f3a" }} // dark plum gray
      >
        <div className="text-xl font-bold text-lime mb-1">
          SEO Certification
        </div>
        <div className="text-base italic mb-2" style={{ color: "#d1d5db" }}>
          HubSpot Academy <span style={{ color: "#9d4edd" }}>&mdash;</span> 2025
        </div>
        <a
          href="/Certificates/SEO_CERT.png"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <button
            className="font-semibold py-2 px-5 rounded-xl transition-all duration-300 text-center shadow-md"
            style={{
              border: "2px solid #b6f542",
              color: "#b6f542",
              background: "transparent"
            }}
          >
            View Credential
          </button>
        </a>
      </div>
      <br />
      {/* GEO Certification */}
      <div
        className="rounded-xl p-6 shadow-md w-full max-w-md flex flex-col items-center"
        style={{ background: "#2b2f3a" }}
      >
        <div className="text-xl font-bold text-lime mb-1">
          GEO Certification
        </div>
        <div className="text-base italic mb-2" style={{ color: "#d1d5db" }}>
          Obility <span style={{ color: "#9d4edd" }}>&mdash;</span> 2025
        </div>
        <a
          href="/Certificates/GEO_Cert.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2"
        >
          <button
            className="font-semibold py-2 px-5 rounded-xl transition-all duration-300 text-center shadow-md"
            style={{
              border: "2px solid #b6f542",
              color: "#b6f542",
              background: "transparent"
            }}
          >
              View Credential
            </button>
          </a>
        </div>
        <br />
        {/* AI for Engineers Certification */}
        <div
          className="rounded-xl p-6 shadow-md w-full max-w-md flex flex-col items-center"
          style={{ background: "#2b2f3a" }}
        >
          <div className="text-xl font-bold text-lime mb-1">
            AI for Engineers
          </div>
          <div className="text-base italic mb-2" style={{ color: "#d1d5db" }}>
            Datacamp <span style={{ color: "#9d4edd" }}>&mdash;</span>
          <p className="text-md text-lime font-light">
            In Progress
          </p>
          </div>
        </div>
      </div>
    </div>
);

export default Certifications;