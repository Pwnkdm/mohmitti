import React from 'react';
import { motion } from 'framer-motion';
import gardenCrotonImg from '../assets/plants/Garden_Croton.webp';

const AboutUs = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-12 bg-[#fdfdfb] text-stone-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-emerald-950 mb-6 tracking-tight leading-[1.1]">
                        Rooted in Nature, <br/><span className="text-amber-500">Grown with Care.</span>
                    </h1>
                    <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                        MohMitti was born from a simple belief: every home deserves a touch of vibrant green. We curate hardy, beautiful, and sustainable plants that breathe life into your spaces, whether it's a cozy apartment corner or a bright outdoor patio.
                    </p>
                    <p className="text-lg text-stone-600 leading-relaxed font-serif italic border-l-4 border-emerald-500 pl-6 my-8">
                        "We don't just sell plants; we deliver companions that grow alongside you."
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 w-full"
                >
                    <div className="relative aspect-square md:aspect-[4/5] w-full max-w-lg mx-auto bg-gradient-to-br from-emerald-100 to-amber-50 rounded-3xl overflow-hidden shadow-2xl p-8 flex items-center justify-center">
                        <img src={gardenCrotonImg} alt="MohMitti team aesthetic" className="w-[120%] h-[120%] object-contain scale-110 drop-shadow-[0_30px_40px_rgba(0,0,0,0.3)]" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutUs;
