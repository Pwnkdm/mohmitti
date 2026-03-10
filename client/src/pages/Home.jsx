import React from 'react';
import Hero from '../components/Hero';
import PlantShowcase from '../components/PlantShowcase';

const Home = ({ onPlantClick, onAddToShelf }) => {
    return (
        <div className="w-full min-h-screen">
            <Hero />
            <PlantShowcase
                onPlantClick={onPlantClick}
                onAddToShelf={onAddToShelf}
            />
        </div>
    );
};

export default Home;
