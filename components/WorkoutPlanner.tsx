import React from 'react';

interface HeroProps {
    scrollToPricing: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToPricing }) => {
    return (
        <section className="relative bg-slate-900 text-white py-32 md:py-48 text-center overflow-hidden">
             <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
             <div className="absolute inset-0 z-[-1]" style={{backgroundImage: `radial-gradient(circle at top right, rgba(16, 185, 129, 0.2), transparent 40%), radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.2), transparent 50%)`}}></div>
            <div className="container mx-auto px-6 relative z-10">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Forge Your Ultimate
                </h1>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-emerald-400 mt-2">
                    Fitness Journey
                </h2>
                <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                    State-of-the-art equipment, expert trainers, and a vibrant community await. Unleash your potential at Fitness Forge.
                </p>
                <div className="mt-10">
                    <button 
                        onClick={scrollToPricing}
                        className="bg-emerald-500 text-white font-bold py-4 px-10 rounded-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                        View Membership Plans
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;