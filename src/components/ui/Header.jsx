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
      {/* Reduced header height from h-20 to h-16 */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Reduced div height from h-20 to h-16 */}
          <div className="flex items-center justify-between w-full h-16">
            
            <Link to="/homepage" className="flex items-center flex-shrink-0">
              {/* Reduced logo size to fit new header height */}
              <img
                src="/assets/Nova-logo-05.png"
                alt="Nova Luxury Events Logo"
                className="h-25 w-20 object-contain"
              />
              {/* Adjusted text size for better responsiveness */}
              <span className="text-lg md:text-xl font-bold text-gray-800 ml-2">
                Nova Luxury
              </span>
            </Link>

            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <div key={item.path} className="relative group">
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-sm luxury-transition flex items-center space-x-1 ${
                        isActivePath(item.path)
                          ? 'text-primary font-semibold'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <Icon name="ChevronDown" size={16} className="transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </Link>
                    
                    {item.hasDropdown && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white border border-border rounded-xl shadow-lg py-2 z-50 
                                     opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                     transition-all duration-300">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent luxury-transition"
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

            <div className="hidden lg:flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => window.location.href = 'tel:+254700000000'}
                    className="rounded-full"
                >
                    Call Now
                </Button>
                <Button
                    variant="default"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    asChild
                    className="rounded-full"
                >
                    <Link to="/contact-booking">Book Consultation</Link>
                </Button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary luxury-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>
      
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