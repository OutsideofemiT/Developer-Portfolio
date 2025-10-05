import React from "react";

const Education: React.FC = () => (
  <div
    className="py-16 px-4"
    style={{ background: "linear-gradient(180deg, #1e1e2f, #2e3440)" }} // Midnight gradient
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl text-center text-transparent font-stretch-200% bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">
        Education
      </h2>
    </div>
    <div className="flex flex-col items-center mt-10">
      <div
        className="rounded-xl p-6 shadow-md w-full max-w-md flex flex-col items-center"
        style={{ background: "#2b2f3a" }} // dark plum gray
      >
        <div className="text-xl font-bold text-lime mb-1">
          Software Development Bootcamp
        </div>
        <br></br>
        <div className="text-base font-light text-whitesmoke">
          <p>
            The SMU Coding Bootcamp is an intensive, 24-week program focused on full stack web development.
            The curriculum covers HTML, CSS, JavaScript, React, Node.js, databases, and more—emphasizing hands-on projects,
            collaborative problem-solving, and real-world application. Completing this bootcamp demonstrates a strong foundation
            in modern web technologies and a commitment to continuous learning.
          </p>
        </div>
        <br></br>
        <div className="text-base italic mb-2" style={{ color: "#d1d5db" }}>
          Southern Methodist University <span style={{ color: "#9d4edd" }}>&mdash;</span> 2025
        </div>
        <br></br>
        <a
          href="/Certificates/SMUCAPECertificate.pdf"
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
    </div>
  </div>
);

export default Education;