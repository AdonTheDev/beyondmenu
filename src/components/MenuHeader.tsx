import React from 'react';
import Logo from './Logo';

const MenuHeader: React.FC = () => {
  return (
    <header className="pt-8 pb-12 px-8 text-center">
      <div className="mx-auto flex flex-col items-center justify-center">
        <Logo />
        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          Artisanal flavors beyond the ordinary
        </p>
        <div className="mt-6 text-sm text-gray-500">
          <p>Dine in • Takeaway • No-contact delivery</p>
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;