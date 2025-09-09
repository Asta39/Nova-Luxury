import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-current rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-current rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-current rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border border-current rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Your
            <span className="text-secondary block">Dream Event?</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's transform your vision into an extraordinary celebration. Our expert team is ready to bring unparalleled luxury and attention to detail to your special occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              asChild
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link to="/contact-booking">Book Free Consultation</Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.location.href = 'tel:+254703334359'}
            >
              Call Now: +254 703 334359
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="MessageCircle" size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp Chat</h3>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Get instant responses to your event planning questions
              </p>
              <Button
                variant="ghost"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                className="text-secondary hover:text-secondary-foreground hover:bg-secondary/20"
                onClick={() => window.open('https://wa.me/254703334359', '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="Mail" size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Email Inquiry</h3>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Send us detailed requirements for personalized proposals
              </p>
              <Button
                variant="ghost"
                size="sm"
                iconName="Mail"
                iconPosition="left"
                className="text-secondary hover:text-secondary-foreground hover:bg-secondary/20"
                onClick={() => window.location.href = 'mailto:info@novaluxuryevents.com'}
              >
                Send Email
              </Button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-3">
                <Icon name="MapPin" size={24} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Visit Our Office</h3>
              <p className="text-sm text-primary-foreground/80 mb-3">
                Schedule an in-person consultation at our Westlands office
              </p>
              <Button
                variant="ghost"
                size="sm"
                iconName="Navigation"
                iconPosition="left"
                className="text-secondary hover:text-secondary-foreground hover:bg-secondary/20"
                asChild
              >
                <Link to="/contact-booking">Get Directions</Link>
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-secondary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-secondary" />
                <span>24/7 Event Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-secondary" />
                <span>7+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-secondary" />
                <span>+ 465+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;