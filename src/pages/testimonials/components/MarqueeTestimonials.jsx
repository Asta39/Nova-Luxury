import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

// --- GENERATED TESTIMONIAL DATA ---
const testimonials = [
  // Row 1
  [
    { name: "Jasmine & Leo", event: "Destination Wedding", review: "An absolutely magical experience from start to finish. Nova's team handled everything with such grace and precision. Our guests were blown away." },
    { name: "KenTech Solutions", event: "Annual Tech Summit", review: "The most seamless and professional corporate event we've ever hosted. The branding integration was flawless and the logistics were impeccable." },
    { name: "The Mwangi Family", event: "50th Anniversary Gala", review: "They turned our parents' golden anniversary into a storybook evening. The attention to detail and personal touches were extraordinary." }
  ],
  // Row 2
  [
    { name: "Aarav Sharma", event: "Product Launch", review: "Exceptional execution. The team captured our brand's essence perfectly, creating an immersive and high-impact launch event." },
    { name: "Chloe Williams", event: "Charity Ball", review: "Their creativity and dedication are unmatched. They helped us exceed our fundraising goals while hosting a truly elegant and memorable night." },
    { name: "Baraka Foundation", event: "Fundraising Gala", review: "Professional, creative, and incredibly organized. Nova Luxury Events made our annual gala a resounding success." }
  ],
  // Row 3
  [
    { name: "Fatima Al-Jamil", event: "Cultural Celebration", review: "They honored our traditions with elegance and respect, blending them beautifully with modern luxury. It was a perfect celebration of our heritage." },
    { name: "David Chen", event: "Private Investor Dinner", review: "A discreet, sophisticated, and flawlessly executed event. The ambiance was perfect for high-level networking. I highly recommend their services." },
    { name: "Isabella Rossi", event: "Luxury Brand Showcase", review: "Their understanding of luxury and brand experience is second to none. The event was a true reflection of our brand's prestige." }
  ],
  // Row 4
  [
    { name: "The Omondi Twins", event: "21st Birthday Bash", review: "The most epic birthday party ever! Every detail was cool, stylish, and so much fun. Our friends are still talking about it." },
    { name: "Nairobi Art Collective", event: "Gallery Opening", review: "They created a chic and sophisticated atmosphere that perfectly complemented the art. A truly professional and artistic approach to event planning." },
    { name: "Global Exports Inc.", event: "Annual Awards Ceremony", review: "Our awards ceremony was elevated to a new level of prestige. The production quality and seamless flow were world-class." }
  ],
  // Row 5
  [
    { name: "Dr. Evelyn Kariuki", event: "Medical Conference", review: "From attendee registration to the final keynote, the entire conference was managed with incredible efficiency and professionalism. A flawless event." },
    { name: "Liam & Aisha", event: "Intimate Elopement", review: "They made our elopement feel as grand and special as any large wedding. The attention to romantic detail was simply breathtaking." },
    { name: "Safari Adventures Ltd.", event: "Corporate Retreat", review: "Our team retreat in the Mara was an unforgettable experience, thanks to Nova. They balanced business with luxury adventure perfectly." }
  ]
];

const TestimonialCard = ({ name, event, review }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[450px] bg-card border border-border rounded-2xl p-6 shadow-lg mx-4">
    <div className="flex items-center justify-between mb-3">
      <div>
        <h4 className="font-bold text-primary text-lg">{name}</h4>
        <p className="text-secondary text-sm font-medium">{event}</p>
      </div>
      <div className="flex items-center text-xs text-muted-foreground bg-accent px-2 py-1 rounded-full">
        <CheckCircle size={14} className="text-green-600 mr-1.5" />
        Verified Client
      </div>
    </div>
    <div className="flex space-x-0.5 text-secondary mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-muted-foreground leading-relaxed">"{review}"</p>
  </div>
);

const MarqueeRow = ({ testimonials, duration = "60s", reverse = false }) => (
  <div className="marquee-row-container flex items-center">
    <div 
      className={`marquee-track ${reverse ? 'reverse' : ''}`}
      style={{ '--duration': duration }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);

const MarqueeTestimonials = () => {
  return (
    <section className="bg-background py-20 md:py-28 overflow-hidden relative">
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
          Client
          <span className="text-secondary block">Success Stories</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hear directly from the clients who trusted us to bring their extraordinary events to life.
        </p>
      </div>

      <div className="relative space-y-6">
        {/* Fade Effects */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Rows */}
        <MarqueeRow testimonials={testimonials[0]} duration="70s" />
        <MarqueeRow testimonials={testimonials[1]} duration="90s" reverse={true} />
        <MarqueeRow testimonials={testimonials[2]} duration="60s" />
        <MarqueeRow testimonials={testimonials[3]} duration="100s" reverse={true} />
        <MarqueeRow testimonials={testimonials[4]} duration="80s" />
      </div>

      {/* Add some global styles for the animation */}
      <style jsx global>{`
        .marquee-row-container {
          overflow: hidden;
          width: 100%;
        }
        .marquee-track {
          display: flex;
          animation: marquee var(--duration) linear infinite;
          will-change: transform;
        }
        .marquee-track.reverse {
          animation-name: marquee-reverse;
        }
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default MarqueeTestimonials;