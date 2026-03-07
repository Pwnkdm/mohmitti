import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sun, Droplets, CloudRain, Ruler, Info } from 'lucide-react';

const ProductModal = ({ plant, onClose }) => {
    const [activeImage, setActiveImage] = useState('front');

    if (!plant) return null;

    // Creating mock variations of the single image since we only have one per plant
    const renderImage = () => {
        switch (activeImage) {
            case 'top':
                // Fake a top view with a scale and slight rotation
                return <img src={plant.image} alt="Top view" className="w-[80%] h-[80%] object-contain drop-shadow-xl scale-y-75 scale-x-110 -rotate-12 transition-all duration-500" />;
            case 'info':
                // Fake an info graphic view with lines
                return (
                    <div className="relative w-full h-full flex justify-center items-center">
                        <img src={plant.image} alt="Size info" className="w-[70%] h-[70%] object-contain drop-shadow-xl opacity-80" />

                        {/* Mock dimension lines */}
                        <div className="absolute left-1/4 top-1/4 bottom-1/4 w-px border-l-2 border-dashed border-amber-500/50"></div>
                        <div className="absolute left-1/4 top-1/4 -translate-y-1/2 -translate-x-full pr-2 text-amber-500 font-bold text-sm">H: 30"</div>

                        <div className="absolute bottom-1/4 left-1/2 right-1/4 h-px border-b-2 border-dashed border-amber-500/50"></div>
                        <div className="absolute bottom-1/4 left-3/4 translate-y-full pt-1 text-amber-500 font-bold text-sm">W: 10"</div>
                    </div>
                );
            case 'front':
            default:
                return <img src={plant.image} alt="Front view" className="w-[90%] h-[90%] object-contain drop-shadow-2xl transition-all duration-500" />;
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
                {/* Dark overlay with blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-emerald-950/20 backdrop-blur-sm"
                ></motion.div>

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-5xl bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center text-[#5c4a3d] hover:text-emerald-950 transition-colors shadow-sm cursor-pointer border border-white"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Left/Top Section: Image Gallery */}
                    <div className="w-full md:w-1/2 bg-[#f0f4e8]/50 flex flex-col border-b md:border-b-0 md:border-r border-white/40">
                        {/* Main Image Dispaly */}
                        <div className="flex-1 min-h-[40vh] md:min-h-0 relative flex items-center justify-center p-8 bg-gradient-to-br from-white/40 to-transparent">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeImage}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full flex items-center justify-center relative z-10"
                                >
                                    {renderImage()}
                                </motion.div>
                            </AnimatePresence>

                            {/* Decorative background blob */}
                            <div className="absolute inset-20 bg-emerald-100/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0"></div>
                        </div>

                        {/* Image Selectors */}
                        <div className="p-4 flex justify-center gap-4 bg-white/30 border-t border-white/20">
                            {[
                                { id: 'front', label: 'Front' },
                                { id: 'top', label: 'Top View' },
                                { id: 'info', label: 'Dimensions', icon: <Info className="w-3 h-3 ml-1 inline" /> }
                            ].map(img => (
                                <button
                                    key={img.id}
                                    onClick={() => setActiveImage(img.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeImage === img.id ? 'bg-amber-400 text-amber-950 shadow-md shadow-amber-500/20' : 'bg-white/40 text-[#5c4a3d] hover:bg-white hover:text-emerald-950 border border-white/60'}`}
                                >
                                    {img.label} {img.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right/Bottom Section: Info Boxes & CTA */}
                    <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col bg-white/20 overflow-y-auto">
                        <div className="mb-8">
                            <div className="inline-block px-3 py-1 bg-emerald-100/50 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200">
                                Premium Quality
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-emerald-950 mb-1">{plant.name}</h2>
                            <p className="text-xl text-[#5c4a3d] font-medium italic mb-2">{plant.subtitle}</p>
                            <p className="text-3xl font-black text-emerald-800">{plant.price}</p>
                        </div>

                        <div className="space-y-6 flex-1">
                            {/* Box 1: Care Requirements */}
                            <div className="bg-white/40 backdrop-blur-md rounded-2xl p-5 border border-white/60 shadow-sm">
                                <h3 className="text-sm font-bold text-emerald-800/80 uppercase tracking-wider mb-4 border-b border-white/50 pb-2">Care Requirements</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-2 group-hover:bg-amber-200 group-hover:scale-110 transition-all border border-amber-200">
                                            <Sun className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold text-[#3d3226]">Bright, Indirect</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-2 group-hover:bg-blue-200 group-hover:scale-110 transition-all border border-blue-200">
                                            <Droplets className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold text-[#3d3226]">Every 1-2 Weeks</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2 group-hover:bg-emerald-200 group-hover:scale-110 transition-all border border-emerald-200">
                                            <CloudRain className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold text-[#3d3226]">High Humidity</span>
                                    </div>
                                </div>
                            </div>

                            {/* Box 2: Physical Specs */}
                            <div className="bg-[#f0f4e8]/40 rounded-2xl p-5 border border-white/50">
                                <h3 className="text-sm font-bold text-emerald-800/80 uppercase tracking-wider mb-4 border-b border-white/50 pb-2 flex items-center gap-2">
                                    <Ruler className="w-4 h-4" /> Physical Specifications
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-[#5c4a3d] font-medium">Pot Material</span>
                                        <span className="font-semibold text-emerald-950">Premium Ceramic</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-[#5c4a3d] font-medium">Pot Diameter</span>
                                        <span className="font-semibold text-emerald-950">10 inches (25 cm)</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-[#5c4a3d] font-medium">Pot Height</span>
                                        <span className="font-semibold text-emerald-950">12 inches (30 cm)</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm">
                                        <span className="text-[#5c4a3d] font-medium">Total Plant Height</span>
                                        <span className="font-semibold text-emerald-950">28 - 36 inches</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Custom CTA */}
                        <div className="mt-8 pt-4 border-t border-white/30">
                            <button className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 hover:text-amber-950 rounded-full py-5 px-6 font-black text-lg transition-all hover:shadow-[0_10px_20px_rgba(251,191,36,0.3)] active:scale-95 flex items-center justify-center gap-3 group relative overflow-hidden focus:outline-none border border-amber-300">
                                <span className="relative z-10 transition-transform group-hover:-translate-y-1">Add to your shelf</span>
                                <div className="absolute inset-0 h-full w-full bg-amber-500 translate-y-[100%] rounded-full group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out z-0"></div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProductModal;
