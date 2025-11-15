import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/WorkoutPlanner';
import About from './components/common/Loader';
import Services from './components/MealPlanner';
import Pricing from './components/common/Card';
import Testimonials from './components/common/Select';
import Footer from './components/icons/ForkKnifeIcon';

const App: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const refs = {
        hero: heroRef,
        about: aboutRef,
        services: servicesRef,
        pricing: pricingRef,
        testimonials: testimonialsRef,
        contact: contactRef,
    };

    const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="bg-slate-900 text-gray-300 antialiased">
            <Header scrollTo={scrollTo} refs={refs} />
            <main>
                <div ref={heroRef}><Hero scrollToPricing={() => scrollTo(pricingRef)} /></div>
                <div ref={aboutRef}><About /></div>
                <div ref={servicesRef}><Services /></div>
                <div ref={pricingRef}><Pricing /></div>
                <div ref={testimonialsRef}><Testimonials /></div>
                <div ref={contactRef}><Footer /></div>
            </main>
        </div>
    );
};

export default App;
