import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/homepage' },
    { label: 'Services', path: '/services-overview' },
    { label: 'Portfolio', path: '/portfolio-gallery' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact-booking' }
  ];

  const services = [
    { label: 'Wedding Planning', path: '/individual-service-pages?service=wedding' },
    { label: 'Corporate Events', path: '/individual-service-pages?service=corporate' },
    { label: 'Private Parties', path: '/individual-service-pages?service=private' },
    { label: 'Cultural Ceremonies', path: '/individual-service-pages?service=cultural' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/novaluxuryevents' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/novaluxuryevents' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/novaluxuryevents' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/novaluxuryevents' }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <img
                src="/assets/Nova-logo-05.png" // Corrected logo path for the footer
                alt="Nova Luxury Events Logo"
                className="w-20 h-20 object-contain rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary tracking-tight">
                  Nova
                </span>
                <span className="text-xs text-secondary font-medium -mt-1">
                  Luxury Events
                </span>
              </div>
            </Link>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Creating extraordinary luxury events that exceed expectations. From intimate gatherings to grand celebrations, we bring your vision to life with unparalleled attention to detail.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Icon name="Phone" size={16} className="text-secondary" />
                <a 
                  href="tel:+254703334359" 
                  className="text-muted-foreground hover:text-primary luxury-transition"
                >
                  +254 703 334359
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Icon name="Mail" size={16} className="text-secondary" />
                <a 
                  href="mailto:info@novaluxuryevents.com" 
                  className="text-muted-foreground hover:text-primary luxury-transition"
                >
                  info@novaluxuryeventske.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <Icon name="MapPin" size={16} className="text-secondary mt-0.5" />
                <span className="text-muted-foreground">
                  Garden Estate, Nairobi<br />
                  Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-sm text-muted-foreground hover:text-primary luxury-transition"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services?.map((service) => (
                <li key={service?.path}>
                  <Link
                    to={service?.path}
                    className="text-sm text-muted-foreground hover:text-primary luxury-transition"
                  >
                    {service?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-primary mb-4">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive event planning tips and luxury inspiration.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-primary mb-3 text-sm">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-accent hover:bg-secondary hover:text-secondary-foreground rounded-md flex items-center justify-center luxury-transition"
                    aria-label={`Follow us on ${social?.name}`}
                  >
                    <Icon name={social?.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} Nova Luxury Events. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-primary luxury-transition">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-primary luxury-transition">
                  Terms of Service
                </Link>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <span>Crafted by </span>
              <a 
                href="https://evoqcreative.co.ke" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-primary hover:text-secondary luxury-transition"
              >
                EVOQ TECH
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;