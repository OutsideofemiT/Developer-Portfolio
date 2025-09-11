import React from "react";
import { Link } from "react-router-dom";

const ProjectsPage: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: "Smart Gym",
            description: "A comprehensive MERN stack fitness management platform featuring QR code check-ins, class booking system, member/trainer/admin portals, analytics dashboard, and cafe inventory management.",
            image: "/assets/Images/SmartGym/SGScr.png",
            technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Mongoose", "Bcrypt", "CORS", "Nodemailer"],
            githubLink: "https://github.com/OutsideofemiT/Smart-Gym",
            liveLink: "#",
            featured: true
        },
        {
            id: 2,
            title: "Codezilla",
            description: "A gamified coding challenge platform where players battle through AI-generated programming questions, face unique bosses with themed difficulties, and compete on global leaderboards. Features full MERN stack with OpenAI integration.",
            image: "/assets/Images/Codezilla/Codezilla_Game_Map2.png",
            technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Apollo Client", "Node.js", "Express", "Apollo Server", "MongoDB", "JWT", "OpenAI API"],
            githubLink: "https://github.com/OutsideofemiT/Codezilla",
            liveLink: "#",
            featured: false
        },
        {
            id: 3,
            title: "Chaos Coordinator",
            description: "A professional cleaning services website featuring residential, commercial, and specialty cleaning solutions. Built with modern web technologies and responsive design for seamless user experience across devices.",
            image: "/assets/Images/ChaosCoordinator/ChaosCoord.png",
            technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Netlify", "Mobile-First Design"],
            githubLink: "https://github.com/OutsideofemiT/Chaos-Coordinator",
            liveLink: "https://chaoscoordinator.netlify.app/",
            featured: false
        },
        {
            id: 4,
            title: "DevUniverse",
            description: "A cosmic command center for developers featuring a minimalist dashboard with persistent note-taking, automatic todo extraction, customizable resource links, and a mantra-driven interface for focused productivity.",
            image: "/assets/Images/DevUniverse/DevUniverse.png",
            technologies: ["HTML5", "CSS3", "Vanilla JavaScript", "Local Storage API", "Modular JS", "DOM Manipulation"],
            githubLink: "https://github.com/OutsideofemiT/DevUniverse",
            liveLink: "#",
            featured: false
        }
    ];

    return (
        <div className="min-h-screen bg-burnt">
            {/* Header with Back Navigation */}
            <div className="bg-burnt/90 backdrop-blur-sm border-b border-whitesmoke/20 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <Link 
                        to="/" 
                        className="flex items-center text-whitesmoke hover:text-plum transition-colors duration-300 group"
                    >
                        <svg className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="font-semibold">Back to Portfolio</span>
                    </Link>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-plum to-whitesmoke opacity-100">
                        My Projects
                    </h1>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-lg text-whitesmoke/80 max-w-3xl mx-auto">
                            A collection of projects showcasing my full-stack development skills, from concept to deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <div 
                                key={project.id}
                                className="bg-gradient-to-br from-smoky/30 to-ash/20 backdrop-blur-sm rounded-2xl border border-whitesmoke/20 overflow-hidden hover:border-plum/50 transition-all duration-500 hover:shadow-2xl hover:shadow-plum/20 group hover:-translate-y-2 flex flex-col"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden h-64 rounded-t-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-smoky/60 to-transparent z-10"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-6 right-6 bg-gradient-to-r from-plum to-plum/80 text-whitesmoke text-sm font-semibold px-4 py-2 rounded-full shadow-lg z-20">
                                            ✨ Featured
                                        </div>
                                    )}
                                    
                                    {/* Overlay with project type */}
                                    <div className="absolute bottom-4 left-6 z-20">
                                        <span className="bg-whitesmoke/20 backdrop-blur-sm text-whitesmoke text-xs font-medium px-3 py-1 rounded-full border border-whitesmoke/30">
                                            {project.id === 1 ? 'Cohort Project' : 
                                             project.id === 2 ? 'AI-Powered App' : 
                                             project.id === 3 ? 'Client Work' : 
                                             'Personal Project'}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8 flex flex-col h-[450px]">
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-whitesmoke to-plum group-hover:from-plum group-hover:to-whitesmoke transition-all duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                        
                                        <div className="h-24 mb-6">
                                            <p className="text-whitesmoke/90 text-base leading-relaxed font-light line-clamp-4">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className="text-whitesmoke/70 text-sm font-semibold mb-3 uppercase tracking-wide">Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2 min-h-[80px] items-start">
                                                {project.technologies.map((tech, index) => (
                                                    <span 
                                                        key={index}
                                                        className="bg-gradient-to-r from-whitesmoke/10 to-plum/10 text-whitesmoke text-sm px-4 py-2 rounded-lg border border-whitesmoke/20 hover:border-plum/40 transition-colors duration-300 backdrop-blur-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <a 
                                            href={project.liveLink}
                                            className="flex-1 bg-gradient-to-r from-plum to-plum/80 hover:from-plum/90 hover:to-plum text-whitesmoke font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:shadow-xl hover:shadow-plum/30 transform hover:scale-105"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Demo
                                            </span>
                                        </a>
                                        <a 
                                            href={project.githubLink}
                                            className="flex-1 border-2 border-whitesmoke/30 text-whitesmoke hover:text-plum hover:border-plum/50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-center hover:bg-whitesmoke/10 transform hover:scale-105"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                                GitHub
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More Projects Coming Soon */}
                    <div className="text-center mt-20">
                        <div className="bg-gradient-to-br from-smoky/20 to-ash/10 backdrop-blur-sm rounded-2xl border border-whitesmoke/20 p-10 max-w-lg mx-auto hover:border-plum/30 transition-all duration-300">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-whitesmoke to-plum mb-4">
                                More Projects Coming Soon!
                            </h3>
                            <p className="text-whitesmoke/80 text-base leading-relaxed">
                                I'm constantly working on new projects and exploring different technologies. 
                                Check back regularly for updates!
                            </p>
                            <div className="mt-6 flex justify-center">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-plum rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-plum/70 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                                    <div className="w-2 h-2 bg-plum/40 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
