import React from 'react';
import MenuHeader from './components/MenuHeader';
import MenuList from './components/MenuList';
import Footer from './components/Footer';
import { menuData } from './data/menuData';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <div className="mx-auto container py-8 px-4">
            <MenuHeader />
            <MenuList menuData={menuData} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;