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
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
      alt: "Corporate Annual Gala at Nairobi Serena Hotel",
      eventType: "Corporate Events",
      category: "corporate",
      location: "Nairobi Serena Hotel",
      venue: "hotel",
      guestCount: "300 guests",
      guestCountRange: "201-500",
      theme: "modern",
      date: "March 15, 2024",
      featured: true,
      description: "An elegant annual gala celebrating corporate achievements with sophisticated décor and world-class entertainment.",
      tags: ["gala", "corporate", "awards", "luxury"]
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      alt: "Traditional Kikuyu Wedding Ceremony",
      eventType: "Wedding Celebrations",
      category: "weddings",
      location: "Karen Country Club",
      venue: "outdoor",
      guestCount: "150 guests",
      guestCountRange: "101-200",
      theme: "traditional",
      date: "February 20, 2024",
      featured: false,
      description: "A beautiful blend of traditional Kikuyu customs with modern luxury touches in a stunning garden setting.",
      tags: ["wedding", "traditional", "kikuyu", "garden"]
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      alt: "50th Birthday Milestone Celebration",
      eventType: "Birthday Celebrations",
      category: "birthdays",
      location: "Private Estate, Muthaiga",
      venue: "private",
      guestCount: "80 guests",
      guestCountRange: "51-100",
      theme: "vintage",
      date: "January 28, 2024",
      featured: true,
      description: "An intimate yet grand celebration marking five decades of life with vintage elegance and personal touches.",
      tags: ["birthday", "milestone", "vintage", "intimate"]
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      alt: "Product Launch Event at KICC",
      eventType: "Corporate Events",
      category: "corporate",
      location: "Kenyatta International Conference Centre",
      venue: "corporate",
      guestCount: "500 guests",
      guestCountRange: "500+",
      theme: "contemporary",
      date: "March 10, 2024",
      featured: false,
      description: "A high-impact product launch featuring cutting-edge technology displays and interactive experiences.",
      tags: ["product launch", "technology", "corporate", "interactive"]
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      alt: "Luxury Garden Wedding Reception",
      eventType: "Wedding Celebrations",
      category: "weddings",
      location: "Hemingways Nairobi",
      venue: "hotel",
      guestCount: "200 guests",
      guestCountRange: "101-200",
      theme: "modern",
      date: "February 14, 2024",
      featured: false,
      description: "A romantic garden reception with fairy lights, elegant florals, and gourmet dining under the stars.",
      tags: ["wedding", "garden", "romantic", "luxury"]
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      alt: "Children\'s Safari-Themed Birthday Party",
      eventType: "Birthday Celebrations",
      category: "birthdays",
      location: "Nairobi National Park",
      venue: "outdoor",
      guestCount: "25 guests",
      guestCountRange: "1-50",
      theme: "cultural",
      date: "March 5, 2024",
      featured: false,
      description: "An adventurous safari-themed celebration bringing the wild to life for young explorers.",
      tags: ["children", "safari", "adventure", "outdoor"]
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      alt: "Executive Board Dinner",
      eventType: "Private Events",
      category: "private",
      location: "Villa Rosa Kempinski",
      venue: "hotel",
      guestCount: "20 guests",
      guestCountRange: "1-50",
      theme: "modern",
      date: "February 28, 2024",
      featured: false,
      description: "An exclusive executive dinner featuring premium cuisine and sophisticated ambiance for business leaders.",
      tags: ["executive", "dinner", "exclusive", "business"]
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
      alt: "University Graduation Celebration",
      eventType: "Milestone Celebrations",
      category: "milestones",
      location: "University of Nairobi",
      venue: "cultural",
      guestCount: "100 guests",
      guestCountRange: "51-100",
      theme: "contemporary",
      date: "January 15, 2024",
      featured: false,
      description: "A proud celebration of academic achievement with family and friends in a memorable setting.",
      tags: ["graduation", "university", "achievement", "family"]
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      alt: "Family Reunion Picnic",
      eventType: "Family Celebrations",
      category: "family",
      location: "Uhuru Gardens",
      venue: "outdoor",
      guestCount: "60 guests",
      guestCountRange: "51-100",
      theme: "rustic",
      date: "March 20, 2024",
      featured: false,
      description: "A joyful family gathering celebrating heritage and togetherness in a beautiful outdoor setting.",
      tags: ["family", "reunion", "outdoor", "heritage"]
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      alt: "Cultural Heritage Festival",
      eventType: "Private Events",
      category: "private",
      location: "Bomas of Kenya",
      venue: "cultural",
      guestCount: "400 guests",
      guestCountRange: "201-500",
      theme: "cultural",
      date: "February 10, 2024",
      featured: true,
      description: "A vibrant celebration of Kenyan culture featuring traditional music, dance, and authentic cuisine.",
      tags: ["cultural", "heritage", "traditional", "festival"]
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
      alt: "Retirement Celebration Dinner",
      eventType: "Milestone Celebrations",
      category: "milestones",
      location: "Fairmont The Norfolk",
      venue: "hotel",
      guestCount: "75 guests",
      guestCountRange: "51-100",
      theme: "vintage",
      date: "January 30, 2024",
      featured: false,
      description: "An elegant farewell celebration honoring decades of dedicated service and looking forward to new adventures.",
      tags: ["retirement", "celebration", "honor", "elegant"]
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      alt: "Baby Shower Garden Party",
      eventType: "Family Celebrations",
      category: "family",
      location: "Private Garden, Runda",
      venue: "private",
      guestCount: "35 guests",
      guestCountRange: "1-50",
      theme: "modern",
      date: "March 12, 2024",
      featured: false,
      description: "A delightful garden celebration welcoming the newest family member with love and joy.",
      tags: ["baby shower", "garden", "family", "celebration"]
    }
  ];

  // Mock featured events data
  const featuredEvents = [
    {
      id: 1,
      title: "Safaricom Annual Awards Gala",
      category: "Corporate Events",
      location: "Nairobi Serena Hotel",
      date: "March 15, 2024",
      guestCount: "300",
      heroImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
      description: `A spectacular evening celebrating excellence in telecommunications, featuring award presentations, 
      gourmet dining, and world-class entertainment. The event showcased corporate achievements while maintaining 
      an atmosphere of elegance and sophistication.`,
      highlights: [
        "Live orchestra performance",
        "5-course gourmet dinner",
        "Custom stage design",
        "Professional photography"
      ],
      testimonial: {
        quote: "Nova Luxury Events exceeded our expectations. The attention to detail was impeccable, and our guests were thoroughly impressed.",
        client: "Sarah Kimani",
        role: "Corporate Events Manager, Safaricom"
      },
      galleryImages: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Traditional Kikuyu Wedding Celebration",
      category: "Wedding Celebrations",
      location: "Karen Country Club",
      date: "February 20, 2024",
      guestCount: "150",
      heroImage: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      description: `A beautiful fusion of traditional Kikuyu customs with contemporary luxury, creating an unforgettable 
      celebration that honored cultural heritage while embracing modern elegance. The ceremony featured authentic 
      rituals, traditional music, and exquisite décor.`,
      highlights: [
        "Traditional ceremony rituals",
        "Cultural music & dance",
        "Authentic Kikuyu cuisine",
        "Garden ceremony setting"
      ],
      testimonial: {
        quote: "They perfectly balanced our cultural traditions with modern luxury. Our families were deeply moved by the authenticity and beauty.",
        client: "James & Grace Mwangi",
        role: "Wedding Couple"
      },
      galleryImages: [
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop"
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
        <link rel="canonical" href="https://novaluxuryevents.com/portfolio-gallery" />
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
                Updated: March 2024
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