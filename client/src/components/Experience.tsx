import React from "react";
import { Link } from "react-router-dom";

const Experience: React.FC = () => {
    return (
        <div className="py-16 px-4 bg-burnt/70">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl text-center text-transparent font-stretch-200% bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">
                    Experience
                </h2>
                <p className="text-lg text-center font-extralight text-slate-500 mb-8">
                    My professional journey and accomplishments.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-1xl font-light text-justify mb-4 text-whitesmoke max-w-2xl">
                    Before transitioning into web development, I spent over a decade in management roles in customer service, fraud investigation, and onboarding coordination—
                    roles that demanded empathy, precision, and systems thinking.
                    <br />
                    These experiences shaped how I approach software today: with a deep respect for user needs, clear communication, and scalable problem-solving.
                    My technical skills are still growing, but my foundation in collaboration, compliance, and client care is rock solid.
                </p>
                <div className="flex flex-row justify-center gap-4 mt-4">
                    <a href="/Resume/CW_RES_PDF.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="border-2 border-whitesmoke/30 text-whitesmoke hover:text-whitesmoke hover:border-ash/50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-whitesmoke/10 shadow-md">
                            View Resume
                        </button>
                    </a>
                    <a
                        href="/Resume/CW_RES_PDF.pdf"
                        download
                    >
                        <button className="border-2 border-whitesmoke/30 text-whitesmoke hover:text-whitesmoke hover:border-ash/50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-whitesmoke/10 shadow-md">
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Experience;