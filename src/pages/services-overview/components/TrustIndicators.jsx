import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const stats = [
    { icon: "Calendar", value: "500+", label: "Events Planned" },
    { icon: "Users", value: "98%", label: "Client Satisfaction" },
    { icon: "Award", value: "15+", label: "Years Experience" },
    { icon: "MapPin", value: "50+", label: "Venues Partnered" }
  ];

  return (
    <div className="bg-surface border border-border rounded-lg p-6 lg:p-8">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-primary mb-2">
          Trusted by Kenya's Elite
        </h3>
        <p className="text-sm text-muted-foreground">
          Our track record speaks for excellence in luxury event planning
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-3">
              <Icon name={stat?.icon} size={20} className="text-secondary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">
              {stat?.value}
            </div>
            <div className="text-xs text-muted-foreground">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustIndicators;