import React from "react";
import Chatbot from "./Chatbot";

const Contact: React.FC = () => {
	return (
		<div className="py-16 px-4 bg-slate-900">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-6xl text-transparent text-center bg-clip-text bg-gradient-to-r to-lime	from-whitesmoke opacity-100">
					Contact Me
				</h2>
				<p className="text-lg text-center text-lime/80 mb-8">
					Let's connect and discuss opportunities.
				</p>
			</div>
			<Chatbot />
		</div>
	)
}
export default Contact;