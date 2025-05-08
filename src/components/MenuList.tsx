import React from 'react';
import { MenuData } from '../types/menu';
import MenuCategory from './MenuCategory';

interface MenuListProps {
  menuData: MenuData;
}

const MenuList: React.FC<MenuListProps> = ({ menuData }) => {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="divide-y divide-gray-100">
        {menuData.map((category, index) => (
          <MenuCategory 
            key={index} 
            category={category} 
            isInitiallyOpen={index === 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default MenuList;