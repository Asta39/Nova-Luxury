import React from 'react';
// Icon component is still needed for the quote at the bottom
import Icon from '../../../components/AppIcon';

const CompanyValues = () => {
  // Define the icon color for consistency
  const iconSecondaryColor = "#b8860b";

  // --- MODIFIED DATA STRUCTURE FOR ANIMATED ICONS ---
  const values = [
    {
      // Replaced icon: "Crown"
      lordIcon: {
        src: "https://cdn.lordicon.com/apmrcxtj.json",
        trigger: "loop",
        state: "loop-osscilate",
      },
      title: "Luxury Excellence",
      description: "We maintain the highest standards in every aspect of event planning, from initial consultation to final execution, ensuring an unparalleled luxury experience."
    },
    {
      // Replaced icon: "Heart"
      lordIcon: {
        src: "https://cdn.lordicon.com/nvsfzbop.json",
        trigger: "loop",
        state: "loop-osscilate",
      },
      title: "Cultural Integration",
      description: "We celebrate Kenya's rich cultural diversity by seamlessly blending traditional customs with modern luxury, creating authentic and meaningful celebrations."
    },
    {
      // Replaced icon: "Users"
      lordIcon: {
        src: "https://cdn.lordicon.com/vqhlecvy.json",
        trigger: "loop",
        state: "loop-osscilate",
      },
      title: "Client Satisfaction",
      description: "Our clients' happiness is our ultimate measure of success. We go above and beyond to exceed expectations and create lasting memories."
    },
    {
      // Replaced icon: "Shield"
      lordIcon: {
        src: "https://cdn.lordicon.com/sjoccsdj.json",
        trigger: "loop",
        state: "loop-osscilate",
      },
      title: "Trust & Reliability",
      description: "We build lasting relationships through transparency, reliability, and consistent delivery of exceptional results that our clients can depend on."
    },
    {
      // Replaced icon: "Lightbulb"
      lordIcon: {
        src: "https://cdn.lordicon.com/uyvoksqr.json",
        trigger: "loop",
        state: "loop-cycle",
      },
      title: "Creative Innovation",
      description: "We continuously push creative boundaries, incorporating the latest trends and technologies to deliver fresh, innovative event experiences."
    },
    {
      // Replaced icon: "Globe"
      lordIcon: {
        src: "https://cdn.lordicon.com/rpviwvwn.json",
        trigger: "loop",
        state: "loop-rotate",
      },
      title: "Global Standards",
      description: "We apply international best practices while maintaining deep respect for local traditions, delivering world-class events with authentic Kenyan hospitality."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These fundamental principles guide every decision we make and every event we create, 
            ensuring consistent excellence in all our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div 
              key={index}
              className="group bg-surface p-8 rounded-3xl luxury-shadow-card hover:luxury-shadow-modal luxury-transition border border-border hover:border-secondary/20"
            >
              {/* --- ICON REPLACED HERE --- */}
              <div className="w-16 h-16 bg-secondary/10 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 luxury-transition">
                <lord-icon
                  src={value.lordIcon.src}
                  trigger={value.lordIcon.trigger}
                  state={value.lordIcon.state}
                  colors={`primary:#121331,secondary:${iconSecondaryColor}`}
                  style={{ width: '62px', height: '62px' }}
                >
                </lord-icon>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary group-hover:text-secondary luxury-transition">
                  {value?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value?.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="mt-6 w-12 h-1 bg-accent group-hover:bg-secondary luxury-transition rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Values Statement (This section remains unchanged) */}
        <div className="mt-16 text-center">
          <div className="bg-accent p-8 lg:p-12 rounded-3xl border border-border max-w-4xl mx-auto">
            <Icon name="Quote" size={32} className="text-secondary mx-auto mb-6" />
            <blockquote className="text-lg lg:text-xl text-primary font-medium leading-relaxed mb-6">
              "At Nova Luxury Events, we believe that every celebration is a story waiting to be told. 
              Our values ensure that each story we help create is authentic, beautiful, and unforgettable."
            </blockquote>
            <cite className="text-secondary font-semibold">
              - Ian Gichora, Managing Partner
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;