import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import MobileMenuModal from './MobileMenuModal';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { 
      label: 'Services', 
      path: '/services-overview', 
      icon: 'Calendar',
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Services', path: '/services-overview' },
        { label: 'Corporate Events', path: '/individual-service-pages?service=corporate' },
        { label: 'Wedding Celebrations', path: '/individual-service-pages?service=wedding' },
        { label: 'Birthday Celebrations', path: '/individual-service-pages?service=birthday' },
        { label: 'Private Luxury Events', path: '/individual-service-pages?service=private' },
        { label: 'Milestone Celebrations', path: '/individual-service-pages?service=milestone' },
        { label: 'Family & Social Events', path: '/individual-service-pages?service=family' },
        { label: 'Specialized Services', path: '/specialized-services' }
      ]
    },
    { label: 'Portfolio', path: '/portfolio-gallery', icon: 'Image' },
    { label: 'About', path: '/about-us', icon: 'Users' },
    { label: 'Testimonials', path: '/testimonials', icon: 'MessageCircle' },
    { label: 'Contact', path: '/contact-booking', icon: 'Phone' }
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      {/* Header with white background */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between w-full h-20">
            
            {/* UPDATED: Logo and stacked brand name */}
            <Link to="/homepage" className="flex items-center flex-shrink-0 gap-3">
              <img
                src="/assets/Nova-logo-05.png"
                alt="Nova Luxury Events Logo"
                className="h-20 w-20 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-calligraphy-cursive text-black">
                  Nova
                </span>
                <span className="text-lg font-calligraphy-cursive text-secondary -mt-1">
                  Luxury Events
                </span>
              </div>
            </Link>

            {/* UPDATED: Desktop navigation with colors for dark background */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 text-sm luxury-transition flex items-center space-x-1 ${
                        isActivePath(item.path)
                          ? 'text-secondary font-semibold'
                          : 'text-black hover:text-gray-700'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <Icon name="ChevronDown" size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                      )}
                       {/* Underline for active link */}
                      {isActivePath(item.path) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-secondary rounded-full"></span>
                      )}
                    </Link>
                    
                    {/* UPDATED: Dropdown with dark, blurred background */}
                    {item.hasDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 
                                     bg-black/30 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg py-2 z-50 
                                     opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                     transition-all duration-300">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 luxury-transition"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* UPDATED: CTAs with colors for dark background */}
            <div className="hidden lg:flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => window.location.href = 'tel:+254700000000'}
                    className="rounded-full text-white border-white/50 hover:bg-white/10"
                >
                    Call Now
                </Button>
                <Button
                    variant="default"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    asChild
                    className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                    <Link to="/contact-booking">Book Consultation</Link>
                </Button>
            </div>

            {/* UPDATED: Mobile menu button color */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-black hover:text-gray-700 luxury-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile menu modal should also be updated to a dark theme if needed */}
      <MobileMenuModal 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu}
        navigationItems={navigationItems}
        isActivePath={isActivePath}
      />
    </>
  );
};

export default Header;