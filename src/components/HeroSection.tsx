import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src="/assets/Images/AboutMe/cdw3.jpg" 
                    alt="Carmen Wheeler" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Burnt Orange Overlay with Transparency */}
            <div className="absolute inset-0 bg-burnt opacity-40"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold text-whitesmoke mb-4">
                    Carmen Wheeler
                </h1>
                <p className="text-xl md:text-2xl text-whitesmoke mb-8 font-light">
                    Full Stack Developer
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-burnt hover:bg-opacity-80 text-whitesmoke px-8 py-3 rounded-lg font-semibold transition-all">
                        View My Work
                    </button>
                    <button className="border-2 border-whitesmoke text-whitesmoke hover:bg-whitesmoke hover:text-smoky px-8 py-3 rounded-lg font-semibold transition-all">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
