import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Main Content Grid - Left Text, Right Illustration */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Text pushed further left */}
          <div className="flex flex-col justify-center lg:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Creating
              <span className="text-secondary block">Extraordinary</span>
              Luxury Events
            </h1>
            
            <p className="text-xl md:text-2xl text-primary/90 mb-4 font-medium">
              Kenya's Premier Event Planning Authority
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              From intimate celebrations to grand corporate gatherings, we transform your vision into unforgettable experiences with unparalleled attention to detail and luxury.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                asChild
                className="glassmorphic-cta text-white rounded-2xl luxury-transition"
              >
                <Link to="/contact-booking">Plan My Event</Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Image"
                iconPosition="left"
                asChild
                className="glassmorphic-dark text-white border-white/20 hover:glassmorphic-dark-hover rounded-2xl luxury-transition"
              >
                <Link to="/portfolio-gallery">View Portfolio</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <img
                src="./assets/rightt.png"
                alt="Illustration of luxury event planning"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;