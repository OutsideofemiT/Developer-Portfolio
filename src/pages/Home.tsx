import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: React.FC = () => {

return (
	<>
		<NavBar />
		{/* Hero Section - Working Layout */}
		<section id="about" className="relative h-screen flex items-center overflow-hidden bg-black">
			{/* Left side - Image */}
			<div className="w-1/2 h-full flex items-center justify-center p-8">
				<img 
					src="/assets/Images/AboutMe/cdw3.jpg" 
					alt="Carmen Wheeler" 
					className="w-full max-w-md h-auto object-cover"
				/>
			</div>
			
			{/* Gradient Overlay - Smoky to Ash with subtle burnt */}
			<div className="absolute inset-0 bg-gradient-to-br from-smoky/70 via-ash/50 to-burnt/30"></div>
			<h1 className="text-4xl md:text-6xl font-bold text-whitesmoke mb-4">
				Still updating...
			</h1>
			<br></br>
			<div className="relative z-10 text-center px-6 md:px-12">
				<h1 className="text-4xl md:text-6xl font-bold text-whitesmoke mb-4">
					Carmen Wheeler
				</h1>
				<p className="text-xl md:text-2xl text-whitesmoke mb-8 font-light">
					Full Stack Developer
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link 
						to="/projects"
						className="bg-burnt hover:bg-opacity-80 text-whitesmoke px-8 py-3 rounded-lg font-semibold transition-all text-center"
					>
						View My Work
					</Link>
					<button 
						onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
						className="border-2 border-whitesmoke text-whitesmoke hover:bg-whitesmoke hover:text-smoky px-8 py-3 rounded-lg font-semibold transition-all"
					>
						Contact Me
					</button>
				</div>
			</div>
		</section>
		<section id="aboutme">
			<AboutMe />	
		</section>
		<section id="skills">
			<Skills />
		</section>
		<section id="projects">
			<Projects />
		</section>
		<section id="experience">
			<Experience />
		</section>
		<section id="contact">
			<Contact />
		</section>
		<Footer />
	</>
)
}
export default Home;