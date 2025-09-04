import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon'; // Make sure this path is correct for your project structure

const FloatingContactButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // This effect handles the component's visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button after scrolling down 500px (adjust as needed)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Also close the menu when scrolling back to the top
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const phoneNumber = '+254727937010';
  const emailAddress = 'infoluxeallure@gmail.com';
  
  const contactLinks = [
    {
      label: 'Call Us',
      value: phoneNumber,
      icon: 'Phone',
      href: `tel:${phoneNumber}`
    },
    {
      label: 'WhatsApp',
      value: phoneNumber,
      icon: 'MessageCircle', // Using a relevant icon for WhatsApp
      href: `https://wa.me/${phoneNumber}`
    },
    {
      label: 'Email',
      value: emailAddress,
      icon: 'Mail',
      href: `mailto:${emailAddress}`
    }
  ];

  const visibilityClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-10 pointer-events-none';

  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div className={`hidden md:block fixed bottom-8 right-8 z-40 transition-all duration-300 ${visibilityClasses}`}>
        <div className="relative flex flex-col items-end space-y-3">
          {/* Expanded Contact Cards */}
          {isOpen && (
            <div className="flex flex-col items-end space-y-3">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white shadow-lg rounded-lg p-3 w-64 animate-in slide-in-from-right-4 duration-300"
                  style={{ animationDelay: `${(contactLinks.length - index) * 100}ms` }}
                >
                  <div className="bg-accent p-2 rounded-lg">
                    <Icon name={link.icon} size={20} className="text-primary" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-primary text-sm">{link.label}</p>
                    <p className="text-muted-foreground text-xs">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Main Floating Action Button (FAB) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 bg-red-800 text-white rounded-full shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110"
            aria-label="Toggle contact options"
          >
            <Icon name="X" size={28} className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-45 scale-75'}`} />
          </button>
        </div>
      </div>

      {/* --- MOBILE VIEW --- */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 ${visibilityClasses}`}>
        <div className="flex justify-around items-center h-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-1 text-primary hover:text-secondary"
            >
              <Icon name={link.icon} size={24} />
              <span className="text-xs font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingContactButtons;