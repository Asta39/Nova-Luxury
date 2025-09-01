import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Button from '../../components/ui/Button';
import FilterTabs from './components/FilterTabs';
import ServiceGrid from './components/ServiceGrid';
import CaseStudies from './components/CaseStudies';
import TestimonialCarousel from './components/TestimonialCarousel';
import PlanningProcess from './components/PlanningProcess';
import FAQ from './components/FAQ';

const SpecializedServices = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Services' },
    { id: 'venue', label: 'Venue Services' },
    { id: 'catering', label: 'Catering' },
    { id: 'production', label: 'Production' },
    { id: 'cultural', label: 'Cultural' }
  ];

  const specializedServices = [
    {
      id: 'cultural-integration',
      title: 'Cultural Integration Services',
      description: 'Authentic cultural ceremonies and celebrations that honor traditions while incorporating modern luxury elements for meaningful experiences.',
      image: 'https://images.unsplsh.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop',
      category: 'cultural',
      features: [
        'Traditional ceremony coordination',
        'Cultural authenticity consultation',
        'Elder and community integration',
        'Heritage documentation services',
        'Modern luxury blending',
        'Multi-cultural celebration planning'
      ],
      portfolio: [
        'Kikuyu traditional wedding ceremonies',
        'Luo cultural celebrations',
        'Maasai ceremonial events',
        'Multi-ethnic corporate functions'
      ]
    },
    {
      id: 'destination-events',
      title: 'Destination Event Coordination',
      description: 'Comprehensive planning for events in Kenya\'s most spectacular locations, from coastal resorts to safari lodges and mountain venues.',
      image: 'https://images.pixaay.com/photo/2016/11/21/16/01/beach-1846040_1280.jpg?w=600&h=400&fit=crop',
      category: 'venue',
      features: [
        'Location scouting and selection',
        'Accommodation coordination',
        'Transportation logistics',
        'Local vendor partnerships',
        'Guest experience management',
        'Weather contingency planning'
      ],
      portfolio: [
        'Diani Beach luxury weddings',
        'Maasai Mara safari events',
        'Mount Kenya retreat planning',
        'Lake Nakuru corporate getaways'
      ]
    },
    {
      id: 'luxury-transportation',
      title: 'Luxury Transportation Coordination',
      description: 'Premium transportation services including luxury vehicles, helicopter transfers, and specialized transport for VIP guests and special occasions.',
      image: 'https://images.unspash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
      category: 'production',
      features: [
        'Luxury vehicle fleet management',
        'Helicopter and aircraft coordination',
        'VIP transport security',
        'Route planning and logistics',
        'Driver and pilot coordination',
        'Transportation timeline management'
      ],
      portfolio: [
        'Presidential event transportation',
        'Corporate executive transfers',
        'Wedding party coordination',
        'Safari lodge transfers'
      ]
    },
    {
      id: 'entertainment-curation',
      title: 'Entertainment Curation',
      description: 'Bespoke entertainment experiences featuring local and international artists, traditional performances, and cutting-edge production.',
      image: 'https://images.unspash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      category: 'production',
      features: [
        'Artist booking and management',
        'Traditional performance coordination',
        'International talent acquisition',
        'Technical production support',
        'Performance timeline management',
        'Audience engagement planning'
      ],
      portfolio: [
        'Sauti Sol corporate performances',
        'Traditional Maasai warrior displays',
        'International DJ bookings',
        'Cultural dance ensembles'
      ]
    },
    {
      id: 'floral-artistry',
      title: 'Floral Artistry & Design',
      description: 'Exquisite floral arrangements and botanical designs using local and exotic flowers to create stunning visual experiences.',
      image: 'https://images.unspash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=400&fit=crop',
      category: 'venue',
      features: [
        'Custom floral design concepts',
        'Local and exotic flower sourcing',
        'Botanical installation creation',
        'Seasonal arrangement planning',
        'Sustainable floral practices',
        'Event-specific botanical themes'
      ],
      portfolio: [
        'Garden party botanical installations',
        'Wedding ceremony archways',
        'Corporate event centerpieces',
        'Cultural celebration garlands'
      ]
    },
    {
      id: 'bespoke-catering',
      title: 'Bespoke Catering Experiences',
      description: 'Luxury culinary experiences featuring renowned chefs, diverse cuisines, and personalized menus that celebrate Kenya\'s rich culinary heritage.',
      image: 'https://images.unsplsh.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      category: 'catering',
      features: [
        'Celebrity chef partnerships',
        'Custom menu development',
        'Local cuisine celebration',
        'Dietary accommodation expertise',
        'Live cooking demonstrations',
        'Interactive dining experiences'
      ],
      portfolio: [
        'Michelin-starred chef collaborations',
        'Traditional Kenyan feast preparations',
        'Molecular gastronomy experiences',
        'Farm-to-table dinner events'
      ]
    },
    {
      id: 'venue-transformation',
      title: 'Venue Transformation Services',
      description: 'Complete venue makeovers that transform ordinary spaces into extraordinary event destinations through innovative design and technology.',
      image: 'https://images.unsplah.com/photo-1519167758481-83f29c1fe8ea?w=600&h=400&fit=crop',
      category: 'venue',
      features: [
        'Architectural space planning',
        'Lighting design and installation',
        'Sound system integration',
        'Climate control management',
        'Structural enhancement',
        'Technology infrastructure setup'
      ],
      portfolio: [
        'Warehouse wedding transformations',
        'Corporate headquarters makeovers',
        'Outdoor venue weatherproofing',
        'Historic building modernization'
      ]
    },
    {
      id: 'av-production',
      title: 'Audio-Visual Production',
      description: 'Cutting-edge AV production services including live streaming, professional recording, interactive displays, and immersive technology.',
      image: 'https://images.unspash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
      category: 'production',
      features: [
        'Live streaming production',
        'Professional video recording',
        'Interactive display systems',
        'Virtual reality experiences',
        'Projection mapping services',
        'Multi-language interpretation'
      ],
      portfolio: [
        'TEDx Nairobi production',
        'Corporate AGM live streams',
        'Wedding ceremony recordings',
        'Product launch presentations'
      ]
    }
  ];

  const caseStudies = [
    {
      id: 'safaricom-gala',
      title: 'Safaricom Foundation Annual Gala',
      description: 'A sophisticated corporate gala combining traditional Kenyan elements with modern luxury for 800+ guests.',
      image: 'https://images.unsplash.om/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
      services: ['Cultural Integration', 'Luxury Transportation', 'Entertainment Curation'],
      results: ['95% client satisfaction', '200+ media coverage', '15% increase in foundation donations'],
      beforeImage: 'https://images.unsplah.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplas.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop'
    },
    {
      id: 'diani-wedding',
      title: 'Luxury Beach Wedding in Diani',
      description: 'An intimate destination wedding blending coastal beauty with traditional Kikuyu ceremonies.',
      image: 'https://images.pixaby.com/photo/2016/11/21/16/01/beach-1846040_1280.jpg?w=800&h=600&fit=crop',
      services: ['Destination Events', 'Floral Artistry', 'Cultural Integration'],
      results: ['Perfect weather execution', '50+ guest accommodation', 'Zero logistics issues'],
      beforeImage: 'https://images.unsplah.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      afterImage: 'https://images.pxabay.com/photo/2016/11/21/16/01/beach-1846040_1280.jpg?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Ruto',
      role: 'CEO',
      company: 'Kenya Wildlife Service',
      content: 'Nova\'s specialized services transformed our conservation gala into a world-class event. Their cultural integration was particularly impressive.',
      avatar: 'https://randmuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      name: 'Ambassador John Kimani',
      role: 'Former Ambassador',
      company: 'Ministry of Foreign Affairs',
      content: 'The attention to cultural detail and luxury service was exceptional. Nova understands how to blend tradition with modern elegance perfectly.',
      avatar: 'https://randomuer.me/api/portraits/men/52.jpg',
      rating: 5
    },
    {
      name: 'Mrs. Grace Wanjiku',
      role: 'Director',
      company: 'Wanjiku Foundation',
      content: 'From venue transformation to entertainment curation, every specialized service exceeded our expectations. Truly professional execution.',
      avatar: 'https://randomser.me/api/portraits/women/38.jpg',
      rating: 5
    }
  ];

  const planningSteps = [
    {
      icon: 'Search',
      title: 'Specialized Service Assessment',
      description: 'Evaluate your event requirements and identify which specialized services will enhance your celebration.',
      duration: '1-2 days'
    },
    {
      icon: 'Users',
      title: 'Expert Team Assembly',
      description: 'Connect with our network of specialized professionals and cultural experts for your specific needs.',
      duration: '3-5 days'
    },
    {
      icon: 'Calendar',
      title: 'Integration Planning',
      description: 'Seamlessly integrate specialized services with your main event timeline and logistics.',
      duration: '1-2 weeks'
    },
    {
      icon: 'CheckCircle',
      title: 'Flawless Execution',
      description: 'Execute all specialized services with precision while maintaining the overall event experience.',
      duration: 'Event day'
    }
  ];

  const faqs = [
    {
      question: 'What types of cultural integration services do you offer?',
      answer: 'We provide authentic cultural ceremony coordination, traditional performance management, cultural authenticity consultation, and modern-traditional blending for various Kenyan ethnic communities including Kikuyu, Luo, Maasai, and others.'
    },
    {
      question: 'Can you coordinate destination events outside of Nairobi?',
      answer: 'Yes, we specialize in destination events throughout Kenya including coastal destinations (Diani, Malindi), safari locations (Maasai Mara, Amboseli), mountain venues (Mount Kenya), and lake regions (Nakuru, Naivasha).'
    },
    {
      question: 'What luxury transportation options are available?',
      answer: 'Our transportation services include luxury vehicle fleets, helicopter transfers, private aircraft coordination, VIP security transport, and specialized vehicles for different terrains and occasions.'
    },
    {
      question: 'How do you ensure authenticity in cultural ceremonies?',
      answer: 'We work closely with cultural elders, community leaders, and traditional experts to ensure authentic ceremonies. Our team includes cultural consultants who guide proper protocols and traditions.'
    },
    {
      question: 'What entertainment options can you curate?',
      answer: 'We can arrange local artists (Sauti Sol, Nyashinski), international performers, traditional dance groups, acrobatic displays, cultural performances, and cutting-edge production shows.'
    },
    {
      question: 'Do you provide sustainable event options?',
      answer: 'Yes, we offer eco-friendly floral practices, sustainable catering options, local vendor partnerships, and environmentally conscious event planning that supports local communities.'
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? specializedServices 
    : specializedServices?.filter(service => service?.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Specialized Event Services | Nova Luxury Events Kenya</title>
        <meta name="description" content="Discover Nova's comprehensive specialized services including cultural integration, destination events, luxury transportation, entertainment curation, and bespoke experiences across Kenya." />
        <meta name="keywords" content="specialized event services Kenya, cultural integration, destination events, luxury transportation, entertainment curation, floral artistry, bespoke catering" />
        <meta property="og:title" content="Specialized Event Services | Nova Luxury Events Kenya" />
        <meta property="og:description" content="Comprehensive specialized services for extraordinary events across Kenya." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://novaluxuryeventske.com/specialized-services" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <Breadcrumb />
              
              <div className="max-w-4xl mb-12">
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                  Specialized Services
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Nova Luxury Events offers comprehensive specialized services that transform ordinary events into extraordinary experiences. From cultural integration to luxury transportation, our expert team delivers unique solutions tailored to Kenya's diverse event landscape.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    asChild
                  >
                    <Link to="/contact-booking">Discuss Your Needs</Link>
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

          {/* Filter Tabs */}
          <section className="py-8 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <FilterTabs
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <ServiceGrid services={filteredServices} />
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-12 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  Featured Case Studies
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore how our specialized services have transformed events and created unforgettable experiences for our clients across Kenya.
                </p>
              </div>
              
              <CaseStudies caseStudies={caseStudies} />
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  Client Testimonials
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear from clients who have experienced the excellence of our specialized services.
                </p>
              </div>
              
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </section>

          {/* Planning Process */}
          <section className="py-12 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  Our Planning Process
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our systematic approach ensures seamless integration of specialized services into your event.
                </p>
              </div>
              
              <PlanningProcess steps={planningSteps} />
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <div className="text-center mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Common questions about our specialized services and how they can enhance your event.
                </p>
              </div>
              
              <FAQ faqs={faqs} />
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-16 bg-surface">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
                Ready to Enhance Your Event?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let our specialized services transform your vision into an extraordinary reality. Contact us to discuss how we can make your event truly exceptional.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/contact-booking">Start Planning</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  asChild
                >
                  <Link to="/services-overview">View All Services</Link>
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

export default SpecializedServices;