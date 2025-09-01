import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedEvents = ({ featuredEvents }) => {
  return (
    <section className="bg-surface py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Signature Celebrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most memorable events that showcase the pinnacle of luxury event planning and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredEvents?.map((event) => (
            <div
              key={event?.id}
              className="bg-background rounded-2xl luxury-shadow-card hover:luxury-shadow-modal luxury-transition overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={event?.heroImage}
                  alt={event?.title}
                  className="w-full h-full object-cover hover:scale-105 luxury-transition"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                    {event?.category}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{event?.guestCount} guests</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-2">
                  {event?.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{event?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={16} />
                    <span>{event?.date}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {event?.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-3">Event Highlights</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {event?.highlights?.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={14} className="text-secondary" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                {event?.testimonial && (
                  <div className="bg-accent p-4 rounded-2xl mb-6">
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "{event?.testimonial?.quote}"
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-secondary-foreground">
                          {event?.testimonial?.client?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-primary">
                          {event?.testimonial?.client}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {event?.testimonial?.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Gallery Preview */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-primary">Event Gallery</h4>
                    <span className="text-sm text-muted-foreground">
                      {event?.galleryImages?.length} photos
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {event?.galleryImages?.slice(0, 4)?.map((image, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-2xl">
                        <Image
                          src={image}
                          alt={`${event?.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 luxury-transition"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    asChild
                    className="flex-1"
                  >
                    <Link to="/contact-booking">Plan Similar Event</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    onClick={() => {
                      // Open full case study or gallery
                    }}
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Featured Events */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            iconName="ArrowRight"
            iconPosition="right"
            asChild
          >
            <Link to="/contact-booking">Discuss Your Vision</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;