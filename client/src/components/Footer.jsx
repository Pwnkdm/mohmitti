import React from 'react';
import { Instagram, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#0f1511] pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background glowing effects for premium feel */}
            <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-900/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                            <img src="/mohmitti.svg" alt="MohMitti logo" className="w-16 h-16 object-contain drop-shadow-sm brightness-0 invert group-hover:scale-105 transition-transform" />
                            <span className="text-2xl font-black text-stone-50 tracking-tight -ml-1">MohMitti</span>
                        </div>
                        <p className="text-stone-400 mb-6 font-medium leading-relaxed">
                            Bringing the lush serenity of the outdoors into your premium living spaces. Curated, hardy, and beautiful ornamental plants.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-stone-100 font-bold mb-6 tracking-wide">Explore</h3>
                        <ul className="space-y-4">
                            {['Indoor Oasis', 'Outdoor Ornamentals', 'Rare Succulents', 'Care Guides', 'Our Story'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-stone-100 font-bold mb-6 tracking-wide">Support</h3>
                        <ul className="space-y-4">
                            {['FAQ', 'Shipping & Returns', 'Track Your Order', 'Plant Doctor', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="text-stone-100 font-bold mb-4 tracking-wide">Join the Botanical Club</h3>
                        <p className="text-stone-400 mb-6 text-sm font-medium">Subscribe for weekly plant care tips, exclusive drops, and 10% off your first shelf addition.</p>
                        <form className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="w-4 h-4 text-stone-500 group-focus-within:text-amber-500 transition-colors" />
                            </div>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 text-stone-100 rounded-full py-3.5 pl-11 pr-32 focus:outline-none focus:border-amber-500 focus:bg-white/10 transition-all placeholder:text-stone-600"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold rounded-full px-5 text-sm transition-all hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-stone-500 text-sm font-medium">
                        &copy; {new Date().getFullYear()} MohMitti Botanical. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm font-medium text-stone-500">
                        <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-300 transition-colors">Terms of Service</a>
                    </div>
                </div>

                {/* Large Background Typography */}
                <div className="mt-12 text-center pointer-events-none select-none overflow-hidden">
                    <h1 className="text-[15vw] font-black tracking-tighter text-white/[0.02] leading-none uppercase">
                        MohMitti
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
