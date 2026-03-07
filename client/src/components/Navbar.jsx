import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import plantSvg from '../assets/plant.svg';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/50">

                {/* Logo Area */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <img src="/mohmitti.svg" alt="MohMitti logo" className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
                    <span className="text-lg md:text-xl font-black text-emerald-950 tracking-tight -ml-1">MohMitti</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Home', 'Collection', 'About Us', 'Care Guide'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[#5c4a3d] font-semibold text-sm hover:text-emerald-700 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Action Icons */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/60 text-[#5c4a3d] hover:text-emerald-950 hover:bg-white border border-white/40 transition-all shadow-sm">
                        <Search className="w-4 h-4" />
                    </button>

                    {/* Custom Shelf Icon container instead of standard cart */}
                    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-950 hover:bg-emerald-100 font-bold text-sm transition-all shadow-sm hover:shadow-md border border-emerald-200 gap-2 focus:outline-none">
                        <span className="hidden sm:inline">Your Plants</span>
                        <img src={plantSvg} alt="Plant icon" className="w-5 h-5 object-contain" />
                        <span className="bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ml-1">0</span>
                    </button>

                    <button 
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/60 text-[#5c4a3d] hover:text-emerald-950 hover:bg-white border border-white/40 shadow-sm transition-colors"
                        onClick={toggleMenu}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl rounded-3xl p-6 flex flex-col gap-4 origin-top transition-all duration-300">
                    {['Home', 'Collection', 'About Us', 'Care Guide'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="text-[#5c4a3d] font-bold text-lg hover:text-emerald-700 transition-colors py-2 border-b border-stone-100 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex gap-4 mt-2">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-stone-100 text-[#5c4a3d] font-semibold hover:bg-stone-200 transition-colors border border-stone-200">
                            <Search className="w-4 h-4" /> Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
