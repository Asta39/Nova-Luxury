import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalCertifications = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management System",
      description: "International standard for quality management systems, ensuring consistent service delivery.",
      icon: "Shield",
      year: "2022",
      authority: "Kenya Bureau of Standards"
    },
    {
      title: "CSEP Certification",
      subtitle: "Certified Special Events Professional",
      description: "International certification recognizing expertise in special event planning and management.",
      icon: "Award",
      year: "2021",
      authority: "International Special Events Society"
    },
    {
      title: "Green Event Certification",
      subtitle: "Sustainable Event Planning",
      description: "First luxury event planner in Kenya certified for sustainable and eco-friendly event practices.",
      icon: "Leaf",
      year: "2024",
      authority: "Green Events Council"
    },
    {
      title: "MICE Specialist",
      subtitle: "Meetings, Incentives, Conferences & Exhibitions",
      description: "Specialized certification for corporate event planning and business event management.",
      icon: "Building",
      year: "2020",
      authority: "Kenya Association of Event Planners"
    }
  ];

  const memberships = [
    {
      organization: "International Special Events Society (ISES)",
      role: "Professional Member",
      description: "Global network of event professionals committed to advancing the industry.",
      logo: "Globe"
    },
    {
      organization: "Kenya Association of Event Planners (KAEP)",
      role: "Board Member",
      description: "Leading professional body for event planners in Kenya.",
      logo: "Users"
    },
    {
      organization: "Meeting Professionals International (MPI)",
      role: "Corporate Member",
      description: "World\'s largest meeting and event industry association.",
      logo: "Building"
    },
    {
      organization: "Kenya Association of Wedding Planners",
      role: "Founding Member",
      description: "Professional association dedicated to wedding industry excellence.",
      logo: "Heart"
    },
    {
      organization: "Sustainable Events Alliance",
      role: "Regional Ambassador",
      description: "Promoting sustainable practices in the events industry.",
      logo: "Leaf"
    },
    {
      organization: "Kenya Tourism Board",
      role: "Industry Partner",
      description: "Official partnership for promoting Kenya as a destination for events.",
      logo: "MapPin"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Professional Certifications & Memberships
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications and active participation 
            in professional organizations that set the highest standards for event planning.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Industry Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications?.map((cert, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg luxury-shadow-card border border-border hover:luxury-shadow-modal luxury-transition group"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 luxury-transition">
                    <Icon name={cert?.icon} size={24} className="text-secondary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-primary">{cert?.title}</h4>
                      <span className="text-xs bg-accent px-2 py-1 rounded-full text-secondary font-medium">
                        {cert?.year}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-secondary mb-2">
                      {cert?.subtitle}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {cert?.description}
                    </p>
                    
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Icon name="CheckCircle" size={14} className="text-secondary mr-1" />
                      Certified by {cert?.authority}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">
            Professional Memberships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships?.map((membership, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg luxury-shadow-card border border-border hover:luxury-shadow-modal luxury-transition text-center group"
              >
                {/* Logo */}
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 luxury-transition">
                  <Icon name={membership?.logo} size={28} className="text-secondary" />
                </div>

                {/* Organization Name */}
                <h4 className="font-semibold text-primary mb-2 text-sm leading-tight">
                  {membership?.organization}
                </h4>

                {/* Role */}
                <p className="text-xs font-medium text-secondary mb-3">
                  {membership?.role}
                </p>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {membership?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="bg-accent p-8 lg:p-12 rounded-lg border border-border max-w-4xl mx-auto">
            <Icon name="ShieldCheck" size={32} className="text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Your Trust, Our Commitment
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These certifications and memberships represent more than credentials – they demonstrate our unwavering 
              commitment to maintaining the highest professional standards, staying current with industry best practices, 
              and continuously improving our services for our valued clients.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-background px-4 py-2 rounded-full">
                <Icon name="Check" size={16} className="text-secondary" />
                <span className="text-primary font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-background px-4 py-2 rounded-full">
                <Icon name="Check" size={16} className="text-secondary" />
                <span className="text-primary font-medium">Licensed & Bonded</span>
              </div>
              <div className="flex items-center space-x-2 bg-background px-4 py-2 rounded-full">
                <Icon name="Check" size={16} className="text-secondary" />
                <span className="text-primary font-medium">Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCertifications;