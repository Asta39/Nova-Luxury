import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isPrimary = true }) => {
  // --- CHANGE: Destructure 'image' instead of 'icon' ---
  const { id, title, description, image, offerings, ctaText, ctaLink } = service;

  return (
    <div className={`group bg-surface border border-border rounded-2xl overflow-hidden luxury-transition hover:shadow-lg hover:border-primary/20 flex flex-col`}>
      
      {/* --- CHANGE: Image section added --- */}
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover luxury-transition group-hover:scale-105" 
          />
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Offerings List (Optional) */}
        {offerings && offerings?.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-primary mb-3">Key Services:</h4>
            <ul className="space-y-2">
              {offerings?.slice(0, isPrimary ? 3 : 2)?.map((offering, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="Check" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
            {offerings?.length > (isPrimary ? 3 : 2) && (
              <p className="text-xs text-muted-foreground/60 mt-2">
                +{offerings?.length - (isPrimary ? 3 : 2)} more services
              </p>
            )}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-auto">
          <Button
            variant="outline"
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
            asChild
            className="border-border hover:border-primary hover:text-primary rounded-2xl luxury-transition"
          >
            <Link to={ctaLink}>
              {ctaText}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;