import React from 'react';
import Button from '../../../components/ui/Button';

const ServiceFilter = ({ activeFilter, onFilterChange, filters }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {filters?.map((filter) => (
        <Button
          key={filter?.id}
          variant={activeFilter === filter?.id ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter?.id)}
          className="flex-shrink-0"
        >
          {filter?.label}
        </Button>
      ))}
    </div>
  );
};

export default ServiceFilter;