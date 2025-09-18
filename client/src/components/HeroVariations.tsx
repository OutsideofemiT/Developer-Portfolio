import React from "react";

// Version 1: Gradient Overlay
export const HeroGradient: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-black">
            {/* Left side - Image */}
            <div className="w-1/2 h-full flex items-center justify-center p-8">
                <img 
                    src="/assets/Images/AboutMe/cdw3.jpg" 
                    alt="Carmen Wheeler" 
                    className="w-full max-w-md h-auto object-cover"
                />
            </div>
            
            {/* Gradient Overlay - Smoky to Ash with subtle plum */}
            <div className="absolute inset-0 bg-gradient-to-br from-smoky/70 via-ash/50 to-burnt/30"></div>
            
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

// Version 2: Side Split with Overlay
export const HeroSplit: React.FC = () => {
    return (
        <section className="relative h-screen flex overflow-hidden">
            {/* Left side - Image with overlay */}
            <div className="relative w-1/2">
                <img 
                    src="/assets/Images/AboutMe/cdw3.jpg" 
                    alt="Carmen Wheeler" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Right side - Content */}
            <div className="w-1/2 bg-smoky flex items-center justify-center p-12">
                <div className="text-left max-w-md">
                    <h1 className="text-4xl md:text-5xl font-bold text-whitesmoke mb-6">
                        Carmen Wheeler
                    </h1>
                    <p className="text-xl text-whitesmoke mb-8 font-light">
                        Crafting digital experiences with modern web technologies
                    </p>
                    <div className="flex flex-col gap-4">
                        <button className="bg-burnt hover:bg-opacity-80 text-whitesmoke px-8 py-3 rounded-lg font-semibold transition-all">
                            View My Work
                        </button>
                        <button className="border-2 border-ash text-whitesmoke hover:bg-ash hover:text-smoky px-8 py-3 rounded-lg font-semibold transition-all">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Version 3: Minimal Overlay with Blur Effect
export const HeroBlur: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="/assets/Images/AboutMe/Hero.png" 
                    alt="Carmen Wheeler" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Backdrop blur overlay */}
            <div className="absolute inset-0 bg-burnt/20 backdrop-blur-sm"></div>
            
            {/* Content with glass morphism card */}
            <div className="relative z-10 text-center px-6 md:px-12">
                <div className="bg-smoky/20 backdrop-blur-md border border-ash/30 rounded-2xl p-12">
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
            </div>
        </section>
    );
};
