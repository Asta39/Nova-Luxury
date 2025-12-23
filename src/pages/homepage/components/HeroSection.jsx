import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    // Section takes up more than full screen height to ensure complete coverage
    <section className="relative min-h-screen h-[calc(100vh)] flex items-center justify-center text-white overflow-hidden">
      
      {/* 1. Background Video */}
      {/* The video is positioned to cover the entire section, behind all other content. */}
      {/* Increased height to ensure full coverage from header to bottom */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for playback on mobile devices
        className="absolute z-0 w-full h-full object-cover"
        style={{ minHeight: '100vh' }}
      >
        <source src="/assets/videos/luxury-event-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Gradient Overlay */}
      {/* This div sits on top of the video to add a dark, subtle tint, ensuring the text is readable. */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* 3. Centered Content */}
      {/* This container sits on top of the overlay and centers all the text and buttons. */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        
        {/* Subheading */}
        <p className="text-sm md:text-base tracking-[0.3em] font-light uppercase mb-4">
          NOVA LUXURY EVENTS
        </p>

        {/* Main Calligraphy Heading */}
        {/* We use the custom 'font-calligraphy' class defined in your tailwind.config.js */}
        <h1 className="font-calligraphy text-6xl md:text-8xl lg:text-9xl mb-8 text-shadow-md">
          Creating Extraordinary Luxury Events
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            asChild
            // Glassmorphic effect kept for a modern feel on the primary button
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
            // A clearer outline style for the secondary button
            className="bg-transparent text-white border-white/50 hover:bg-white/10 rounded-2xl luxury-transition"
          >
            <Link to="/portfolio-gallery">View Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;