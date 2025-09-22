import React from 'react';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const clients = [
    {
      id: 1,
      name: "Adede Advocates",
      logo: "/assets/images/advocates.jpg"
    },
    {
      id: 2,
      name: "Apex",
      logo: "/assets/images/apex.webp"
    },
    {
      id: 3,
      name: "IUCN",
      logo: "/assets/images/IUCN.webp"
    },
    {
      id: 4,
      name: "Kenya Wildlife Services",
      logo: "/assets/images/KWS.webp"
    },
    {
      id: 5,
      name: "Luna Graphics",
      logo: "/assets/images/luna.png"
    },
    {
      id: 6,
      name: "Kenya wildlife research institute",
      logo: "/assets/images/research.webp"
    },
    {
      id: 7,
      name: "Wildlife Direct",
      logo: "/assets/images/Wilddirect.png"
    },
    {
      id: 8,
      name: "WIldlife",
      logo: "/assets/images/Wildlife.webp"
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