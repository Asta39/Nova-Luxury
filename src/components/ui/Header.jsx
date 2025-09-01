import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event?.target?.closest('.dropdown-container')) {
        setIsServicesDropdownOpen(false);
        setIsMobileServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen || isMobileServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isServicesDropdownOpen, isMobileServicesDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesDropdownOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };

  const toggleMobileServicesDropdown = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 luxury-transition ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-lg' 
          : 'bg-background border-b border-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-6 lg:px-12">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 luxury-transition hover:opacity-80"
            onClick={closeMobileMenu}
          >
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 text-primary-foreground" 
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-primary tracking-tight">
                Nova
              </span>
              <span className="text-xs text-secondary font-medium -mt-1">
                Luxury Events
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <div
                key={item?.path}
                className="relative dropdown-container"
                onMouseEnter={item?.hasDropdown ? handleServicesMouseEnter : undefined}
                onMouseLeave={item?.hasDropdown ? handleServicesMouseLeave : undefined}
              >
                <Link
                  to={item?.path}
                  className={`relative px-3 py-2 text-sm font-medium luxury-transition flex items-center space-x-1 ${
                    isActivePath(item?.path)
                      ? 'text-primary' :'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <span>{item?.label}</span>
                  {item?.hasDropdown && (
                    <Icon 
                      name="ChevronDown" 
                      size={16} 
                      className={`luxury-transition ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
                {isActivePath(item?.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                )}
                
                {/* Desktop Dropdown Menu */}
                {item?.hasDropdown && isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    {item?.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem?.path}
                        to={dropdownItem?.path}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent luxury-transition"
                        onClick={closeMobileMenu}
                      >
                        {dropdownItem?.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.location.href = 'tel:+254700000000'}
            >
              Call Now
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              asChild
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
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <div key={item?.path} className="dropdown-container">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item?.path}
                      onClick={!item?.hasDropdown ? closeMobileMenu : undefined}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-md luxury-transition flex-1 ${
                        isActivePath(item?.path)
                          ? 'bg-accent text-primary' :'text-muted-foreground hover:bg-accent hover:text-primary'
                      }`}
                    >
                      <Icon name={item?.icon} size={20} />
                      <span className="font-medium">{item?.label}</span>
                    </Link>
                    {item?.hasDropdown && (
                      <button
                        onClick={toggleMobileServicesDropdown}
                        className="p-2 text-muted-foreground hover:text-primary luxury-transition"
                        aria-label="Toggle services dropdown"
                      >
                        <Icon 
                          name="ChevronDown" 
                          size={20} 
                          className={`luxury-transition ${isMobileServicesDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown */}
                  {item?.hasDropdown && isMobileServicesDropdownOpen && (
                    <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {item?.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem?.path}
                          to={dropdownItem?.path}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md luxury-transition"
                        >
                          {dropdownItem?.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => {
                    window.location.href = 'tel:+254700000000';
                    closeMobileMenu();
                  }}
                >
                  Call Now
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/contact-booking" onClick={closeMobileMenu}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;