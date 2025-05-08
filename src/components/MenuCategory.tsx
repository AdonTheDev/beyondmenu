import React, { useState } from 'react';
import { MenuCategory as MenuCategoryType } from '../types/menu';
import CategoryHeader from './CategoryHeader';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
  isInitiallyOpen?: boolean;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ 
  category,
  isInitiallyOpen = false
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <CategoryHeader 
        title={category.name} 
        isOpen={isOpen} 
        onToggle={() => setIsOpen(!isOpen)} 
      />
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-[2000px] opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="space-y-2">
          {category.items.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;