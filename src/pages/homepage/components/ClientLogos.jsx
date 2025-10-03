import React from 'react';
import Image from '../../../components/AppImage';

// Reminder: Add the required animation keyframes and classes to your global CSS file.
// See the CSS block at the bottom of this response.

const ClientLogos = () => {
  const clients = [
    { id: 1, name: "Adede Advocates", logo: "/assets/images/advocates.jpg" },
    { id: 2, name: "Apex", logo: "/assets/images/apex.webp" },
    { id: 3, name: "IUCN", logo: "/assets/images/IUCN.webp" },
    { id: 4, name: "Kenya Wildlife Services", logo: "/assets/images/KWS.webp" },
    { id: 5, name: "Luna Graphics", logo: "/assets/images/luna.png" },
    { id: 6, name: "Kenya wildlife research institute", logo: "/assets/images/research.webp" },
    { id: 7, name: "Wildlife Direct", logo: "/assets/images/Wilddirect.png" },
    { id: 8, name: "WIldlife", logo: "/assets/images/Wildlife.webp" },
    { id: 9, name: "SleepyPanda", logo: "/assets/images/sleepypanda-01.jpg" },
    { id: 10, name: "Harmany Technologies", logo: "/assets/images/harmany-01.jpg" },
    { id: 11, name: "Apex Ict", logo: "/assets/images/apexx.jpg" },
    { id: 12, name: "Nordel", logo: "/assets/images/nordel.jpeg" } // Fixed duplicate id
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
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex animate-scroll-logos space-x-12 items-center"
            // This CSS variable is used by the animation to calculate the correct width
            style={{ '--logo-count': clients.length }}
          >
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={`first-${client.id}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 luxury-transition"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain luxury-transition"
                  /* Grayscale effect commented out as requested */
                  // className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 luxury-transition"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client) => (
              <div
                key={`second-${client.id}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 luxury-transition"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain luxury-transition"
                  /* Grayscale effect commented out as requested */
                  // className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 luxury-transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
            "Good evening team Nova - Thank you so much for the great work to make our event a success. Your hardwork, professionalism and friendly teamwork enabled us to shine all week. Tumeshukuru sana."
          </blockquote>
          <cite className="block mt-4 text-sm font-semibold text-primary">
            — IUCN East Africa
          </cite>
        </div>
      </div>
      {/* The <style jsx> block has been removed and should be placed in your global CSS file */}
    </section>
  );
};

export default ClientLogos;