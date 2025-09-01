import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ service }) => {
  if (!service) return null;

  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={service?.heroImage}
          alt={`${service?.name} - Professional Event Planning Services`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary border border-secondary/30">
                {service?.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service?.name}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {service?.heroDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                Book Consultation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;