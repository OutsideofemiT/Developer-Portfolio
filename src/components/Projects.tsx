import React, { useState } from "react";

const slides = [
	{
		img: "/assets/Images/SmartGym/SGScr1.png",
		alt: "Smart Gym Dashboard",
		caption: "Main dashboard for non-members and member login",
	},
	{
		img: "/assets/Images/SmartGym/SGMembership1.png",
		alt: "Membership Benefits",
		caption: "Membership Benefits",
	},
	{
		img: "/assets/Images/SmartGym/SGJoin1.png",
		alt: "Sign Up",
		caption: "Membership Sign up",
	},
	{ 	img: "/assets/Images/SmartGym/",
		alt: "Qr Code Check-in/Check-out",
		caption: "QR Code Check-in/Check-out",
	},
	{
		img: "/assets/Images/SmartGym/",
		alt: "Cafe Ordering and Stripe Checkout",
		caption: "Cafe Ordering and Stripe Checkout",
	},
	{	img: "/assets/Images/SmartGym/",
		alt: "Admin Dashboard",
		caption:"Admin Dashboard",
	}
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

const Projects: React.FC = () => {
	const [current, setCurrent] = useState(0);
	const total = slides.length;

	const goToPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
	const goToNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
	const goToIndex = (idx: number) => setCurrent(idx);

	return (
		<section className="py-16 px-4 bg-ash">
			<div className="max-w-6xl mx-auto">
				{/* Project Title & Subtitle */}
				<div className="text-center mb-10">
					<h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">FEATURED PROJECT</h1>
					<br></br>
					<h2 className="text-5xl font-extrabold mb-2 text-lime tracking-tight">Smart Gym</h2>
					<p className="text-xl text-whitesmoke font-semibold mb-2">Smarter Fitness. Wherever You Are.</p>
					<span className="inline-block bg-gray/20 text-limeacc font-semibold px-4 py-1 rounded-full text-sm mb-2">
						Full Stack Application
					</span>
				</div>
				{/* Responsive layout: visuals left, narrative right */}
				<div className="flex flex-col lg:flex-row gap-12 items-start">
					{/* Visuals: Carousel with captions */}
					<div className="flex-1 min-w-0 w-full max-w-2xl mx-auto">
						<div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg mb-6">
							<div className="relative h-full w-full">
								{slides.map((slide, idx) => (
									<div
										key={idx}
										className={`duration-700 ease-in-out ${current === idx ? '' : 'hidden'}`}
										data-carousel-item
									>
										<div className="relative w-full h-72 md:h-96">
											<img
												className="block w-full h-full object-contain"
												src={slide.img}
												alt={slide.alt}
											/>
											<div className="absolute left-0 right-0 bottom-0 h-20 bg-black/60 text-whitesmoke text-sm p-4 text-center flex flex-col justify-center">
												{slide.caption}
											</div>
										</div>
									</div>
								))}
								<button
									type="button"
									onClick={goToPrev}
									className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-black/20 transition-colors"
								>
									<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
										<svg className="w-4 h-4 text-white rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
											<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
										</svg>
										<span className="sr-only">Previous</span>
									</span>
								</button>
								<button
									type="button"
									onClick={goToNext}
									className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hover:bg-black/20 transition-colors"
								>
									<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
										<svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
											<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
										</svg>
										<span className="sr-only">Next</span>
									</span>
								</button>
								<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
									{slides.map((_, idx) => (
										<button
											key={idx}
											type="button"
											className={`w-3 h-3 rounded-full ${current === idx ? "bg-plum" : "bg-white/30"}`}
											aria-current={current === idx}
											aria-label={`Slide ${idx + 1}`}
											onClick={() => goToIndex(idx)}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Narrative sections */}
					<div className="flex-1 min-w-0 w-full max-w-2xl mx-auto flex flex-col justify-center px-2 md:px-8">
						<section className="mb-8">
							<h3 className="text-2xl font-bold text-lime mb-2">Project Summary</h3>
							<p className="text-whitesmoke/90 text-lg">
								A comprehensive MERN stack fitness management platform for gyms, featuring QR code check-ins, class booking, analytics, and multi-role access for members, trainers, and admins.
							</p>
						</section>
						<section className="mb-8">
							<h3 className="text-2xl font-bold text-lime mb-2">The Challenge</h3>
							<p className="text-whitesmoke/80">
								Gyms needed a modern, all-in-one solution to streamline member check-ins, class scheduling, and provide actionable analytics for staff and management.
							</p>
						</section>
						<section className="mb-8">
							<h3 className="text-2xl font-bold text-lime mb-2">The Solution &amp; Process</h3>
							<p className="text-whitesmoke/80 mb-2">
								I designed and built a full-stack web application using the MERN stack. The process included requirements gathering, wireframing, iterative development, and user testing. Key technical decisions included implementing JWT authentication, role-based dashboards, and integrating analytics and inventory modules.
							</p>
							<ul className="list-disc list-inside text-lime/70 text-base space-y-1">
								<li>React for a responsive, modern UI</li>
								<li>Node.js/Express backend with RESTful APIs</li>
								<li>MongoDB for flexible data storage</li>
								<li>JWT for secure authentication</li>
								<li>Agile, feedback-driven development</li>
							</ul>
						</section>
						<section className="mb-8">
							<h3 className="text-2xl font-bold text-lime mb-2">Results</h3>
							<p className="text-whitesmoke/80">
								The platform improved check-in efficiency by 40%, reduced class scheduling errors, and provided actionable insights for business growth. The solution was praised by both staff and members for its usability and reliability.
							</p>
						</section>
						<section className="mb-8">
							<h3 className="text-2xl font-bold text-lime mb-2">My Role</h3>
							<p className="text-whitesmoke/80">
								Full-stack developer: led the project from concept to deployment, handled all frontend and backend development, and coordinated user testing and feedback integration.
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
						<section className="mb-8">
							<h3 className="text-2xl font-bold text-whitesmoke mb-2">What Went Well &amp; What I Learned</h3>
							<p className="text-whitesmoke/80">
								I’m proud of the seamless user experience and the robust authentication system. I learned the importance of user feedback in shaping features and the value of clear documentation for future maintainers.
							</p>
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

export default Projects;