import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../AppIcon';
import Button from './Button';

const MobileMenuModal = ({ isOpen, onClose, navigationItems, isActivePath }) => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: '0%', opacity: 1 },
    exit: { y: '100%', opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg rounded-t-3xl p-4 max-h-[80vh] flex flex-col"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Modal Header */}
            <div className="relative flex-shrink-0">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" />
              <div className="flex items-center justify-between pt-8 pb-4">
                <div className="flex items-center">
                  <img src="/assets/Nova-logo-05.png" alt="Logo" className="h-25 w-20 object-contain" />
                  <span className="text-lg font-bold text-gray-800 ml-2">Nova Luxury Events</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 text-muted-foreground"
                  aria-label="Close menu"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
            </div>
            
            {/* Scrollable Navigation */}
            <div className="overflow-y-auto">
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.path}
                        onClick={!item.hasDropdown ? onClose : (e) => e.preventDefault()}
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
                          onClick={toggleServicesDropdown}
                          className="p-3 text-muted-foreground hover:text-primary luxury-transition"
                          aria-label="Toggle services dropdown"
                        >
                          <Icon name="ChevronDown" size={20} className={`luxury-transition ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {item.hasDropdown && isServicesDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-6 mt-1 space-y-1 border-l-2 border-border/50 pl-4 py-1 overflow-hidden"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={onClose}
                              className="block px-3 py-2 text-base text-muted-foreground hover:text-primary hover:bg-accent rounded-lg luxury-transition"
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-4 space-y-2">
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Phone"
                      iconPosition="left"
                      onClick={() => {
                        window.location.href = 'tel:+254703334359';
                        onClose();
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
                      <Link to="/contact-booking" onClick={onClose}>
                        Book Consultation
                      </Link>
                    </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuModal;