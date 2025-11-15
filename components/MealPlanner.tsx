import React from 'react';
// Fix: Consolidate icon imports from the new centralized icon file.
import { DumbbellIcon, UsersIcon, TargetIcon } from './icons/DumbbellIcon';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors duration-300 shadow-lg text-center">
        <div className="mx-auto bg-slate-700 h-16 w-16 rounded-full flex items-center justify-center mb-6 border-2 border-slate-600">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section className="bg-slate-900 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Everything You Need to <span className="text-emerald-400">Succeed</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        We provide a complete ecosystem for health and fitness, tailored to help you achieve your personal best.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={<UsersIcon className="w-8 h-8 text-emerald-400" />}
                        title="Group Fitness Classes"
                        description="From high-intensity interval training to restorative yoga, find your motivation in our energetic group classes led by expert instructors."
                    />
                    <ServiceCard
                        icon={<TargetIcon className="w-8 h-8 text-emerald-400" />}
                        title="Personal Training"
                        description="Get one-on-one guidance with a certified personal trainer to create a customized plan that accelerates your results."
                    />
                    <ServiceCard
                        icon={<DumbbellIcon className="w-8 h-8 text-emerald-400" />}
                        title="Modern Equipment"
                        description="Our gym is equipped with the latest strength training machines, extensive free weights, and top-of-the-line cardio equipment."
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
