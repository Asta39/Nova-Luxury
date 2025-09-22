import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceOverview = ({ service }) => {
  // --- FIX: Moved the logic inside the component and made it safer ---
  // We use optional chaining (?.) and a nullish coalescing operator (??)
  // This says: "Try to get service.overviewImages, but if it's null or undefined, use an empty array [] instead."
  // This prevents the .filter() method from ever being called on `undefined`.
  const allImages = service?.overviewImages ?? [];
  
  const column1Images = allImages.filter((_, index) => index % 2 === 0);
  const column2Images = allImages.filter((_, index) => index % 2 !== 0);

  // The original safety check is still useful for when the entire service object is missing.
  if (!service) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Column: Service Details (Unchanged) --- */}
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
          
          {/* --- Right Column: Animated Image Marquee --- */}
          <div className="h-[500px] overflow-hidden relative grid grid-cols-2 gap-4 marquee-container">
            {/* Column 1: Scrolls Up */}
            <div className="marquee-inner space-y-4 [--duration:30s]">
              {/* Duplicate images for a seamless loop */}
              {[...column1Images, ...column1Images].map((image, index) => (
                <div key={`col1-${index}`} className="aspect-square overflow-hidden rounded-lg luxury-shadow-card">
                  <Image
                    src={image?.src}
                    alt={image?.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Column 2: Scrolls Down */}
            <div className="marquee-inner space-y-4 animation-reverse [--duration:30s]">
              {/* Duplicate images for a seamless loop */}
              {[...column2Images, ...column2Images].map((image, index) => (
                <div key={`col2-${index}`} className="aspect-square overflow-hidden rounded-lg luxury-shadow-card">
                  <Image
                    src={image?.src}
                    alt={image?.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;