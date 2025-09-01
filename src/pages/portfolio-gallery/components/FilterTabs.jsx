import React from 'react';
import Button from '../../../components/ui/Button';

const FilterTabs = ({ activeFilter, onFilterChange, eventCounts }) => {
  const filters = [
    { id: 'all', label: 'All Events', count: eventCounts?.all },
    { id: 'corporate', label: 'Corporate', count: eventCounts?.corporate },
    { id: 'weddings', label: 'Weddings', count: eventCounts?.weddings },
    { id: 'birthdays', label: 'Birthdays', count: eventCounts?.birthdays },
    { id: 'private', label: 'Private Events', count: eventCounts?.private },
    { id: 'milestones', label: 'Milestones', count: eventCounts?.milestones },
    { id: 'family', label: 'Family', count: eventCounts?.family }
  ];

  return (
    <div className="bg-background border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <div className="flex flex-wrap gap-2 lg:gap-4">
          {filters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter === filter?.id ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter?.id)}
              className="flex-shrink-0"
            >
              {filter?.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter?.id 
                  ? 'bg-primary-foreground/20 text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {filter?.count}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;