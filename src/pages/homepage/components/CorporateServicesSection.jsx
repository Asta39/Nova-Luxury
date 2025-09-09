import React from 'react';
import { Briefcase, Plane, BedDouble, ShieldCheck, Wind, Sailboat, Music } from 'lucide-react';

const services = [
  {
    icon: <Plane size={32} className="text-secondary" />,
    title: 'Airport Arrival & Concierge',
    description: 'Seamless airport pickup and welcome services for your international guests, ensuring a smooth and luxurious start to their journey in Kenya.'
  },
  {
    icon: <BedDouble size={32} className="text-secondary" />,
    title: 'Luxury Accommodation',
    description: 'We arrange premium accommodation at top-tier hotels and private residences that align with your corporate standards and preferences.'
  },
  {
    icon: <ShieldCheck size={32} className="text-secondary" />,
    title: 'Comprehensive Security',
    description: 'Your team\'s safety is our priority. We provide professional and discreet security services throughout their stay and during the event.'
  },
  {
    icon: <Briefcase size={32} className="text-secondary" />,
    title: 'Main Event Planning & Coordination',
    description: 'From venue selection and decor to full-scale production, we manage every detail of your corporate event to ensure a flawless execution.'
  },
  {
    icon: <Wind size={32} className="text-secondary" />,
    title: 'Post-Event Excursions: Safari',
    description: 'Offer your guests an unforgettable post-event experience with a guided safari trip to the world-renowned Maasai Mara.'
  },
  {
    icon: <Sailboat size={32} className="text-secondary" />,
    title: 'Post-Event Excursions: Coastal Retreat',
    description: 'Arrange for a relaxing getaway to Kenya\'s stunning beaches, where your team can unwind and network in a serene environment.'
  },
  {
    icon: <Music size={32} className="text-secondary" />,
    title: 'Post-Event Excursions: Vibrant Nightlife',
    description: 'For those looking to experience local culture, we can organize curated evenings at Nairobi\'s most exclusive clubs and lounges.'
  }
];

const CorporateServicesSection = () => {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            End-to-End Corporate Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From arrival to departure, we provide a seamless, all-inclusive experience for our international corporate clients.
          </p>
        </div>

        {/* Services Roadmap Container */}
        <div className="relative">
          {/* Vertical line: On the left for mobile, centered for desktop */}
          <div className="absolute top-0 h-full w-0.5 bg-border left-6 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="relative flex items-center md:grid md:grid-cols-2 md:gap-x-12">
                
                {/* Icon Circle */}
                <div className="absolute left-6 -translate-x-1/2 bg-white border-2 border-border rounded-full p-3 z-10 md:left-1/2">
                  {service.icon}
                </div>

                {/* Content Card */}
                {/* This div handles positioning: it places the card on the correct side for desktop */}
                <div className={`
                  w-full pl-16 md:pl-0
                  ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}
                `}>
                  <div className="p-6 bg-card rounded-lg shadow-md border border-border/50">
                    <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-base text-muted-foreground">{service.description}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateServicesSection;