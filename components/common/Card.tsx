import React from 'react';
// Fix: Update CheckIcon import path after consolidating icons.
import { CheckIcon } from '../icons/DumbbellIcon';

const PricingPlan: React.FC<{ plan: string; price: string; features: string[]; popular?: boolean }> = ({ plan, price, features, popular = false }) => (
    <div className={`border rounded-xl p-8 flex flex-col ${popular ? 'border-emerald-500 bg-slate-800' : 'border-slate-700 bg-slate-800/50'}`}>
        {popular && <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">MOST POPULAR</span>}
        <h3 className="text-2xl font-bold text-white">{plan}</h3>
        <p className="mt-4 text-4xl font-bold text-white">${price}<span className="text-lg font-medium text-gray-400">/mo</span></p>
        <p className="mt-2 text-gray-400">Billed monthly. No hidden fees.</p>
        <ul className="mt-8 space-y-4 text-gray-300 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <CheckIcon className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full mt-8 py-3 px-6 font-bold rounded-lg transition-colors duration-300 ${popular ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
            Choose Plan
        </button>
    </div>
);

const Pricing: React.FC = () => {
    return (
        <section className="bg-slate-900/50 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Find Your <span className="text-emerald-400">Perfect Plan</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Simple, transparent pricing. Choose the plan that fits your goals and start your journey today.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <PricingPlan
                        plan="Forge Basic"
                        price="29"
                        features={['Full Gym Access', 'Cardio & Strength Equipment', 'Locker Rooms with Showers']}
                    />
                    <PricingPlan
                        plan="Forge Pro"
                        price="49"
                        features={['Everything in Basic', 'Unlimited Group Classes', 'Access to Sauna & Steam Room', '1x Monthly Guest Pass']}
                        popular={true}
                    />
                    <PricingPlan
                        plan="Forge Elite"
                        price="99"
                        features={['Everything in Pro', '4x Monthly Personal Training Sessions', 'Towel Service', 'Nutritional Guidance Consultation']}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
