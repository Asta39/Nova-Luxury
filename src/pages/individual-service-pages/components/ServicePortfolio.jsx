import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const ServicePortfolio = ({ service }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!service || !service?.portfolioImages) return null;

  const openLightbox = (image, index) => {
    setSelectedImage({ ...image, index });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = selectedImage?.index;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === service?.portfolioImages?.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? service?.portfolioImages?.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage({ ...service?.portfolioImages?.[newIndex], index: newIndex });
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent {service?.name?.toLowerCase()} projects and see how we bring extraordinary visions to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {service?.portfolioImages?.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg luxury-shadow-card cursor-pointer group relative"
              onClick={() => openLightbox(image, index)}
            >
              <div className="absolute inset-0">
                <Image
                  src={image?.src}
                  alt={image?.alt}
                  className="w-full h-full object-cover group-hover:scale-110 luxury-transition"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 luxury-transition flex items-center justify-center">
                  <Icon 
                    name="ZoomIn" 
                    size={24} 
                    className="text-white opacity-0 group-hover:opacity-100 luxury-transition" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={(e) => {
              // Close lightbox when clicking the backdrop
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 luxury-transition"
              >
                <Icon name="X" size={24} />
              </button>
              
              <div className="relative">
                <Image
                  src={selectedImage?.src}
                  alt={selectedImage?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white luxury-transition"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white luxury-transition"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-white text-sm">{selectedImage?.alt}</p>
                <p className="text-gray-400 text-xs mt-1">
                  {selectedImage?.index + 1} of {service?.portfolioImages?.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicePortfolio;