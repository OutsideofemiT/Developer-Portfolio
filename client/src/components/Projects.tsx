// ...existing code...
import React, { useState } from "react";

const images = [
  "../assets/Images/SmartGym/SGScr1.png",
  "../assets/Images/SmartGym/SGMembership1.png",
  "../assets/Images/SmartGym/SGJoin1.png",
  "../assets/Images/SmartGym/QRCheckin.png",
  "../assets/Images/SmartGym/Cafe.png",
  "../assets/Images/SmartGym/AdminDash.png",
];

const techStack = [
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "JWT",
  "Mongoose",
  "Bcrypt",
  "CORS",
  "Nodemailer",
];

const FeaturedProject: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goToIndex = (idx: number) => {
    if (idx === current) return;
    setCurrent(idx);
  };

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 px-4 bg-ash">
      <div className="max-w-6xl mx-auto">
        {/* Project Title & Subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">
            FEATURED PROJECT
          </h1>
          <br />
          <h2 className="text-5xl font-extrabold mb-2 text-lime tracking-tight">
            Smart Gym
          </h2>
          <p className="text-xl text-whitesmoke font-semibold mb-2">
            Smarter Fitness. Wherever You Are.
          </p>
          <span className="inline-block bg-gray/20 text-limeacc font-semibold px-4 py-1 rounded-full text-sm mb-2">
            Full Stack Application
          </span>
        </div>

        {/* Responsive layout: visuals left, narrative right */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Visuals: Floating Image Carousel */}
          <div className="flex-1 min-w-0 w-full max-w-2xl mx-auto flex flex-col items-center">
            <div className="relative w-full h-72 md:h-96 mb-6 flex items-center justify-center">
              <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                className="w-auto h-full object-contain shadow-2xl rounded-3xl bg-white/0"
                style={{
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
                }}
              />
              {/* Prev/Next Buttons */}
              <button
                type="button"
                onClick={goToPrev}
                className="absolute top-1/2 left-2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                aria-label="Previous"
              >
                <svg className="w-4 h-4 text-white rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute top-1/2 right-2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                aria-label="Next"
              >
                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              </button>
            </div>
            {/* Dot controls only */}
            <div className="flex justify-center mt-4 space-x-3">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    idx === current
                      ? "bg-plum"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Narrative sections (updated) */}
          <div className="flex-1 min-w-0 w-full max-w-2xl mx-auto flex flex-col justify-center px-2 md:px-8">
            <section className="mb-6">
              <h3 className="text-2xl font-bold text-lime mb-2">Project Summary</h3>
              <p className="text-whitesmoke/90 text-lg">
                Smart Gym is a full-stack MERN application built as a team project during the Dallas Software Developers cohort (July–August 2025). It manages the modern gym experience with features like check-ins, class scheduling, café ordering, and memberships.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-2xl font-bold text-lime mb-2">Team Cohort Contributions (MVP)</h3>
              <ul className="list-disc list-inside text-whitesmoke/80 space-y-1">
                <li>Started as frontend-focused: designed layout and UI, built the member portal UI, QR-code check-in/checkout function, and café page.</li>
                <li>Pivoted to full-stack responsibilities as the team reduced from six to three to ensure core features shipped.</li>
                <li>Authentication: implemented login tied to seeded users with role-based access (admin, trainer, member).</li>
                <li>Class Management: built the trainer/admin dashboard to create and manage gym classes.</li>
                <li>Café Ordering: implemented the user-facing café ordering flow and integrated Stripe payments for checkout.</li>
                <li>Membership Info: designed and implemented the membership tiers and join options page.</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-2xl font-bold text-lime mb-2">Post-Cohort Enhancements (Independent Work)</h3>
              <ul className="list-disc list-inside text-whitesmoke/80 space-y-1">
                <li>User Signup: replaced seeded-only accounts with a real signup process and updated seeded users for testing.</li>
                <li>User Model Refactor: migrated user and gym identifiers from email-based keys to MongoDB ObjectIDs for stability.</li>
                <li>Security Improvements: upgraded password storage to bcrypt with proper salting; retained JWT for sessions.</li>
                <li>User Profiles: implemented editable member profile management with backend schemas/routes and frontend UI.</li>
                <li>Stripe Extension: began extending Stripe integration from café purchases to membership signup/payments (in progress).</li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-2xl font-bold text-lime mb-2">Impact</h3>
              <p className="text-whitesmoke/80">
                This project demonstrates the ability to adapt from frontend specialist to full-stack contributor, take ownership of critical features under shifting team dynamics, and independently refactor and extend the codebase with a focus on security, scalability, and real-world integrations.
              </p>
            </section>

            <section className="mb-8">
              <h4 className="text-whitesmoke/70 text-base font-semibold mb-2 uppercase tracking-wide">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-limeacc/10 to-lime/10 text-whitesmoke text-sm px-4 py-2 rounded-lg border border-whitesmoke/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="bg-limeacc text-whitesmoke font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-plum/80 shadow-md"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/OutsideofemiT/Smart-Gym"
                className="border-2 border-whitesmoke/30 text-whitesmoke hover:text-plum hover:border-plum/50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-whitesmoke/10 shadow-md"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
