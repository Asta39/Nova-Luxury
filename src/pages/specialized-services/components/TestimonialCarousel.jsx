import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import AppImage from '../../../components/AppImage';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl border border-border p-8 text-center">
        {/* Stars */}
        <div className="flex justify-center space-x-1 mb-6">
          {[...Array(currentTestimonial?.rating || 5)]?.map((_, i) => (
            <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
          ))}
        </div>
        
        {/* Quote */}
        <blockquote className="text-lg text-muted-foreground leading-relaxed mb-8 italic">
          "{currentTestimonial?.content}"
        </blockquote>
        
        {/* Author */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <AppImage
              src={currentTestimonial?.avatar}
              alt={currentTestimonial?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h4 className="font-semibold text-primary">{currentTestimonial?.name}</h4>
            <p className="text-sm text-muted-foreground">
              {currentTestimonial?.role}, {currentTestimonial?.company}
            </p>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary luxury-transition"
            disabled={testimonials?.length <= 1}
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full luxury-transition ${
                  index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary luxury-transition"
            disabled={testimonials?.length <= 1}
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;