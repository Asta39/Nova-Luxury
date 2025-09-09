import React from 'react';
import { Link } from 'react-router-dom';
// Icon component is still needed for the checkmarks in the feature list
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesOverview = () => {
  // Define the icon color for consistency
  const iconSecondaryColor = "#b8860b";

  // --- MODIFIED DATA STRUCTURE FOR ANIMATED ICONS ---
  const services = [
    {
      id: 1,
      // Replaced icon: "Building2"
      lordIcon: {
        src: "https://cdn.lordicon.com/gitajdzc.json",
        trigger: "loop",
        state: "loop-osscilation",
      },
      title: "Corporate Events",
      description: "Professional conferences, product launches, AGMs, and executive dinners that elevate your brand presence.",
      features: ["Conference Planning", "Product Launches", "Team Building", "Awards Ceremonies"],
      link: "/individual-service-pages?service=corporate"
    },
    {
      id: 2,
      // Replaced icon: "Heart"
      lordIcon: {
        src: "https://cdn.lordicon.com/nvsfzbop.json",
        trigger: "loop",
        state: "loop-osscilation",
      },
      title: "Wedding Celebrations",
      description: "Luxury wedding planning from traditional ceremonies to destination weddings with impeccable attention to detail.",
      features: ["Traditional Ceremonies", "Luxury Receptions", "Destination Weddings", "Bridal Events"],
      link: "/individual-service-pages?service=wedding"
    },
    {
      id: 3,
      // Replaced icon: "Gift"
      lordIcon: {
        src: "https://cdn.lordicon.com/kezeezyg.json",
        trigger: "loop",
        state: "loop-osscilation",
      },
      title: "Birthday Celebrations",
      description: "Memorable birthday parties for all ages, from intimate gatherings to grand milestone celebrations.",
      features: ["Milestone Parties", "Children's Themes", "Surprise Coordination", "Custom Packages"],
      link: "/individual-service-pages?service=birthday"
    },
    {
      id: 4,
      // Replaced icon: "Crown"
      lordIcon: {
        src: "https://cdn.lordicon.com/apmrcxtj.json",
        trigger: "loop",
        state: "loop-osscilation",
      },
      title: "Private Luxury Events",
      description: "Exclusive VIP gatherings, cultural ceremonies, and intimate dinners crafted for discerning clients.",
      features: ["VIP Gatherings", "Cultural Ceremonies", "Holiday Parties", "Intimate Dinners"],
      link: "/individual-service-pages?service=private"
    },
    {
      id: 5,
      // Replaced icon: "Trophy"
      lordIcon: {
        src: "https://cdn.lordicon.com/vttzorhw.json",
        trigger: "loop",
        state: "loop-osscilation",
      },
      title: "Milestone Celebrations",
      description: "Honor life's achievements with elegant graduations, retirements, and anniversary celebrations.",
      features: ["Graduations", "Retirements", "Anniversaries", "Achievement Awards"],
      link: "/individual-service-pages?service=milestone"
    },
    {
      id: 6,
      // Replaced icon: "Users"
      lordIcon: {
        src: "https://cdn.lordicon.com/vqhlecvy.json",
        trigger: "loop",
        state: "loop-osscilation",
      },
      title: "Family & Social Events",
      description: "Warm family gatherings, baby showers, and social celebrations that bring loved ones together.",
      features: ["Baby Showers", "Family Reunions", "Engagements", "Housewarmings"],
      link: "/individual-service-pages?service=family"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From corporate excellence to personal celebrations, we specialize in creating extraordinary events that exceed expectations across all of life's important moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="bg-card p-8 rounded-2xl luxury-shadow-card hover:luxury-shadow-modal luxury-transition group"
            >
              {/* --- ICON REPLACED HERE --- */}
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 luxury-transition">
                <lord-icon
                  src={service.lordIcon.src}
                  trigger={service.lordIcon.trigger}
                  state={service.lordIcon.state}
                  delay={service.lordIcon.delay}
                  colors={`primary:#121331,secondary:${iconSecondaryColor}`}
                  style={{ width: '60px', height: '60px' }}
                >
                </lord-icon>
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {service?.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service?.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-muted-foreground">
                    <Icon 
                      name="Check" 
                      size={16} 
                      className="text-secondary mr-2 flex-shrink-0" 
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                asChild
                className="group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary"
              >
                <Link to={service?.link}>Learn More</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            iconName="Eye"
            iconPosition="left"
            asChild
          >
            <Link to="/services-overview">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;