import React from 'react';

const TestimonialCard: React.FC<{ quote: string; name: string; role: string; }> = ({ quote, name, role }) => (
    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 h-full flex flex-col">
        <div className="flex-grow">
            <p className="text-gray-300">"{quote}"</p>
        </div>
        <div className="mt-6">
            <p className="font-bold text-white">{name}</p>
            <p className="text-sm text-emerald-400">{role}</p>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section className="bg-slate-800/50 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        What Our <span className="text-emerald-400">Members Say</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        We're proud of our community. Here's what they have to say about their experience at Fitness Forge.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TestimonialCard
                        quote="The trainers here are incredible. They pushed me to achieve goals I never thought were possible. The community vibe is just the cherry on top."
                        name="Sarah J."
                        role="Pro Member"
                    />
                    <TestimonialCard
                        quote="By far the cleanest and best-equipped gym I've ever been to. The variety of classes keeps my routine fresh and exciting."
                        name="Michael B."
                        role="Elite Member"
                    />
                    <TestimonialCard
                        quote="I was nervous about joining a gym, but the staff and members at Fitness Forge were so welcoming. I feel comfortable and motivated every time I walk in."
                        name="Emily R."
                        role="Basic Member"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
