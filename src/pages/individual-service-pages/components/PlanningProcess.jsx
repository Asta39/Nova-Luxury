import React from 'react';
import Icon from '../../../components/AppIcon';

const PlanningProcess = ({ service }) => {
  if (!service || !service?.planningProcess) return null;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Planning Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial consultation to flawless execution, we guide you through every step of creating your perfect event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service?.planningProcess?.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < service?.planningProcess?.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <Icon name="ChevronRight" size={16} className="text-secondary" />
                  </div>
                </div>
              )}
              
              <div className="relative z-10 bg-surface rounded-xl p-6 luxury-shadow-card hover:shadow-lg luxury-transition">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <Icon name={step?.icon} size={24} className="text-secondary" />
                </div>
                
                <div className="mb-2">
                  <span className="text-sm font-medium text-secondary">Step {index + 1}</span>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-3">
                  {step?.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step?.description}
                </p>
                
                <div className="mt-4 text-xs text-secondary font-medium">
                  {step?.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanningProcess;