import React from 'react';
import { Droplets, Sun, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

const CareGuide = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-24 bg-[#0f1511]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-black text-stone-50 mb-6 tracking-tight">Plant Care 101</h1>
                    <p className="text-xl text-stone-400">Master the basics of keeping your leafy companions thriving year-round.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Water */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                            <Droplets className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Watering Wisely</h3>
                        <p className="text-stone-400 leading-relaxed">
                            The golden rule: Less is often more. Always check the top two inches of soil before watering. If it's dry, give it a thorough soak until water drains from the bottom. Yellowing leaves usually indicate overwatering, while crispy brown edges mean it's too dry.
                        </p>
                    </motion.div>

                    {/* Light */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                            <Sun className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Lighting Needs</h3>
                        <p className="text-stone-400 leading-relaxed">
                            <strong>Indirect Light:</strong> Bright rooms but away from harsh sunbeams. <br/>
                            <strong>Direct Light:</strong> Right on the windowsill for succulents and cacti. <br/>
                            <strong>Low Light:</strong> A few feet away from a window. (Snake plants love this!)
                        </p>
                    </motion.div>

                    {/* Environment */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                            <Wind className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Humidity & Temp</h3>
                        <p className="text-stone-400 leading-relaxed">
                            Most houseplants are tropical and prefer temperatures between 18°C–30°C. Keep them away from drafty windows and AC vents in the summer. If you have Calatheas or Ferns, consider a humidifier or regular misting to keep edges from crisping.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CareGuide;
