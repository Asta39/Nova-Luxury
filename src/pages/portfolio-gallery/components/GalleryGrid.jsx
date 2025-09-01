import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

import ImageLightbox from './ImageLightbox';

const GalleryGrid = ({ images, loading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % images?.length
      : (lightboxIndex - 1 + images?.length) % images?.length;
    
    setLightboxIndex(newIndex);
    setSelectedImage(images?.[newIndex]);
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 })?.map((_, index) => (
          <div
            key={index}
            className="aspect-square bg-muted rounded-2xl animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (images?.length === 0) {
    return (
      <div className="text-center py-16">
        <Icon name="ImageOff" size={48} className="text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">No events found</h3>
        <p className="text-muted-foreground">
          Try adjusting your filters or search terms to find more events.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images?.map((image, index) => (
          <div
            key={image?.id}
            className="group relative aspect-square overflow-hidden rounded-2xl luxury-shadow-card hover:luxury-shadow-modal luxury-transition cursor-pointer"
            onClick={() => openLightbox(image, index)}
          >
            <Image
              src={image?.src}
              alt={image?.alt}
              className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 luxury-transition">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-medium text-sm">{image?.eventType}</p>
                    <p className="text-xs opacity-80">{image?.location}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <Icon name="Users" size={12} />
                    <span>{image?.guestCount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 luxury-transition">
              <div className="flex space-x-1">
                <button
                  className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center luxury-transition"
                  onClick={(e) => {
                    e?.stopPropagation();
                    // Share functionality
                  }}
                  aria-label="Share image"
                >
                  <Icon name="Share2" size={14} className="text-gray-700" />
                </button>
                <button
                  className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center luxury-transition"
                  onClick={(e) => {
                    e?.stopPropagation();
                    openLightbox(image, index);
                  }}
                  aria-label="View full size"
                >
                  <Icon name="Maximize2" size={14} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Featured Badge */}
            {image?.featured && (
              <div className="absolute top-2 left-2">
                <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Lightbox */}
      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          isOpen={!!selectedImage}
          onClose={closeLightbox}
          onNext={() => navigateLightbox('next')}
          onPrev={() => navigateLightbox('prev')}
          currentIndex={lightboxIndex}
          totalImages={images?.length}
        />
      )}
    </>
  );
};

export default GalleryGrid;