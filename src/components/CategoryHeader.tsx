import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CategoryHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  title, 
  isOpen,
  onToggle
}) => {
  return (
    <div 
      className="flex items-center justify-between py-4 cursor-pointer group"
      onClick={onToggle}
    >
      <h2 className="text-2xl text-gray-900 group-hover:text-primary transition-colors">
        {title}
      </h2>
      <div className="w-8 h-8 flex items-center justify-center rounded-full group-hover:bg-primary/10 transition-colors">
        {isOpen ? (
          <ChevronUp className="text-primary h-5 w-5" />
        ) : (
          <ChevronDown className="text-primary h-5 w-5" />
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;