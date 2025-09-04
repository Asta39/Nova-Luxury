import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  return (
    <section className="bg-accent text-primary py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="mb-8">
          <Icon name="Sparkles" size={48} className="text-secondary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Let our portfolio inspire your next celebration. From intimate gatherings to grand galas, 
            we'll bring your vision to life with the same attention to detail and luxury you see here.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            asChild
          >
            <Link to="/contact-booking">Book Free Consultation</Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+254700000000'}
            className="bg-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Call Now: +254 700 000 000
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>24/7 Event Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>Fully Insured Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Award-Winning Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;