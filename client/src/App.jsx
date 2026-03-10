import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlantShowcase from './components/PlantShowcase';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import ShelfOverlay from './components/ShelfOverlay';

function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [shelfItems, setShelfItems] = useState([]);
  const [isShelfOpen, setIsShelfOpen] = useState(false);

  const handleAddToShelf = (plant) => {
    setShelfItems((prevItems) => {
      const existingItem = prevItems.find(item => item.plant.id === plant.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { plant, quantity: 1 }];
    });
    // Optional: Auto open shelf when adding
    // setIsShelfOpen(true);
  };

  const handleUpdateQuantity = (plantId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveItem(plantId);
      return;
    }
    setShelfItems(prevItems => 
      prevItems.map(item => item.plant.id === plantId ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemoveItem = (plantId) => {
    setShelfItems(prevItems => prevItems.filter(item => item.plant.id !== plantId));
  };

  return (
    <main className="w-full min-h-screen relative">
      <Navbar shelfItems={shelfItems} onOpenShelf={() => setIsShelfOpen(true)} />
      <Hero />
      <PlantShowcase 
        onPlantClick={setSelectedPlant} 
        onAddToShelf={handleAddToShelf}
      />

      {selectedPlant && (
        <ProductModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
          onAddToShelf={handleAddToShelf}
        />
      )}

      <ShelfOverlay 
        isOpen={isShelfOpen} 
        onClose={() => setIsShelfOpen(false)} 
        shelfItems={shelfItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <Footer />
    </main>
  );
}

export default App;
