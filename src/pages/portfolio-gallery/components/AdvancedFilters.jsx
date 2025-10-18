import React from 'react';

import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const AdvancedFilters = ({ 
  isOpen, 
  onToggle, 
  filters, 
  onFilterChange, 
  onClearFilters 
}) => {
  /*const venueOptions = [
    { value: 'all', label: 'All Venues' },
    { value: 'hotel', label: 'Hotels & Resorts' },
    { value: 'outdoor', label: 'Outdoor Venues' },
    { value: 'cultural', label: 'Cultural Centers' },
    { value: 'private', label: 'Private Estates' },
    { value: 'corporate', label: 'Corporate Facilities' }
  ];

  const guestCountOptions = [
    { value: 'all', label: 'Any Size' },
    { value: '1-50', label: '1-50 Guests' },
    { value: '51-100', label: '51-100 Guests' },
    { value: '101-200', label: '101-200 Guests' },
    { value: '201-500', label: '201-500 Guests' },
    { value: '500+', label: '500+ Guests' }
  ];

  const themeOptions = [
    { value: 'all', label: 'All Themes' },
    { value: 'traditional', label: 'Traditional Kenyan' },
    { value: 'modern', label: 'Modern Luxury' },
    { value: 'rustic', label: 'Rustic Elegance' },
    { value: 'vintage', label: 'Vintage Classic' },
    { value: 'contemporary', label: 'Contemporary Chic' },
    { value: 'cultural', label: 'Cultural Fusion' }
  ]; */

  const hasActiveFilters = filters?.venue !== 'all' || filters?.guestCount !== 'all' || filters?.theme !== 'all';

  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-3">
          <Button
            variant="ghost"
            size="sm"
            iconName={isOpen ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={onToggle}
          >
            Advanced Filters
            {hasActiveFilters && (
              <span className="ml-2 w-2 h-2 bg-secondary rounded-full"></span>
            )}
          </Button>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
            >
              Clear All
            </Button>
          )}
        </div>

        {isOpen && (
          <div className="pb-4 border-t border-border pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="Venue Type"
                options={venueOptions}
                value={filters?.venue}
                onChange={(value) => onFilterChange('venue', value)}
                className="mb-0"
              />
              
              <Select
                label="Guest Count"
                options={guestCountOptions}
                value={filters?.guestCount}
                onChange={(value) => onFilterChange('guestCount', value)}
                className="mb-0"
              />
              
              <Select
                label="Theme Style"
                options={themeOptions}
                value={filters?.theme}
                onChange={(value) => onFilterChange('theme', value)}
                className="mb-0"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFilters;