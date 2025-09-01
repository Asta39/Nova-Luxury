import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const stats = [
    {
      id: 1,
      icon: "Users",
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across Kenya"
    },
    {
      id: 2,
      icon: "Calendar",
      number: "1,200+",
      label: "Events Planned",
      description: "Successful events delivered"
    },
    {
      id: 3,
      icon: "Star",
      number: "4.9/5",
      label: "Client Rating",
      description: "Average satisfaction score"
    },
    {
      id: 4,
      icon: "Award",
      number: "15+",
      label: "Years Experience",
      description: "Industry expertise and trust"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted by Kenya's Elite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has earned us the trust of discerning clients across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-card p-6 rounded-lg luxury-shadow-card text-center hover:luxury-shadow-modal luxury-transition"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon 
                  name={stat?.icon} 
                  size={24} 
                  className="text-secondary" 
                />
              </div>
              
              <div className="text-3xl font-bold text-primary mb-2">
                {stat?.number}
              </div>
              
              <div className="text-lg font-semibold text-foreground mb-1">
                {stat?.label}
              </div>
              
              <div className="text-sm text-muted-foreground">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Certified & Recognized By
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} className="text-secondary" />
                <span className="text-sm font-medium">Kenya Event Planners Association</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} className="text-secondary" />
                <span className="text-sm font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={20} className="text-secondary" />
                <span className="text-sm font-medium">Licensed Event Coordinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;