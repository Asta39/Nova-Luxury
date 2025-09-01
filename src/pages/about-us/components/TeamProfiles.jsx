import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeamProfiles = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Ian Gichora",
      role: "Founder & CEO",
      image: "https://images.unplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      shortBio: "15+ years in luxury hospitality & event management",
      fullBio: `Ian brings over 15 years of international experience in luxury hospitality and event management. Having worked with prestigious hotels in London and Dubai before returning to Kenya, he combines global best practices with deep understanding of local culture. Ian holds a Master's in Hospitality Management from Les Roches and is certified by the International Association of Event Planners.`,
      specialties: ["Luxury Weddings", "Corporate Events", "Cultural Ceremonies"],
      contact: "ian@novaluxuryevents.com"
    },
    {
      id: 2,
      name: "Daisy",
      role: "Creative Director",
      image: "https://images.unplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      shortBio: "Award-winning designer with 12 years experience",
      fullBio: `Daisy is our visionary Creative Director, responsible for transforming client dreams into stunning visual realities. With a background in interior design and event styling, she has won multiple awards for her innovative approach to event aesthetics. Daisy specializes in creating immersive environments that tell compelling stories through design.`,
      specialties: ["Event Design", "Floral Arrangements", "Venue Styling"],
      contact: "daisy@novaluxuryevents.com"
    },
    {
      id: 3,
      name: "Grace Akinyi",
      role: "Operations Manager",
      image: "https://images.unplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      shortBio: "Expert in logistics and vendor coordination",
      fullBio: `Grace ensures every event runs seamlessly from conception to completion. With her exceptional organizational skills and extensive network of premium vendors across Kenya, she manages complex logistics with precision. Grace's attention to detail and proactive problem-solving approach has earned her recognition as one of Kenya's top event operations specialists.`,
      specialties: ["Event Logistics", "Vendor Management", "Timeline Coordination"],
      contact: "grace@novaluxuryevents.com"
    },
    /*
    {
      id: 4,
      name: "David Kiprotich",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      shortBio: "Dedicated to exceptional client experiences",
      fullBio: `David is the heart of our client relationships, ensuring every interaction exceeds expectations. With his background in luxury hospitality and natural ability to understand client needs, he guides families and corporations through their event journey with care and professionalism. David speaks five languages and specializes in international client services.`,
      specialties: ["Client Consultation", "International Relations", "Cultural Integration"],
      contact: "david@novaluxuryevents.com"
    },
    {
      id: 5,
      name: "Amina Hassan",
      role: "Cultural Events Specialist",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop&crop=face",
      shortBio: "Expert in traditional and cultural celebrations",
      fullBio: `Amina brings deep knowledge of Kenya's diverse cultural traditions to our team. With a degree in Cultural Studies and years of experience organizing traditional ceremonies, she ensures authentic representation while maintaining luxury standards. Amina's expertise spans across various Kenyan communities and Islamic traditions.`,
      specialties: ["Traditional Ceremonies", "Cultural Consulting", "Religious Events"],
      contact: "amina@novaluxuryevents.com"
    },
    {
      id: 6,
      name: "Michael Ochieng",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      shortBio: "AV production and technical event specialist",
      fullBio: `Michael leads our technical team, ensuring flawless audio-visual experiences at every event. With certifications in professional AV systems and lighting design, he transforms venues with cutting-edge technology. Michael's expertise includes live streaming, interactive displays, and complex staging requirements for large-scale corporate events.`,
      specialties: ["AV Production", "Lighting Design", "Live Streaming"],
      contact: "michael@novaluxuryevents.com"
    }*/
  ];

  const toggleExpanded = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our passionate team of event professionals brings together decades of experience, 
            cultural expertise, and creative vision to make your celebrations extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="bg-background rounded-3xl luxury-shadow-card overflow-hidden">
              {/* Member Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <Image
                  src={member?.image}
                  alt={`${member?.name} - ${member?.role}`}
                  className="w-full h-64 object-cover luxury-transition hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-secondary font-medium text-sm mb-2">
                    {member?.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member?.shortBio}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member?.specialties?.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent text-xs font-medium text-primary rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Bio */}
                {expandedMember === member?.id && (
                  <div className="mb-4 p-4 bg-accent rounded-3xl border border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {member?.fullBio}
                    </p>
                    <div className="flex items-center text-sm text-secondary">
                      <Icon name="Mail" size={14} className="mr-2" />
                      <a 
                        href={`mailto:${member?.contact}`}
                        className="hover:text-primary luxury-transition"
                      >
                        {member?.contact}
                      </a>
                    </div>
                  </div>
                )}

                {/* Toggle Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpanded(member?.id)}
                  iconName={expandedMember === member?.id ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                  className="w-full justify-center"
                >
                  {expandedMember === member?.id ? "Show Less" : "Learn More"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;