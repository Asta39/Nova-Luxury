import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 
        CHANGE 1: Increased max-width from 'max-w-7xl' to 'max-w-screen-2xl'.
        Also adjusted horizontal padding from 'lg:px-12' to 'lg:px-8' to give content more room.
      */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Text Block */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Creating
              <span className="text-secondary block">Extraordinary</span>
              Luxury Events
            </h1>
            
            <p className="text-lg md:text-xl text-primary/90 mb-4 font-medium">
              Kenya's Premier Event Planning Authority
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From intimate celebrations to grand corporate gatherings, we transform your vision into unforgettable experiences with unparalleled attention to detail and luxury.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Right Content: Illustration */}
          <div className="flex justify-center lg:justify-end items-center">
            {/* 
              CHANGE 2: Replaced 'lg:max-w-xl' with 'lg:max-w-none' to allow the image to grow.
            */}
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-none">
              <img
                src="./assets/rightt.png"
                alt="Illustration of luxury event planning"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;