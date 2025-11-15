import React from 'react';

const About: React.FC = () => {
    return (
        <section className="bg-slate-800/50 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="md:pr-8">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            More Than Just a <span className="text-emerald-400">Gym</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-400">
                            At Fitness Forge, we blend cutting-edge technology with proven fitness principles to create a truly personalized experience. Our mission is to provide you with the tools, support, and community you need to not just meet, but exceed your fitness aspirations.
                        </p>
                        <p className="mt-4 text-lg text-gray-400">
                            We believe that fitness is a journey, not a destination. Whether you're a seasoned athlete or just starting out, our facility and staff are here to guide you every step of the way.
                        </p>
                    </div>
                    <div className="h-80 md:h-96 bg-slate-700 rounded-2xl border border-slate-600 overflow-hidden">
                        <img
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fmodern-gym-interior&psig=AOvVaw2i7aNHsl-4AXDvQQsvkvZI&ust=1763286117081000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKiYg-fu85ADFQAAAAAdAAAAABAE"
                            alt="Gym interior"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;