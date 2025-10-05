import React from "react";

const AboutMe: React.FC = () => {
  const timelineData = [
    {
      year: "2018",
      title: "The Spark",
      description: "Started assisting a friend with her business social media accounts, which grew into website maintenance.",
      icon: "⚡",
      color: "bg-burnt/80"
    },
    {
      year: "2020",
      title: "Learning Journey Begins",
      description: "Started diving deep into programming. Discovered passion for creating digital solutions and problem-solving.",
      icon: "🚀",
      color: "bg-plum"
    },
    {
      year: "2022",
      title: "Foundation Building",
      description: "Built fundamental skills in programming languages and development tools. First steps into the tech world.",
      icon: "🏗️",
      color: "bg-ash"
    },
    {
      year: "2024",
      title: "Full-Stack Developer",
      description: "Mastering React, TypeScript, and modern web development. Building portfolio projects and exploring new technologies.",
      icon: "💻",
      color: "bg-burnt"
    }
  ];

  return (
    <div className="py-16 px-4 bg-smoky">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-burnt to-whitesmoke opacity-100 md:text-5xl lg:text-6xl">My Journey</h2>
          <p className="text-lg text-whitesmoke/80 max-w-2xl mx-auto">
            From curiosity to capability - here's how I've grown as a developer
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative flex flex-col items-center">
          <div className="w-full overflow-x-auto">
            <div className="flex items-center justify-between gap-8 py-12 px-4 min-w-[700px]">
              {/* Timeline line */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-burnt/60 z-0" style={{ transform: 'translateY(-50%)' }}></div>
              {timelineData.map((item, idx) => (
                <div key={idx} className="relative flex flex-col items-center z-10 min-w-[180px]">
                  {/* Timeline node */}
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-2xl border-4 border-smoky shadow-lg mb-4`}>
                    {item.icon}
                  </div>
                  {/* Content */}
                  <div className="bg-whitesmoke/10 backdrop-blur-sm rounded-lg p-4 border border-whitesmoke/20 text-center w-full">
                    <div className="text-burnt font-bold text-lg mb-1">{item.year}</div>
                    <h3 className="text-base font-semibold text-whitesmoke mb-2">{item.title}</h3>
                    <p className="text-whitesmoke/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal touch */}
        <div className="text-center mt-12 bg-whitesmoke/10 backdrop-blur-sm rounded-lg p-8 border border-whitesmoke/20">
          <h3 className="text-2xl font-semibold text-whitesmoke mb-4">
            What Drives Me
          </h3>
          <p className="text-lg text-whitesmoke/80 leading-relaxed max-w-3xl mx-auto">
            I believe in the power of technology to solve real problems and create meaningful experiences. 
            Every project is an opportunity to learn something new and make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;