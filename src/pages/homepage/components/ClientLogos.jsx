import React from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const clients = [
    {
      id: 1,
      name: "Safaricom",
      logo: "https://images.unspash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Kenya Airways",
      logo: "https://images.unspash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Equity Bank",
      logo: "https://images.unspash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "East African Breweries",
      logo: "https://images.unspash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Nation Media Group",
      logo: "https://images.unslash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "KCB Group",
      logo: "https://images.unslash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 7,
      name: "Bamburi Cement",
      logo: "https://images..com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 8,
      name: "Standard Chartered",
      logo: "https://images.unslash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground">
            We're proud to partner with Kenya's most prestigious companies and families
          </p>
        </div>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {/* First set of logos */}
            {clients?.map((client) => (
              <div
                key={`first-${client?.id}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 luxury-transition"
              >
                <Image
                  src={client?.logo}
                  alt={`${client?.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 luxury-transition"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {clients?.map((client) => (
              <div
                key={`second-${client?.id}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 luxury-transition"
              >
                <Image
                  src={client?.logo}
                  alt={`${client?.name} logo`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 luxury-transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            "Nova Luxury Events transformed our annual conference into an unforgettable experience. Their attention to detail and professional execution exceeded all expectations."
          </blockquote>
          <cite className="block mt-4 text-sm font-semibold text-primary">
            — Sarah Kimani, Corporate Events Manager
          </cite>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;