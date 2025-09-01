import React from 'react';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const ServiceGrid = ({ services }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {services?.map((service, index) => (
        <div 
          key={service?.id} 
          className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Service Image */}
          <div className="w-full md:w-1/2">
            <AppImage
              src={service?.image}
              alt={service?.title}
              className="rounded-2xl w-full h-auto object-cover aspect-[4/3] shadow-lg"
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold text-primary mb-4">
              {service?.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              {service?.description}
            </p>
            
            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-primary mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {service?.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-base text-muted-foreground">
                    <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio Highlights */}
            {service?.portfolio && (
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Recent Projects:</h4>
                <ul className="space-y-1">
                  {service?.portfolio?.map((project, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;