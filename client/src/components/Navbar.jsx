import React from 'react';
import { Search, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
            <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 hover:bg-white/50">

                {/* Logo Area */}
                <div className="flex items-center gap-2 cursor-pointer group">
                    <img src="/mohmitti.svg" alt="MohMitti logo" className="w-14 h-14 object-contain drop-shadow-sm group-hover:scale-105 transition-transform" />
                    <span className="text-xl font-black text-emerald-950 tracking-tight -ml-1">MohMitti</span>
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
                    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-amber-400 text-amber-950 hover:bg-amber-500 font-bold text-sm transition-all shadow-sm hover:shadow-md border border-amber-300 gap-2 focus:outline-none">
                        <span className="hidden sm:inline">Your Shelf</span>
                        {/* Custom SVG for a plant on a shelf */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 18v-2" />
                            <path d="M20 18v-2" />
                            <path d="M2 20h20" />
                            <path d="M9 16v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4" />
                            <path d="M12 9c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                        </svg>
                        <span className="bg-white/80 text-amber-950 text-xs w-5 h-5 rounded-full flex items-center justify-center ml-1">0</span>
                    </button>

                    <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/60 text-[#5c4a3d] hover:text-emerald-950 hover:bg-white border border-white/40 shadow-sm">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
