import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CulturalIntegration = () => {
  const culturalServices = [
    {
      title: "Traditional Kenyan Weddings",
      description: "Authentic ceremonies honoring diverse tribal customs including Kikuyu, Luo, Luhya, Kalenjin, and Maasai traditions.",
      image: "https://images.unslash.com/photo-1583939003579-730e3918a45a?w=400&h=300&fit=crop",
      features: ["Traditional attire coordination", "Cultural music & dance", "Ceremonial rituals", "Elder blessings"]
    },
    {
      title: "Corporate Cultural Events",
      description: "Professional events that celebrate Kenya's heritage while maintaining international business standards.",
      image: "https://images.unslash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      features: ["Cultural performances", "Traditional cuisine", "Heritage showcases", "Unity celebrations"]
    },
    {
      title: "Religious Celebrations",
      description: "Respectful coordination of Christian, Islamic, Hindu, and traditional spiritual ceremonies.",
      image: "https://images.unplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      features: ["Multi-faith expertise", "Sacred space setup", "Religious protocols", "Community integration"]
    },
    {
      title: "International Fusion",
      description: "Seamlessly blending Kenyan traditions with international customs for expatriate and multicultural celebrations.",
      image: "https://images.unslash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      features: ["Cross-cultural ceremonies", "Language integration", "Fusion cuisine", "Global traditions"]
    }
  ];

  const culturalPartners = [
    { name: "Kenya Cultural Centre", role: "Traditional Arts Partner" },
    { name: "Bomas of Kenya", role: "Cultural Performance Venue" },
    { name: "National Museums of Kenya", role: "Heritage Consultation" },
    { name: "Kenya Association of Tour Operators", role: "Cultural Tourism" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Cultural Integration Expertise
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We pride ourselves on being Kenya's leading luxury event planner with deep cultural expertise. Our team understands the nuances of Kenya's diverse traditions and seamlessly integrates them 
            with modern luxury standards.
          </p>
        </div>

        {/* Cultural Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {culturalServices?.map((service, index) => (
            <div 
              key={index}
              className="bg-surface rounded-lg luxury-shadow-card overflow-hidden border border-border hover:luxury-shadow-modal luxury-transition group"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="w-full h-full object-cover group-hover:scale-105 luxury-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg">
                    {service?.title}
                  </h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cultural Expertise Statement */}
        <div className="bg-accent p-8 lg:p-12 rounded-lg border border-border mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Icon name="Globe" size={48} className="text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">
                Bridging Cultures with Luxury
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our cultural integration approach goes beyond surface-level decoration. We work closely with 
                cultural consultants, traditional leaders, and community elders to ensure authentic representation 
                while maintaining the luxury standards our clients expect.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">42+</div>
                  <div className="text-muted-foreground">Kenyan Communities</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">15+</div>
                  <div className="text-muted-foreground">Languages Supported</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">200+</div>
                  <div className="text-muted-foreground">Cultural Events</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">100%</div>
                  <div className="text-muted-foreground">Authenticity Commitment</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/cultural-celebration.jpg"
                alt="Traditional Kenyan cultural celebration"
                className="w-full h-80 object-cover rounded-lg luxury-shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Cultural Partners */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-8">
            Trusted Cultural Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalPartners?.map((partner, index) => (
              <div 
                key={index}
                className="p-4 bg-surface rounded-lg luxury-shadow-card border border-border text-center"
              >
                <Icon name="Handshake" size={24} className="text-secondary mx-auto mb-3" />
                <h4 className="font-medium text-primary text-sm mb-1">
                  {partner?.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {partner?.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalIntegration;