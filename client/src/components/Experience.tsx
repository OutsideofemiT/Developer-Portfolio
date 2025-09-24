import React from "react";

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
			<div className="grid-cols-1 bg-burnt/5">
			<p className="text-1xl font-light text-left mb-4 text-whitesmoke">
				Before transitioning into web development, I spent nearly a decade in customer service, fraud investigation, and onboarding coordination—
				roles that demanded empathy, precision, and systems thinking.
				<br />
				These experiences shaped how I approach software today: with a deep respect for user needs, clear communication, and scalable problem-solving.
				My technical skills are still growing, but my foundation in collaboration, compliance, and client care is rock solid.
			</p>
			</div>
			</div>
		
	)
}

export default Experience;