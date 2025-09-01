import React from 'react';
import Icon from '../../../components/AppIcon';

const PlanningProcess = ({ steps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps?.map((step, index) => (
        <div key={index} className="text-center">
          {/* Step Number */}
          <div className="relative mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={step?.icon} size={24} className="text-primary-foreground" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-white">
              {index + 1}
            </div>
            
            {/* Connector Line */}
            {index < steps?.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" 
                   style={{ width: 'calc(100% - 4rem)' }} />
            )}
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-semibold text-primary mb-2">
            {step?.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {step?.description}
          </p>
          <span className="text-xs text-secondary font-medium bg-secondary/10 px-3 py-1 rounded-full">
            {step?.duration}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PlanningProcess;