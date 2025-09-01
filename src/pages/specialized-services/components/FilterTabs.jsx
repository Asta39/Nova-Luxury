import React from 'react';

const FilterTabs = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filters?.map((filter) => (
        <button
          key={filter?.id}
          onClick={() => onFilterChange?.(filter?.id)}
          className={`px-6 py-3 rounded-full text-sm font-medium luxury-transition ${
            activeFilter === filter?.id
              ? 'bg-primary text-primary-foreground shadow-lg'
              : 'bg-surface text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
          }`}
        >
          {filter?.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;