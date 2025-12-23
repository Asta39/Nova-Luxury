import React from 'react';
// UPDATED: Corrected the relative path to the main UI Button component
import Button from '../../../components/ui/Button';

const ServiceHero = ({ service }) => {
  // If for some reason no service data is passed, render nothing
  if (!service) return null;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* The key ensures the video element re-renders when navigating between services */}
      <video
        key={service.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={service.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {service?.category && (
          <p className="text-sm md:text-base tracking-[0.3em] font-light uppercase mb-4">
            {service.category}
          </p>
        )}
        <h1 className="font-calligraphy text-6xl md:text-8xl lg:text-9xl text-white mb-6 leading-tight text-shadow-md">
          {service?.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
          {service?.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="glassmorphic-cta text-white rounded-2xl luxury-transition"
          >
            Book Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            className="bg-transparent text-white border-white/50 hover:bg-white/10 rounded-2xl luxury-transition"
          >
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;