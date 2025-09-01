import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImageLightbox = ({ 
  image, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev, 
  currentIndex, 
  totalImages 
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e?.key === 'Escape') onClose();
      if (e?.key === 'ArrowLeft') onPrev();
      if (e?.key === 'ArrowRight') onNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !image) return null;

  const shareImage = () => {
    if (navigator.share) {
      navigator.share({
        title: `${image?.eventType} - Nova Luxury Events`,
        text: `Check out this beautiful ${image?.eventType?.toLowerCase()} event at ${image?.location}`,
        url: window.location?.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard?.writeText(window.location?.href);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center luxury-transition"
        aria-label="Close lightbox"
      >
        <Icon name="X" size={20} className="text-white" />
      </button>
      {/* Navigation Buttons */}
      {totalImages > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center luxury-transition"
            aria-label="Previous image"
          >
            <Icon name="ChevronLeft" size={24} className="text-white" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center luxury-transition"
            aria-label="Next image"
          >
            <Icon name="ChevronRight" size={24} className="text-white" />
          </button>
        </>
      )}
      {/* Image Counter */}
      <div className="absolute top-4 left-4 z-60 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white text-sm">
          {currentIndex + 1} / {totalImages}
        </span>
      </div>
      {/* Main Content */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-6">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={image?.src}
              alt={image?.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* Event Details */}
          <div className="lg:w-80 bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{image?.eventType}</h2>
                <div className="flex items-center space-x-2 text-sm opacity-80">
                  <Icon name="MapPin" size={16} />
                  <span>{image?.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="Users" size={16} />
                    <span>Guests</span>
                  </div>
                  <p className="font-medium">{image?.guestCount}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="Calendar" size={16} />
                    <span>Date</span>
                  </div>
                  <p className="font-medium">{image?.date}</p>
                </div>
              </div>

              {image?.description && (
                <div>
                  <h3 className="font-medium mb-2">Event Highlights</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {image?.description}
                  </p>
                </div>
              )}

              {image?.venue && (
                <div>
                  <div className="flex items-center space-x-2 mb-1 text-sm">
                    <Icon name="Building" size={16} />
                    <span>Venue</span>
                  </div>
                  <p className="font-medium">{image?.venue}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/20">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/contact-booking">Plan Similar Event</Link>
                </Button>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Share2"
                    iconPosition="left"
                    onClick={shareImage}
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = image?.src;
                      link.download = `nova-events-${image?.eventType?.toLowerCase()}.jpg`;
                      link?.click();
                    }}
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;