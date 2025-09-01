import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isPrimary = true }) => {
  const { id, title, description, icon, offerings, ctaText, ctaLink } = service;

  return (
    <div className={`group bg-surface border border-border rounded-2xl overflow-hidden luxury-transition hover:shadow-lg hover:border-primary/20 ${isPrimary ? 'h-full' : 'h-auto'}`}>
      <div className="p-6 h-full flex flex-col">
        {/* Icon and Title */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white luxury-transition">
            <Icon name={icon} size={24} className="text-primary group-hover:text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary mb-1">{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Offerings List */}
        {offerings && offerings?.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-primary mb-3">Key Services:</h4>
            <ul className="space-y-2">
              {offerings?.slice(0, isPrimary ? 4 : 3)?.map((offering, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="Check" size={14} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
            {offerings?.length > (isPrimary ? 4 : 3) && (
              <p className="text-xs text-muted-foreground/60 mt-2">
                +{offerings?.length - (isPrimary ? 4 : 3)} more services
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