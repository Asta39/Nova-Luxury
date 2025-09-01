import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ServiceTestimonials = ({ service }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  if (!service || !service?.testimonials) return null;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === service?.testimonials?.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [service?.testimonials?.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied clients who trusted us with their special moments
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-background rounded-xl luxury-shadow-card p-8 lg:p-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {renderStars(service?.testimonials?.[currentTestimonial]?.rating)}
              </div>
              
              <blockquote className="text-xl lg:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                "{service?.testimonials?.[currentTestimonial]?.content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 overflow-hidden rounded-full">
                  <Image
                    src={service?.testimonials?.[currentTestimonial]?.avatar}
                    alt={service?.testimonials?.[currentTestimonial]?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-left">
                  <div className="font-semibold text-primary">
                    {service?.testimonials?.[currentTestimonial]?.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {service?.testimonials?.[currentTestimonial]?.event}
                  </div>
                  <div className="text-xs text-secondary">
                    {service?.testimonials?.[currentTestimonial]?.date}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {service?.testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full luxury-transition ${
                  index === currentTestimonial
                    ? 'bg-secondary' :'bg-border hover:bg-secondary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;