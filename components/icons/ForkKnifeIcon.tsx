import React from 'react';
import { DumbbellIcon } from './DumbbellIcon';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 border-t border-slate-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                         <div className="flex items-center gap-2 text-white mb-4">
                            <DumbbellIcon className="w-7 h-7 text-emerald-400" />
                            <span className="text-xl font-bold">Fitness Forge</span>
                        </div>
                        <p className="text-gray-400 text-sm">The future of fitness is here. Join us and forge your best self.</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Contact</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="mailto:info@fitnessforge.com" className="text-gray-400 hover:text-emerald-400">info@fitnessforge.com</a></li>
                            <li><a href="tel:1234567890" className="text-gray-400 hover:text-emerald-400">(123) 456-7890</a></li>
                            <li className="text-gray-400">123 Fitness St, Workout City</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Hours</h3>
                        <ul className="mt-4 space-y-2 text-sm text-gray-400">
                            <li>Mon-Fri: 5am - 11pm</li>
                            <li>Sat: 7am - 9pm</li>
                            <li>Sun: 8am - 8pm</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Social</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400">Instagram</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400">Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400">X / Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fitness Forge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;