import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import FilterTabs from './components/FilterTabs';
import SearchBar from './components/SearchBar';
import AdvancedFilters from './components/AdvancedFilters';
import GalleryGrid from './components/GalleryGrid';
import FeaturedEvents from './components/FeaturedEvents';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [loading, setLoading] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    venue: 'all',
    guestCount: 'all',
    theme: 'all'
  });

  // Mock portfolio images data
  const portfolioImages = [
    {
      id: 1,
      src: "/assets/images/tent1.jpeg",
      alt: "Corporate Annual Gala at Nairobi Serena Hotel",
      // eventType: "Corporate Events",
      // category: "corporate", 
      // location: "Nairobi Serena Hotel",
      // venue: "hotel",
      // guestCount: "300 guests",
      // guestCountRange: "201-500",
      // theme: "modern",
      // date: "March 15, 2024",
      // featured: true,
      // description: "An elegant annual gala celebrating corporate achievements with sophisticated décor and world-class entertainment.",
      // tags: ["gala", "corporate", "awards", "luxury"]
    },
    {
      id: 2,
      src: "/assets/images/stage11.jpeg",
      alt: "Traditional Kikuyu Wedding Ceremony",
      // eventType: "Wedding Celebrations",
      // category: "weddings",
      // location: "Karen Country Club",
      // venue: "outdoor",
      // guestCount: "150 guests",
      // guestCountRange: "101-200",
      // theme: "traditional",
      // date: "February 20, 2024",
      // featured: false,
      // description: "A beautiful blend of traditional Kikuyu customs with modern luxury touches in a stunning garden setting.",
      // tags: ["wedding", "traditional", "kikuyu", "garden"]
    },
    {
      id: 3,
      src: "/assets/images/stage5.jpeg",
      alt: "50th Birthday Milestone Celebration",
      // eventType: "Birthday Celebrations",
      // category: "birthdays",
      // location: "Private Estate, Muthaiga",
      // venue: "private",
      // guestCount: "80 guests",
      // guestCountRange: "51-100",
      // theme: "vintage",
      // date: "January 28, 2024",
      // featured: true,
      // description: "An intimate yet grand celebration marking five decades of life with vintage elegance and personal touches.",
      // tags: ["birthday", "milestone", "vintage", "intimate"]
    },
    {
      id: 4,
      src: "/assets/images/tent12.jpeg",
      alt: "Product Launch Event at KICC",
      // eventType: "Corporate Events",
      // category: "corporate",
      // location: "Kenyatta International Conference Centre",
      // venue: "corporate",
      // guestCount: "500 guests",
      // guestCountRange: "500+",
      // theme: "contemporary",
      // date: "March 10, 2024",
      // featured: false,
      // description: "A high-impact product launch featuring cutting-edge technology displays and interactive experiences.",
      // tags: ["product launch", "technology", "corporate", "interactive"]
    },
    {
      id: 5,
      src: "/assets/images/tent7.jpeg",
      alt: "Luxury Garden Wedding Reception",
      // eventType: "Wedding Celebrations",
      // category: "weddings",
      // location: "Hemingways Nairobi",
      // venue: "hotel",
      // guestCount: "200 guests",
      // guestCountRange: "101-200",
      // theme: "modern",
      // date: "February 14, 2024",
      // featured: false,
      // description: "A romantic garden reception with fairy lights, elegant florals, and gourmet dining under the stars.",
      // tags: ["wedding", "garden", "romantic", "luxury"]
    },
    {
      id: 6,
      src: "/assets/images/stage6.jpeg",
      alt: "Children's Safari-Themed Birthday Party",
      // eventType: "Birthday Celebrations",
      // category: "birthdays",
      // location: "Nairobi National Park",
      // venue: "outdoor",
      // guestCount: "25 guests",
      // guestCountRange: "1-50",
      // theme: "cultural",
      // date: "March 5, 2024",
      // featured: false,
      // description: "An adventurous safari-themed celebration bringing the wild to life for young explorers.",
      // tags: ["children", "safari", "adventure", "outdoor"]
    },
    {
      id: 7,
      src: "/assets/images/stage10.jpeg",
      alt: "Executive Board Dinner",
      // eventType: "Private Events",
      // category: "private",
      // location: "Villa Rosa Kempinski",
      // venue: "hotel",
      // guestCount: "20 guests",
      // guestCountRange: "1-50",
      // theme: "modern",
      // date: "February 28, 2024",
      // featured: false,
      // description: "An exclusive executive dinner featuring premium cuisine and sophisticated ambiance for business leaders.",
      // tags: ["executive", "dinner", "exclusive", "business"]
    },
    {
      id: 8,
      src: "/assets/images/seats10.jpeg",
      alt: "University Graduation Celebration",
      // eventType: "Milestone Celebrations",
      // category: "milestones",
      // location: "University of Nairobi",
      // venue: "cultural",
      // guestCount: "100 guests",
      // guestCountRange: "51-100",
      // theme: "contemporary",
      // date: "January 15, 2024",
      // featured: false,
      // description: "A proud celebration of academic achievement with family and friends in a memorable setting.",
      // tags: ["graduation", "university", "achievement", "family"]
    },
    {
      id: 9,
      src: "/assets/images/seats8.jpeg",
      alt: "Family Reunion Picnic",
      // eventType: "Family Celebrations",
      // category: "family",
      // location: "Uhuru Gardens",
      // venue: "outdoor",
      // guestCount: "60 guests",
      // guestCountRange: "51-100",
      // theme: "rustic",
      // date: "March 20, 2024",
      // featured: false,
      // description: "A joyful family gathering celebrating heritage and togetherness in a beautiful outdoor setting.",
      // tags: ["family", "reunion", "outdoor", "heritage"]
    },
    {
      id: 10,
      src: "/assets/images/seats9.jpeg",
      alt: "Cultural Heritage Festival",
      // eventType: "Private Events",
      // category: "private",
      // location: "Bomas of Kenya",
      // venue: "cultural",
      // guestCount: "400 guests",
      // guestCountRange: "201-500",
      // theme: "cultural",
      // date: "February 10, 2024",
      // featured: true,
      // description: "A vibrant celebration of Kenyan culture featuring traditional music, dance, and authentic cuisine.",
      // tags: ["cultural", "heritage", "traditional", "festival"]
    },
    {
      id: 11,
      src: "/assets/images/stage3.jpeg",
      alt: "Retirement Celebration Dinner",
      // eventType: "Milestone Celebrations",
      // category: "milestones",
      // location: "Fairmont The Norfolk",
      // venue: "hotel",
      // guestCount: "75 guests",
      // guestCountRange: "51-100",
      // theme: "vintage",
      // date: "January 30, 2024",
      // featured: false,
      // description: "An elegant farewell celebration honoring decades of dedicated service and looking forward to new adventures.",
      // tags: ["retirement", "celebration", "honor", "elegant"]
    },
    {
      id: 12,
      src: "/assets/images/tent4.jpeg",
      alt: "Baby Shower Garden Party",
      // eventType: "Family Celebrations",
      // category: "family",
      // location: "Private Garden, Runda",
      // venue: "private",
      // guestCount: "35 guests",
      // guestCountRange: "1-50",
      // theme: "modern",
      // date: "March 12, 2024",
      // featured: false,
      // description: "A delightful garden celebration welcoming the newest family member with love and joy.",
      // tags: ["baby shower", "garden", "family", "celebration"]
    }
  ];

  // Mock featured events data
  const featuredEvents = [
    {
      id: 1,
      title: "Africa Conservation Forum Annual Summit",
      category: "Corporate Events", 
      location: "Emara Ole Sereni Hotel",
      date: "March 15, 2024",
      guestCount: "100",
      heroImage: "/assets/images/stage2.jpeg",
      description: `A prestigious gathering of conservation leaders and partners celebrating achievements in African wildlife protection. 
      The summit featured keynote presentations from IUCN representatives, interactive panel discussions on biodiversity preservation, 
      and recognition of outstanding conservation initiatives across the continent.`,
      highlights: [
        "Conservation awards ceremony",
        "Sustainable gourmet dining experience",
        "Interactive conservation exhibits",
        "Professional event documentation"
      ],
      testimonial: {
        quote: "Nova Luxury Events created the perfect atmosphere for our conservation summit. Their sustainable approach and attention to detail aligned perfectly with our mission.",
        client: "Dr. Elizabeth Wangari",
        role: "Regional Director, IUCN Eastern and Southern Africa"
      },
      galleryImages: [
        "/assets/images/IUCN5.jpeg",
        "/assets/images/IUCN2.jpeg", 
        "/assets/images/IUCN3.jpeg",
        "/assets/images/IUCN4.jpeg"
      ]
    },
    {
      id: 2,
      title: "Enchanted Garden Wedding Celebration",
      category: "Wedding Celebrations", 
      location: "Karen Country Club",
      date: "February 20, 2024",
      guestCount: "150",
      heroImage: "/assets/images/tent6.jpeg",
      description: `A breathtaking rustic-themed garden wedding that transformed the venue into a romantic woodland paradise. 
      The celebration featured natural elements, vintage-inspired details, and elegant floral arrangements that perfectly 
      complemented the outdoor setting, creating an intimate and magical atmosphere.`,
      highlights: [
        "Rustic wooden arch ceremony",
        "Fairy light canopy",
        "Farm-to-table dining experience",
        "Enchanted garden decor"
      ],
      testimonial: {
        quote: "Nova Luxury Events turned our dream of a romantic garden wedding into reality. Every detail was perfect, from the rustic elements to the magical lighting.",
        client: "Thomas & Sarah Anderson",
        role: "Wedding Couple"
      },
      galleryImages: [
        "/assets/images/seats3.jpeg",
        "/assets/images/tent4.jpeg",
        "/assets/images/tent5.jpeg",
        "/assets/images/seats4.jpeg"
      ]
    }
  ];

  // Filter and search logic
  const filteredImages = useMemo(() => {
    let filtered = portfolioImages;

    // Category filter
    if (activeFilter !== 'all') {
      filtered = filtered?.filter(image => image?.category === activeFilter);
    }

    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm?.toLowerCase();
      filtered = filtered?.filter(image => 
        image?.eventType?.toLowerCase()?.includes(searchLower) ||
        image?.location?.toLowerCase()?.includes(searchLower) ||
        image?.tags?.some(tag => tag?.toLowerCase()?.includes(searchLower)) ||
        image?.description?.toLowerCase()?.includes(searchLower)
      );
    }

    // Advanced filters
    if (advancedFilters?.venue !== 'all') {
      filtered = filtered?.filter(image => image?.venue === advancedFilters?.venue);
    }

    if (advancedFilters?.guestCount !== 'all') {
      filtered = filtered?.filter(image => image?.guestCountRange === advancedFilters?.guestCount);
    }

    if (advancedFilters?.theme !== 'all') {
      filtered = filtered?.filter(image => image?.theme === advancedFilters?.theme);
    }

    return filtered;
  }, [activeFilter, searchTerm, advancedFilters]);

  // Calculate event counts for filter tabs
  const eventCounts = useMemo(() => {
    return {
      all: portfolioImages?.length,
      corporate: portfolioImages?.filter(img => img?.category === 'corporate')?.length,
      weddings: portfolioImages?.filter(img => img?.category === 'weddings')?.length,
      birthdays: portfolioImages?.filter(img => img?.category === 'birthdays')?.length,
      private: portfolioImages?.filter(img => img?.category === 'private')?.length,
      milestones: portfolioImages?.filter(img => img?.category === 'milestones')?.length,
      family: portfolioImages?.filter(img => img?.category === 'family')?.length
    };
  }, []);

  // Handle filter changes
  const handleFilterChange = (filter) => {
    setLoading(true);
    setActiveFilter(filter);
    setTimeout(() => setLoading(false), 300);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleAdvancedFilterChange = (key, value) => {
    setAdvancedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearAdvancedFilters = () => {
    setAdvancedFilters({
      venue: 'all',
      guestCount: 'all',
      theme: 'all'
    });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio Gallery - Nova Luxury Events | Premium Event Photography</title>
        <meta name="description" content="Explore our stunning portfolio of luxury events across Kenya. From corporate galas to traditional weddings, see how Nova Luxury Events creates unforgettable celebrations." />
        <meta name="keywords" content="event portfolio, luxury events Kenya, wedding photography, corporate events, event gallery, Nairobi events" />
        <meta property="og:title" content="Portfolio Gallery - Nova Luxury Events" />
        <meta property="og:description" content="Discover our portfolio of exceptional luxury events across Kenya. Professional event photography showcasing our expertise in creating memorable celebrations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://novaluxuryeventske.com/portfolio-gallery" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-8 bg-gradient-to-b from-surface to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Breadcrumb />
            
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
                Portfolio Gallery
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the artistry and excellence behind every Nova Luxury Events celebration. 
                From intimate gatherings to grand galas, explore our portfolio of unforgettable moments 
                crafted with precision and passion across Kenya.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
              />
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          eventCounts={eventCounts}
        />

        {/* Advanced Filters */}
        <AdvancedFilters
          isOpen={showAdvancedFilters}
          onToggle={() => setShowAdvancedFilters(!showAdvancedFilters)}
          filters={advancedFilters}
          onFilterChange={handleAdvancedFilterChange}
          onClearFilters={handleClearAdvancedFilters}
        />

        {/* Gallery Grid */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Results Info */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-muted-foreground">
                Showing {filteredImages?.length} of {portfolioImages?.length} events
                {searchTerm && (
                  <span> for "{searchTerm}"</span>
                )}
              </div>
              
              <div className="text-sm text-muted-foreground">
                Updated: March 2025
              </div>
            </div>

            <GalleryGrid images={filteredImages} loading={loading} />
          </div>
        </section>

        {/* Featured Events */}
        <FeaturedEvents featuredEvents={featuredEvents} />

        {/* Stats Section */}
        <StatsSection />

        {/* CTA Section */}
        <CTASection />

        <Footer />
      </div>
    </>
  );
};

export default PortfolioGallery;