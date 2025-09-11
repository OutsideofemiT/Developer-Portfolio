import React from "react";

const Skills: React.FC = () => {

	return (
		<div className="py-16 px-4 bg-burnt/70">
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h1 className="mb-4 text-3xl font-extrabold text-whitesmoke md:text-5xl lg:text-6xl">
						<span className="text-transparent bg-clip-text bg-gradient-to-r to-plum from-whitesmoke opacity-100">My Tech Stack</span>
					</h1>
					<p className="text-lg font-normal text-whitesmoke/80 lg:text-xl max-w-3xl mx-auto">
						I specialize in full-stack development with the MERN stack, creating scalable web applications from concept to deployment.
					</p>
				</div>

				{/* MERN Stack - Big Letters Display */}
				<div className="mb-20">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
						{/* MongoDB */}
						<div className="text-center group cursor-pointer">
							<div className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-400 to-gray-400 opacity-100 hover:opacity-80 transition-opacity duration-300">
								M
							</div>
							<p className="text-whitesmoke font-semibold text-lg mt-2 opacity-80 group-hover:opacity-100 transition-opacity">MongoDB</p>
						</div>

						{/* Express */}
						<div className="text-center group cursor-pointer">
							<div className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-gray-400 opacity-100 hover:opacity-80 transition-opacity duration-300">
								E
							</div>
							<p className="text-whitesmoke font-semibold text-lg mt-2 opacity-80 group-hover:opacity-100 transition-opacity">Express.js</p>
						</div>

						{/* React */}
						<div className="text-center group cursor-pointer">
							<div className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-cyan-600 opacity-100 hover:opacity-80 transition-opacity duration-300">
								R
							</div>
							<p className="text-whitesmoke font-semibold text-lg mt-2 opacity-80 group-hover:opacity-100 transition-opacity">React</p>
						</div>

						{/* Node */}
						<div className="text-center group cursor-pointer">
							<div className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-green-700 opacity-100 hover:opacity-80 transition-opacity duration-300">
								N
							</div>
							<p className="text-whitesmoke font-semibold text-lg mt-2 opacity-80 group-hover:opacity-100 transition-opacity">Node.js</p>
						</div>
					</div>
				</div>

				{/* Additional Tools & Technologies */}
				<div className="border-t border-whitesmoke/20 pt-12">
					<h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-plum to-whitesmoke opacity-100">
						Additional Tools & Technologies
					</h3>
					
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
						{[
							'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Git & GitHub',
							'VS Code', 'Postman', 'Figma', 'Netlify',
							'Render', 'JWT Authentication', 'RESTful APIs', 'Responsive Design'
						].map((tech, index) => (
							<div 
								key={index}
								className="bg-smoky/10 backdrop-blur-sm rounded-lg p-4 text-center border border-whitesmoke/20 hover:border-plum/50 hover:bg-whitesmoke/20 transition-all duration-300 cursor-pointer group"
							>
								<span className="text-whitesmoke font-medium group-hover:text-plum transition-colors duration-300">
									{tech}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<p className="text-whitesmoke/80 text-lg mb-6 max-w-2xl mx-auto">
						Want to see these technologies in action? Explore my complete project portfolio.
					</p>
					<a 
						href="/projects"
						className="inline-block bg-gradient-to-r from-plum to-plum/80 hover:from-plum/90 hover:to-plum text-whitesmoke font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-plum/25"
					>
						View All Projects
					</a>
				</div>
			</div>
		</div>
);
}
export default Skills;