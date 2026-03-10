import React from 'react';
import PlantShowcase from '../components/PlantShowcase';

const Collection = ({ onPlantClick, onAddToShelf }) => {
    return (
        <div className="w-full min-h-screen pt-24">
            <PlantShowcase 
                onPlantClick={onPlantClick} 
                onAddToShelf={onAddToShelf}
            />
        </div>
    );
};

export default Collection;
