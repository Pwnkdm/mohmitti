import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import ShelfOverlay from './components/ShelfOverlay';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CareGuide from './pages/CareGuide';

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
    <main className="w-full min-h-screen relative flex flex-col">
      <Navbar shelfItems={shelfItems} onOpenShelf={() => setIsShelfOpen(true)} />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onPlantClick={setSelectedPlant} onAddToShelf={handleAddToShelf} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/care-guide" element={<CareGuide />} />
        </Routes>
      </div>

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
