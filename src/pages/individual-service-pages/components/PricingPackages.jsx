import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingPackages = ({ service }) => {
  if (!service || !service?.pricingPackages) return null;

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Service Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package that fits your vision and budget. All packages include our signature attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service?.pricingPackages?.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-2xl p-8 luxury-shadow-card hover:shadow-lg luxury-transition ${
                pkg?.popular ? 'ring-2 ring-secondary' : ''
              }`}
            >
              {pkg?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary mb-2">{pkg?.name}</h3>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {pkg?.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">
                    {pkg?.priceNote}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg?.description}</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {pkg?.features?.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Icon 
                      name={feature?.included ? "Check" : "X"} 
                      size={16} 
                      className={feature?.included ? "text-success" : "text-muted-foreground"} 
                    />
                    <span className={`text-sm ${feature?.included ? "text-foreground" : "text-muted-foreground"}`}>
                      {feature?.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <Button
                variant={pkg?.popular ? "default" : "outline"}
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className={pkg?.popular ? "bg-secondary hover:bg-secondary/90" : ""}
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom package? We'll create a solution tailored to your specific requirements.
          </p>
          <Button variant="outline" iconName="MessageCircle" iconPosition="left">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;