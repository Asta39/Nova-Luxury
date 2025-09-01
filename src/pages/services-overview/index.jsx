import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ServiceFilter from './components/ServiceFilter';
import TestimonialSnippet from './components/TestimonialSnippet';
import TrustIndicators from './components/TrustIndicators';
import WhatsAppCTA from './components/WhatsAppCTA';

const ServicesOverview = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredServices, setFilteredServices] = useState([]);

  const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'private', label: 'Private Events' },
    { id: 'milestone', label: 'Milestones' },
    { id: 'family', label: 'Family Events' }
  ];

  const primaryServices = [
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Professional event management for conferences, product launches, AGMs, team building activities, awards ceremonies, and executive dinners that elevate your brand presence.',
      icon: 'Building2',
      category: 'corporate',
      offerings: [
        'Conference & seminar planning',
        'Product launch coordination',
        'Team building activities',
        'Awards ceremony management',
        'Executive dinner arrangements',
        'AGM & board meeting setup'
      ],
      ctaText: 'Explore Corporate Services',
      ctaLink: '/individual-service-pages?service=corporate'
    },
    {
      id: 'wedding',
      title: 'Wedding Celebrations',
      description: 'Luxury wedding planning services including traditional ceremonies, receptions, bridal events, anniversaries, and destination weddings crafted to perfection.',
      icon: 'Heart',
      category: 'wedding',
      offerings: [
        'Complete wedding planning',
        'Traditional ceremony coordination',
        'Reception management',
        'Bridal shower & events',
        'Anniversary celebrations',
        'Destination wedding planning'
      ],
      ctaText: 'View Wedding Services',
      ctaLink: '/individual-service-pages?service=wedding'
    },
    {
      id: 'birthday',
      title: 'Birthday Celebrations',
      description: 'Memorable birthday celebrations for all ages including milestone parties, themed children\'s events, adult celebrations, and surprise coordination with custom packages.',
      icon: 'Gift',
      category: 'private',
      offerings: [
        'Milestone birthday parties',
        'Children\'s themed celebrations',
        'Adult birthday events',
        'Surprise party coordination',
        'Custom birthday packages',
        'Venue decoration & setup'
      ],
      ctaText: 'Plan Birthday Event',
      ctaLink: '/individual-service-pages?service=birthday'
    },
    {
      id: 'private',
      title: 'Private Luxury Events',
      description: 'Exclusive private gatherings including VIP parties, cultural ceremonies, religious celebrations, holiday parties, and intimate dinners for discerning clients.',
      icon: 'Crown',
      category: 'private',
      offerings: [
        'Exclusive VIP gatherings',
        'Cultural ceremony planning',
        'Religious celebration coordination',
        'Holiday party management',
        'Intimate dinner arrangements',
        'Custom luxury experiences'
      ],
      ctaText: 'Discover Private Events',
      ctaLink: '/individual-service-pages?service=private'
    },
    {
      id: 'milestone',
      title: 'Milestone Celebrations',
      description: 'Life\'s significant moments including graduations, retirements, anniversaries, achievements, coming of age ceremonies, and memorial services handled with care.',
      icon: 'Trophy',
      category: 'milestone',
      offerings: [
        'Graduation celebrations',
        'Retirement parties',
        'Anniversary events',
        'Achievement recognition',
        'Coming of age ceremonies',
        'Memorial service coordination'
      ],
      ctaText: 'Celebrate Milestones',
      ctaLink: '/individual-service-pages?service=milestone'
    },
    {
      id: 'family',
      title: 'Family & Social Events',
      description: 'Warm family gatherings including baby showers, housewarmings, engagements, family reunions, picnics, and holiday celebrations that bring loved ones together.',
      icon: 'Users',
      category: 'family',
      offerings: [
        'Baby shower coordination',
        'Housewarming parties',
        'Engagement celebrations',
        'Family reunion planning',
        'Outdoor picnic events',
        'Holiday gathering management'
      ],
      ctaText: 'Plan Family Event',
      ctaLink: '/individual-service-pages?service=family'
    }
  ];

  const specializedServices = [
    {
      id: 'venue',
      title: 'Venue Sourcing',
      description: 'Expert venue selection and booking services across Nairobi and Kenya.',
      icon: 'MapPin',
      category: 'specialized',
      offerings: ['Premium venue partnerships', 'Site visits & negotiations', 'Contract management'],
      ctaText: 'Find Venues',
      ctaLink: '/specialized-services'
    },
    {
      id: 'catering',
      title: 'Catering Coordination',
      description: 'Luxury catering services with top chefs and diverse menu options.',
      icon: 'ChefHat',
      category: 'specialized',
      offerings: ['Gourmet menu planning', 'Dietary accommodations', 'Service staff coordination'],
      ctaText: 'Explore Catering',
      ctaLink: '/specialized-services'
    },
    {
      id: 'av',
      title: 'AV Production',
      description: 'Professional audio-visual setup and technical production services.',
      icon: 'Mic',
      category: 'specialized',
      offerings: ['Sound system setup', 'Lighting design', 'Live streaming services'],
      ctaText: 'View AV Services',
      ctaLink: '/specialized-services'
    },
    {
      id: 'guest',
      title: 'Guest Management',
      description: 'Comprehensive guest coordination and hospitality services.',
      icon: 'UserCheck',
      category: 'specialized',
      offerings: ['RSVP management', 'Guest registration', 'VIP coordination'],
      ctaText: 'Manage Guests',
      ctaLink: '/specialized-services'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      role: 'CEO',
      company: 'Safaricom Foundation',
      content: 'Nova Luxury Events transformed our annual gala into an unforgettable experience. Their attention to detail and cultural sensitivity made all the difference.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'James Mwangi',
      role: 'Managing Director',
      company: 'Equity Bank',
      content: 'The team\'s professionalism and creativity exceeded our expectations. Our product launch was flawlessly executed and generated incredible buzz.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5
    }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredServices(primaryServices);
    } else {
      setFilteredServices(primaryServices?.filter(service => service?.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <>
      <Helmet>
        <title>Premium Event Planning Services | Nova Luxury Events Kenya</title>
        <meta name="description" content="Discover Nova Luxury Events' comprehensive event planning services in Kenya. From corporate events to luxury weddings, we create extraordinary experiences that exceed expectations." />
        <meta name="keywords" content="event planning Kenya, luxury events Nairobi, corporate events, wedding planning, private parties, milestone celebrations" />
        <meta property="og:title" content="Premium Event Planning Services | Nova Luxury Events Kenya" />
        <meta property="og:description" content="Discover Nova Luxury Events' comprehensive event planning services in Kenya. From corporate events to luxury weddings, we create extraordinary experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://novaluxuryevents.com/services-overview" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-surface py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <Breadcrumb />
              
              <div className="max-w-4xl">
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Comprehensive Event Planning Services
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  From intimate gatherings to grand celebrations, Nova Luxury Events delivers exceptional experiences across Kenya. Our expert team specializes in creating memorable events that reflect your vision and exceed your expectations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    asChild
                  >
                    <Link to="/contact-booking">Book Consultation</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => window.location.href = 'tel:+254700000000'}
                  >
                    Call +254 700 000 000
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <TrustIndicators />
            </div>
          </section>

          {/* Services Filter */}
          <section className="py-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <ServiceFilter
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                filters={filters}
              />
            </div>
          </section>

          {/* Primary Services */}
          <section className="pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredServices?.map((service) => (
                  <ServiceCard
                    key={service?.id}
                    service={service}
                    isPrimary={true}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-12 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear from satisfied clients who trusted Nova Luxury Events with their most important celebrations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {testimonials?.map((testimonial, index) => (
                  <TestimonialSnippet
                    key={index}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Specialized Services */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  Specialized Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Additional services to ensure every aspect of your event is perfectly coordinated and professionally managed.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {specializedServices?.map((service) => (
                  <ServiceCard
                    key={service?.id}
                    service={service}
                    isPrimary={false}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* WhatsApp CTA */}
          <section className="py-12 bg-surface">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <WhatsAppCTA />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Ready to Create Your Perfect Event?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let Nova Luxury Events bring your vision to life. Our experienced team is ready to plan and execute an extraordinary event that will be remembered for years to come.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/contact-booking">Start Planning Today</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Image"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/portfolio-gallery">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesOverview;