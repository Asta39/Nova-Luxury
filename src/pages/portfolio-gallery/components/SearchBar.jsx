import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <div className="relative max-w-md">
      <div className="relative">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <Input
          type="search"
          placeholder="Search events, venues, themes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <button
            onClick={onClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground luxury-transition"
            aria-label="Clear search"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;