import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileServicesDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMobileServicesDropdown = (e) => {
    e.preventDefault();
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-between w-full h-16 px-4 bg-white/70 backdrop-blur-lg rounded-full shadow-md border border-white/20">
            
            {/* Logo */}
            <Link to="/homepage" className="flex items-center flex-shrink-0">
              <img
                src="/assets/Nova-logo-05.png" // **IMPORTANT: Replace with your actual logo path**
                alt="Nova Luxury Events Logo"
                className="w-20 h-20 object-contain rounded-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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

            {/* Desktop CTAs */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary luxury-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Panel */}
      <div 
        className={`fixed top-20 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="mx-4 p-4 bg-white rounded-2xl shadow-xl border border-border">
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <div key={item.path}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={!item.hasDropdown ? closeMobileMenu : (e) => e.preventDefault()}
                    className={`flex items-center space-x-3 p-3 rounded-lg luxury-transition flex-1 ${
                      isActivePath(item.path)
                        ? 'bg-accent text-primary'
                        : 'text-muted-foreground hover:bg-accent hover:text-primary'
                    }`}
                  >
                    <Icon name={item.icon} size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  {item.hasDropdown && (
                    <button
                      onClick={toggleMobileServicesDropdown}
                      className="p-3 text-muted-foreground hover:text-primary luxury-transition"
                      aria-label="Toggle services dropdown"
                    >
                      <Icon name="ChevronDown" size={20} className={`luxury-transition ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {item.hasDropdown && isMobileServicesDropdownOpen && (
                  <div className="ml-6 mt-1 space-y-1 border-l-2 border-border/50 pl-4 py-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-3 py-2 text-base text-muted-foreground hover:text-primary hover:bg-accent rounded-lg luxury-transition"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => {
                    window.location.href = 'tel:+254700000000';
                    closeMobileMenu();
                  }}
                  className="rounded-full"
                >
                  Call Now
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                  className="rounded-full"
                >
                  <Link to="/contact-booking" onClick={closeMobileMenu}>
                    Book Consultation
                  </Link>
                </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;