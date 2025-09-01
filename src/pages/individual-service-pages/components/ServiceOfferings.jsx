import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const ServiceOfferings = ({ service }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!service || !service?.offerings) return null;

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our {service?.name} Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event planning solutions tailored to your unique vision and requirements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {service?.offerings?.map((offering, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium luxury-transition ${
                activeTab === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground hover:text-primary hover:bg-accent'
              }`}
            >
              {offering?.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-background rounded-xl luxury-shadow-card p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {service?.offerings?.[activeTab]?.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service?.offerings?.[activeTab]?.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service?.offerings?.[activeTab]?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Sparkles" size={16} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={service?.offerings?.[activeTab]?.image}
                alt={`${service?.offerings?.[activeTab]?.title} service showcase`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOfferings;