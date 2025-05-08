import React from 'react';
import { MenuItem as MenuItemType } from '../types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="py-4 transition-all hover:bg-gray-50/80 px-4 -mx-4 rounded-lg group">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-lg text-gray-900 group-hover:text-primary transition-colors">
          {item.name}
        </h3>
        <div className="text-primary font-medium whitespace-nowrap">
          ₹{item.price}
        </div>
      </div>
      <p className="mt-1.5 text-gray-600 text-sm leading-relaxed">
        {item.description}
      </p>
      {item.tags && item.tags.length > 0 && (
        <div className="mt-2 flex gap-2">
          {item.tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;