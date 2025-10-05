import React from "react";
import ExperienceSection from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";

const Credentials: React.FC = () => (
  <div className="py-16 px-4 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-6xl text-center text-transparent font-stretch-200% bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">
        Experience & Credentials
      </h2>
      <p className="text-lg text-center font-extralight text-slate-500 mb-8">
        My professional journey, education, and certifications.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <ExperienceSection />
      <Education />
      <Certifications />
    </div>
  </div>
);

export default Credentials;