import React, { useState } from 'react';
import { DumbbellIcon } from './icons/DumbbellIcon';

interface HeaderProps {
    scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
    refs: {
        hero: React.RefObject<HTMLDivElement>;
        about: React.RefObject<HTMLDivElement>;
        services: React.RefObject<HTMLDivElement>;
        pricing: React.RefObject<HTMLDivElement>;
        testimonials: React.RefObject<HTMLDivElement>;
        contact: React.RefObject<HTMLDivElement>;
    };
}

const NavLink: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
    <button onClick={onClick} className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium">
        {children}
    </button>
);

const Header: React.FC<HeaderProps> = ({ scrollTo, refs }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { label: 'About', ref: refs.about },
        { label: 'Services', ref: refs.services },
        { label: 'Pricing', ref: refs.pricing },
        { label: 'Testimonials', ref: refs.testimonials },
        { label: 'Contact', ref: refs.contact },
    ];

    return (
        <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <button onClick={() => scrollTo(refs.hero)} className="flex items-center gap-2 text-white">
                            <DumbbellIcon className="w-8 h-8 text-emerald-400" />
                            <span className="text-2xl font-bold">Fitness Forge</span>
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map(link => (
                                <NavLink key={link.label} onClick={() => scrollTo(link.ref)}>{link.label}</NavLink>
                            ))}
                            <button onClick={() => scrollTo(refs.pricing)} className="bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                                Join Now
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                             <a key={link.label} onClick={() => { scrollTo(link.ref); setIsMenuOpen(false); }} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                                {link.label}
                            </a>
                        ))}
                    </div>
                     <div className="p-4">
                        <button onClick={() => { scrollTo(refs.pricing); setIsMenuOpen(false); }} className="w-full bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-600 transition-colors duration-300">
                            Join Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
