import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlantShowcase from './components/PlantShowcase';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';

function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <main className="w-full min-h-screen relative">
      <Navbar />
      <Hero />
      <PlantShowcase onPlantClick={setSelectedPlant} />

      {selectedPlant && (
        <ProductModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}

      <Footer />
    </main>
  );
}

export default App;
