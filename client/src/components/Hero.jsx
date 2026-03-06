import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, Heart } from 'lucide-react';

// Import images
import monsteraImg from '../assets/monstera.png';
import snakePlantImg from '../assets/snake_plant.png';
import fiddleLeafImg from '../assets/fiddle_leaf.png';

const plants = [
    {
        id: 'monstera',
        name: 'Monstera Deliciosa',
        shortName: 'Monstera',
        subtitle: 'The iconic Swiss Cheese Plant',
        rating: 4.9,
        curatorName: 'Sarah Jenkins',
        curatorAvatar: 'https://i.pravatar.cc/150?u=sarah',
        description: 'Known for its stunning split leaves, the Monstera Deliciosa is a statement piece that brings tropical vibes to any modern living space. Easy to care for and fast-growing.',
        image: monsteraImg,
        thumbnail: monsteraImg,
        bgColor: 'from-emerald-50 to-teal-100',
    },
    {
        id: 'snake-plant',
        name: 'Sansevieria Trifasciata',
        shortName: 'Snake Plant',
        subtitle: 'The ultimate air purifier',
        rating: 4.8,
        curatorName: 'Marcus Chen',
        curatorAvatar: 'https://i.pravatar.cc/150?u=marcus',
        description: 'An architectural beauty that is nearly indestructible. The Snake Plant purifies your air efficiently while requiring minimal watering and thriving in almost any light condition.',
        image: snakePlantImg,
        thumbnail: snakePlantImg,
        bgColor: 'from-green-50 to-lime-100',
    },
    {
        id: 'fiddle-leaf',
        name: 'Ficus Lyrata',
        shortName: 'Fiddle Leaf Fig',
        subtitle: 'The designer\'s favorite',
        rating: 4.7,
        curatorName: 'Elena Russo',
        curatorAvatar: 'https://i.pravatar.cc/150?u=elena',
        description: 'With its large, violin-shaped leaves, the Fiddle Leaf Fig is the darling of interior design. It creates a bold, sculptural focal point in bright, indirect light.',
        image: fiddleLeafImg,
        thumbnail: fiddleLeafImg,
        bgColor: 'from-stone-50 to-emerald-100',
    }
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('overview');

    // Auto-play interval
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % plants.length);
        }, 7000); // 7 seconds per slide
        return () => clearInterval(interval);
    }, []);

    const activePlant = plants[activeIndex];

    const handleThumbnailClick = (index) => {
        if (index === activeIndex) return;
        setActiveIndex(index);
    };

    // Animation variants for curved path
    const slideVariants = {
        enter: {
            // Start mid-top
            x: '50vw',
            y: '-100vh',
            opacity: 0,
            scale: 0.8,
            rotateZ: 45,
        },
        center: {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotateZ: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20,
                mass: 1.2,
                restDelta: 0.001
            }
        },
        exit: {
            // Exit curved left/down
            x: '-80vw',
            y: '20vh',
            opacity: 0,
            scale: 0.6,
            rotateZ: -45,
            transition: {
                duration: 0.8,
                ease: [0.32, 0, 0.67, 0] // cubic-bezier smooth transition out
            }
        },
    };

    return (
        <section className={`relative w-full min-h-screen overflow-hidden bg-gradient-to-br ${activePlant.bgColor} transition-colors duration-1000 ease-in-out font-sans flex flex-col justify-end lg:justify-center`}>

            {/* Main Container */}
            <div className="w-full h-full min-h-screen px-6 md:px-12 lg:px-24 py-12 lg:py-0 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-24 lg:pt-0">

                {/* Center Typography (Background Layer) */}
                <div className="absolute top-1/4 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 -translate-y-1/4 text-center w-full z-0 pointer-events-none select-none">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`bg-title-${activeIndex}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 0.05, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                            className="text-[12vw] font-black uppercase text-emerald-900 tracking-tighter whitespace-nowrap"
                        >
                            {activePlant.shortName}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                {/* Center-Left: Hero Image */}
                <div className="w-full lg:w-[45%] h-[40vh] lg:h-[70vh] relative z-20 flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`image-${activeIndex}`}
                            src={activePlant.image}
                            alt={activePlant.name}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute max-w-[120%] max-h-[120%] object-contain filter drop-shadow-2xl mix-blend-multiply origin-center"
                        />
                    </AnimatePresence>
                </div>

                {/* Right Side: Info Card */}
                <div className="w-full lg:w-[40%] xl:w-[35%] z-30 mb-24 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 overflow-hidden relative"
                    >
                        {/* dynamic content wrapper */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`content-${activeIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* Header info */}
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">{activePlant.name}</h2>
                                        <p className="text-emerald-600 font-medium mt-1">{activePlant.subtitle}</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full shadow-sm text-sm font-bold text-slate-700">
                                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        {activePlant.rating}
                                    </div>
                                </div>

                                {/* Curator */}
                                <div className="flex items-center gap-3 mb-6 bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                                    <img src={activePlant.curatorAvatar} alt={activePlant.curatorName} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium">Curated by</p>
                                        <p className="text-sm font-semibold text-slate-800">{activePlant.curatorName}</p>
                                    </div>
                                </div>

                                {/* Tabs */}
                                <div className="flex gap-6 border-b border-slate-200 mb-6">
                                    {['overview', 'care guide'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-2 text-sm font-semibold capitalize relative transition-colors ${activeTab === tab ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-emerald-600 rounded-t-full"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                {/* Description */}
                                <div className="min-h-[100px] mb-8">
                                    <p className="text-slate-600 leading-relaxed">
                                        {activeTab === 'overview' ? activePlant.description : 'Water every 1-2 weeks. Prefers bright, indirect light. Wipe leaves with a damp cloth to remove dust.'}
                                    </p>
                                </div>

                                {/* CTAs */}
                                <div className="flex items-center gap-4">
                                    <button className="flex-1 bg-emerald-600 text-white rounded-full py-4 px-6 font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95 flex items-center justify-center gap-2 group">
                                        Add to Cart
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-slate-700 hover:text-rose-500 border border-slate-200 shadow-sm hover:shadow-md transition-all active:scale-95">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>

            {/* Bottom Center: Thumbnail Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-6 focus left-0 right-0 z-40 flex justify-center"
            >
                <div className="flex items-center gap-4 p-3 bg-white/50 backdrop-blur-md rounded-full shadow-lg border border-white/60">
                    {plants.map((plant, idx) => (
                        <button
                            key={plant.id}
                            onClick={() => handleThumbnailClick(idx)}
                            className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeIndex === idx ? 'border-emerald-500 scale-110 shadow-md' : 'border-transparent scale-100 hover:scale-105 opacity-60 hover:opacity-100'}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${plant.bgColor} opacity-50`}></div>
                            <img src={plant.thumbnail} alt={`Thumbnail ${plant.shortName}`} className="absolute w-[120%] h-[120%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain mix-blend-multiply filter drop-shadow-md" />
                        </button>
                    ))}
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
