import React from "react";
import { Link } from "react-router-dom";

const Experience: React.FC = () => (
  <div
  className="py-16 px-4"
  style={{
    background: "linear-gradient(180deg, rgba(30,30,47,0.7), rgba(46,52,64,0.7))",
  }}
>
  
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl text-center text-transparent font-stretch-200% bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">
        Resume
      </h2>
      <br></br>
      <p className="text-md text-center font-extralight text-lime-500 mb-8">
        My professional journey and accomplishments.
      </p>
    </div>
    <div className="flex flex-col items-center mt-10">
      <div
        className="rounded-xl p-6 shadow-md w-full max-w-md flex flex-col items-center"
        style={{ background: "rgba(43,47,58,0.4)"}}
      >
        <p className="text-1xl font-light mb-4 text-whitesmoke">
          Before transitioning into web development, I spent over a decade in management roles in customer service, fraud investigation, and onboarding coordination—roles that demanded empathy, precision, and systems thinking.
          <br />
          These experiences shaped how I approach software today: with a deep respect for user needs, clear communication, and scalable problem-solving.
          My technical skills are still growing, but my foundation in collaboration, compliance, and client care is rock solid.
        </p>
        <div className="flex flex-row justify-center gap-4 mt-4">
          <a href="/Resume/CW_RES_PDF.pdf" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-lime text-lime hover:text-lime hover:border-ash/50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-whitesmoke/10 shadow-md">
              View Resume
            </button>
          </a>
          <a href="/Resume/CW_RES_PDF.pdf" download>
            <button className="border-2 border-lime text-lime hover:text-lime hover:border-ash/50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-whitesmoke/10 shadow-md">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;