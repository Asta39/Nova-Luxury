import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const ServiceOverview = ({ service }) => {
  if (!service) return null;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {service?.overviewTitle}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service?.overviewDescription}
            </p>
            
            <div className="space-y-4">
              {service?.keyFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} className="text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {service?.overviewImages?.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg luxury-shadow-card">
                <Image
                  src={image?.src}
                  alt={image?.alt}
                  className="w-full h-full object-cover hover:scale-105 luxury-transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;