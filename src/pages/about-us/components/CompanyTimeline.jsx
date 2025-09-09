import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2020",
      title: "Nova Luxury Events Founded",
      description: "Sarah Wanjiku establishes Nova with a vision to blend international luxury standards with Kenyan cultural authenticity.",
      icon: "Rocket",
      highlight: true
    },
    {
      year: "2021",
      title: "First Major Corporate Contract",
      description: "Secured partnership with leading multinational corporation for annual events, establishing credibility in corporate market.",
      icon: "Building"
    },
    {
      year: "2021",
      title: "Pandemic Adaptation & Growth",
      description: "Successfully pivoted to virtual and hybrid events, maintaining client relationships and expanding digital capabilities.",
      icon: "Monitor"
    },
    {
      year: "2021",
      title: "Cultural Events Specialization",
      description: "Launched dedicated cultural events division, becoming Kenya's premier provider of authentic traditional ceremonies.",
      icon: "Users"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won 'Best Luxury Event Planner' at Kenya Events Industry Awards and achieved ISO certification for quality management.",
      icon: "Award"
    },
    {
      year: "2023",
      title: "International Expansion",
      description: "Established partnerships across East Africa and began serving international destination events in Kenya.",
      icon: "Globe"
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description: "Launched eco-luxury event services, becoming the first certified sustainable luxury event planner in Kenya.",
      icon: "Leaf"
    },
    {
      year: "2025",
      title: "Technology Integration",
      description: "Implementing AI-powered event planning tools and virtual reality venue previews for enhanced client experience.",
      icon: "Zap",
      future: true
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Journey
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a small boutique service to Kenya's leading luxury event planning company, 
            discover the milestones that have shaped our growth and success.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div 
                key={milestone?.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:flex-row`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  milestone?.highlight 
                    ? 'bg-secondary text-secondary-foreground' 
                    : milestone?.future
                    ? 'bg-accent border-2 border-secondary text-secondary' :'bg-background border-2 border-border text-muted-foreground'
                }`}>
                  <Icon name={milestone?.icon} size={16} />
                </div>

                {/* Content Card - THE FIX IS HERE */}
                {/* The 'w-full' class was removed to prevent overflow on mobile */}
                <div className={`lg:w-5/12 ml-16 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className={`p-6 rounded-lg luxury-shadow-card border ${
                    milestone?.highlight
                      ? 'bg-secondary/5 border-secondary/20'
                      : milestone?.future
                      ? 'bg-accent border-border' :'bg-surface border-border'
                  }`}>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                      milestone?.highlight
                        ? 'bg-secondary text-secondary-foreground'
                        : milestone?.future
                        ? 'bg-secondary/10 text-secondary' :'bg-accent text-primary'
                    }`}>
                      {milestone?.year}
                      {milestone?.future && (
                        <Icon name="Clock" size={12} className="ml-1" />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`text-lg font-semibold mb-3 ${
                      milestone?.highlight ? 'text-secondary' : 'text-primary'
                    }`}>
                      {milestone?.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center">
          <div className="bg-accent p-8 lg:p-12 rounded-lg border border-border max-w-4xl mx-auto">
            <Icon name="Telescope" size={32} className="text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Looking Ahead</h3>
            <p className="text-muted-foreground leading-relaxed">
              As we continue to grow, our commitment remains unchanged: to create extraordinary luxury experiences 
              that celebrate life's most precious moments while honoring Kenya's rich cultural heritage. 
              The future holds exciting possibilities as we embrace new technologies and expand our reach 
              across East Africa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;