import React from 'react';
import Image from '../../../components/AppImage';
// The static Icon component is no longer needed in this file
// import Icon from '../../../components/AppIcon';

const CompanyStory = () => {
  // Define the icon color for consistency
  const iconSecondaryColor = "#b8860b";

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-secondary rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, Nova Luxury Events emerged from a passion for creating extraordinary celebrations that honor both modern sophistication and Kenya's rich cultural heritage. What started as a boutique wedding planning service has evolved into Kenya's premier luxury event management company.
              </p>
              
              <p>
                Nova's vision was simple yet ambitious: to establish an event planning company that could seamlessly blend international luxury standards with authentic Kenyan traditions. Having worked in hospitality management across Europe and East Africa, our team recognized the unique opportunity to create something truly special in Nairobi's growing luxury market.
              </p>
              
              <p>
                Today, Nova Luxury Events stands as a testament to that vision, having orchestrated over 500 successful events ranging from intimate family celebrations to grand corporate galas. Our commitment to excellence and cultural authenticity has made us the trusted choice for Kenya's most discerning clients.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-accent p-6 rounded-3xl border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                {/* --- ICON REPLACED HERE --- */}
                <lord-icon
                    src="https://cdn.lordicon.com/weqkkuwt.json"
                    trigger="loop"
                    state="loop-osscilate"
                    colors={`primary:#121331,secondary:${iconSecondaryColor}`}
                    // Added marginRight to replicate the 'mr-2' class
                    style={{ width: '52px', height: '52px', marginRight: '0.5rem' }}>
                </lord-icon>
                Our Mission
              </h3>
              <p className="text-muted-foreground">
                To create unforgettable luxury experiences that celebrate life's most precious moments while honoring Kenya's diverse cultural traditions and exceeding our clients' highest expectations.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl luxury-shadow-card">
              <Image
                src="/assets/Nova-logo-05.png"
                alt="Nova Luxury Events Logo"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Founder Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm p-4 rounded-3xl luxury-shadow-modal">
              <h4 className="font-semibold text-primary">The Nova Team</h4>
              <p className="text-xs text-muted-foreground mt-1">
                7+ years in luxury hospitality & event management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;