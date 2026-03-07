import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images
import monsteraImg from '../assets/monstera.png';
import snakePlantImg from '../assets/snake_plant.png';
import fiddleLeafImg from '../assets/fiddle_leaf.png';
import arecaPalmImg from '../assets/areca_palm.png';
import moneyPlantImg from '../assets/money_plant.png';
import peaceLilyImg from '../assets/peace_lily.png';
import rubberPlantImg from '../assets/rubber_plant.png';
import jasmineImg from '../assets/Jasmine.png';
import bougainvilleaImg from '../assets/bougenvilia.png';
import cannaLilyImg from '../assets/canna_lily.png';
import ixoraImg from '../assets/ixora_plant.png';

const showcasePlants = [
    // Indoor Plants
    {
        id: 'monstera',
        name: 'Monstera Deliciosa',
        subtitle: 'Swiss Cheese Plant',
        price: '₹1,299',
        image: monsteraImg,
        category: 'indoor'
    },
    {
        id: 'snake-plant',
        name: 'Sansevieria Trifasciata',
        subtitle: 'Snake Plant',
        price: '₹899',
        image: snakePlantImg,
        category: 'indoor'
    },
    {
        id: 'fiddle-leaf',
        name: 'Ficus Lyrata',
        subtitle: 'Fiddle Leaf Fig',
        price: '₹1,599',
        image: fiddleLeafImg,
        category: 'indoor'
    },
    {
        id: 'peace-lily',
        name: 'Spathiphyllum Wallisii',
        subtitle: 'Peace Lily',
        price: '₹750',
        image: peaceLilyImg,
        category: 'indoor'
    },
    {
        id: 'areca-palm',
        name: 'Dypsis Lutescens',
        subtitle: 'Areca Palm',
        price: '₹1,099',
        image: arecaPalmImg,
        category: 'indoor'
    },
    {
        id: 'money-plant',
        name: 'Epipremnum Aureum',
        subtitle: 'Money Plant',
        price: '₹450',
        image: moneyPlantImg,
        category: 'indoor'
    },
    {
        id: 'rubber-plant',
        name: 'Ficus Elastica',
        subtitle: 'Rubber Plant',
        price: '₹850',
        image: rubberPlantImg,
        category: 'indoor'
    },
    // Outdoor / Ornamental Plants
    {
        id: 'bougainvillea',
        name: 'Bougainvillea Glabra',
        subtitle: 'Paper Flower',
        price: '₹1,150',
        image: bougainvilleaImg,
        category: 'outdoor'
    },
    {
        id: 'jasmine',
        name: 'Jasminum',
        subtitle: 'Jasmine Plant',
        price: '₹499',
        image: jasmineImg,
        category: 'outdoor'
    },
    {
        id: 'canna-lily',
        name: 'Canna Indica',
        subtitle: 'Canna Lily',
        price: '₹650',
        image: cannaLilyImg,
        category: 'outdoor'
    },
    {
        id: 'ixora',
        name: 'Ixora Coccinea',
        subtitle: 'Jungle Geranium',
        price: '₹550',
        image: ixoraImg,
        category: 'outdoor'
    }
];

const PlantShowcase = ({ onPlantClick }) => {
    const [activeCategory, setActiveCategory] = useState('indoor');

    const filteredPlants = showcasePlants.filter(plant => plant.category === activeCategory);

    return (
        <section className="w-full min-h-screen bg-[#0f1511] py-24 relative overflow-hidden">
            {/* Background decorative elements - Glowing Orbs for Glass Refraction */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
                <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-amber-600 rounded-full mix-blend-screen filter blur-[150px] opacity-30"></div>
                <div className="absolute -bottom-20 left-1/4 w-[30rem] h-[30rem] bg-emerald-800 rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-stone-50 mb-4 tracking-tight">Curated Collection</h2>
                    <p className="text-stone-400 text-lg max-w-2xl mx-auto mb-10">Discover our premium selection of hardy indoor and vibrant outdoor ornamental plants.</p>

                    {/* Category Tabs */}
                    <div className="inline-flex bg-white/5 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-lg">
                        <button
                            onClick={() => setActiveCategory('indoor')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === 'indoor' ? 'bg-amber-500 text-amber-950 shadow-md' : 'text-stone-300 hover:text-white'}`}
                        >
                            Indoor Plants
                        </button>
                        <button
                            onClick={() => setActiveCategory('outdoor')}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === 'outdoor' ? 'bg-amber-500 text-amber-950 shadow-md' : 'text-stone-300 hover:text-white'}`}
                        >
                            Outdoor Ornamentals
                        </button>
                    </div>
                </motion.div>

                {/* Grid of plants */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 min-h-[50vh]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPlants.map((plant, idx) => (
                            <motion.div
                                layout
                                key={plant.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative group cursor-pointer w-full flex flex-col items-center pt-24 pb-8"
                                onClick={() => onPlantClick(plant)}
                            >
                                {/* The plant image - hovering/floating above the platform */}
                                <motion.div
                                    className="absolute top-0 w-full flex justify-center z-20"
                                    whileHover={{ y: -15, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="h-80 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_35px_35px_rgba(32,154,103,0.3)] transition-all duration-300"
                                    />
                                </motion.div>

                                {/* Blur mirror platform - Dark Mode Frosted Glass */}
                                <div className="w-full mt-36 bg-white/5 backdrop-blur-[32px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl p-6 pt-20 flex flex-col items-center relative z-10 overflow-hidden group-hover:bg-white/10 transition-all duration-300">

                                    {/* Subtle reflection effect at the top of the card */}
                                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-3xl border-t border-white/20"></div>

                                    <h3 className="text-xl font-bold text-stone-100 mb-1 text-center leading-tight">{plant.subtitle}</h3>
                                    <p className="text-stone-400 text-xs mb-4 font-medium italic text-center opacity-90">{plant.name}</p>

                                    <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-white/10">
                                        <span className="text-lg font-black text-amber-500">{plant.price}</span>
                                        <button className="flex items-center justify-center bg-white/10 hover:bg-amber-500 hover:text-amber-950 text-stone-200 rounded-full px-3 py-1.5 text-xs font-bold transition-all border border-white/10 hover:border-amber-400 shadow-sm">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default PlantShowcase;
