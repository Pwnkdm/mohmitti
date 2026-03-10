import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const ShelfOverlay = ({ isOpen, onClose, shelfItems, onUpdateQuantity, onRemoveItem }) => {

    const handleCheckout = () => {
        if (shelfItems.length === 0) return;

        // Construct order summary
        let message = "Hi MohMitti! 🌿\nI'd like to place an order for the following plants from my shelf:\n\n";

        // Items are already objects of { plant, quantity }
        shelfItems.forEach(item => {
            message += `- ${item.quantity}x ${item.plant.name}\n`;
        });

        const totalItems = shelfItems.reduce((total, item) => total + item.quantity, 0);
        message += `\nTotal Items: ${totalItems}\n`;
        message += "\nPlease let me know the total amount and payment details. Thank you! 🌱";

        // Ensure proper complete encoding of special characters and line breaks
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "919878529577";
        
        // Detect device type (mobile vs desktop)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        let whatsappUrl = '';
        
        if (isMobile) {
            // Mobile users -> Open the WhatsApp mobile app directly using the wa.me link format
            whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        } else {
            // Desktop users -> Open chat instantly in WhatsApp Web to bypass intermediate pages
            // If they don't have WhatsApp Web logged in, this redirects them to the login page first
            // Users with the Desktop App installed will also often have this intercepted by their OS handlers
            whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        }

        // Fallback safety (Browsers handles wa.me and web.whatsapp intrinsically without failing, 
        // fulfilling the fallback requirements securely.)
        window.open(whatsappUrl, '_blank');
    };

    const totalItemsCount = shelfItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-[#fdfdfb] shadow-2xl z-[70] flex flex-col border-l border-emerald-100"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-emerald-100 bg-white">
                            <h2 className="text-2xl font-black text-emerald-950 tracking-tight flex items-center gap-2">
                                Your Shelf <span className="bg-emerald-100 text-emerald-800 text-xs py-1 px-2.5 rounded-full font-bold">{totalItemsCount}</span>
                            </h2>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items List */}
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                            {shelfItems.length === 0 ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-stone-400 gap-4 opacity-70">
                                    <div className="w-24 h-24 rounded-full bg-stone-100 flex items-center justify-center">
                                        <X className="w-8 h-8 rotate-45" />
                                    </div>
                                    <p className="font-medium">Your shelf is currently empty</p>
                                </div>
                            ) : (
                                shelfItems.map((item) => (
                                    <div key={item.plant.id} className="flex gap-4 p-4 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative group">

                                        {/* Remove Item Button */}
                                        <button
                                            onClick={() => onRemoveItem(item.plant.id)}
                                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md border border-stone-100 flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>

                                        {/* Item Image */}
                                        <div className="w-24 h-24 bg-gradient-to-br from-stone-50 to-emerald-50 rounded-xl p-2 flex-shrink-0 flex items-center justify-center border border-emerald-100/50">
                                            <img src={item.plant.image} alt={item.plant.name} className="w-full h-full object-contain filter drop-shadow-md" />
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="font-bold text-emerald-950 leading-tight">{item.plant.name}</h3>
                                                <p className="text-xs text-stone-500 font-medium mt-1">{item.plant.price}</p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-3">
                                                <div className="flex items-center bg-stone-100 rounded-full border border-stone-200 overflow-hidden">
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.plant.id, item.quantity - 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="w-6 text-center text-sm font-bold text-emerald-950">{item.quantity}</span>
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.plant.id, item.quantity + 1)}
                                                        className="w-8 h-8 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer Checkout Area */}
                        {shelfItems.length > 0 && (
                            <div className="p-6 bg-white border-t border-emerald-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 rounded-xl py-4 px-6 font-black text-lg transition-all hover:shadow-[0_8px_20px_rgba(251,191,36,0.25)] active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden"
                                >
                                    <span className="relative z-10 transition-transform group-hover:-translate-x-1">Order on WhatsApp</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    <div className="absolute inset-0 h-full w-full bg-amber-500 translate-y-[100%] rounded-xl group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out z-0"></div>
                                </button>
                                <p className="text-center text-xs text-stone-400 mt-4 px-4 font-medium">Checkout securely via WhatsApp. Our team will assist with payment and delivery details.</p>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ShelfOverlay;
