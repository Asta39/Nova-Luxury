import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

// --- GENERATED TESTIMONIAL DATA ---
const testimonials = [
  // Row 1
  [
    { name: "Emmanuel & Mwende", event: "Destination Wedding", review: " Hello Daisy & Ian. Hope all is well. We'd like to express our gratitude for the excellent job, really appreciate your service delivery as well as the thoughtful gift which we'll hang in our walls forever. May God bless you." },
    { name: "IUCN East Africa", event: "African Conservation Forum 2024", review: "Good evening team Nova - Thank you so much for the great work to make our event a success. Your hardwork, professionalism and friendly teamwork enabled us to shine all week. Tumeshukuru sana." },
    { name: "Wildlife Conservation Network", event: "Pan-African Conservation Gala", review: "The team created an impactful environment for our crucial discussions on African wildlife preservation. Their production excellence helped amplify our conservation message perfectly." }
  ],
  // Row 2
  [
    { name: "Mac & Mwende", event: "Wedding", review: "Dear Ian & Daisy, Hope you're well, we'd like to extend our heartfelt gratitude for the exceptional work you did in planning our traditional wedding. Every detail was thoughtfully executed, and your professionalism and dedication were evident from start to finsih. You understood our vision and went above and beyond to ensure that our day was nothing short of perfect. We will cherish these memories forever and we are so greatful to have had you by our side. Thank you." },
    { name: "Chloe Williams", event: "Charity Ball", review: "Nova Luxury's meticulous planning ensured our charity event ran flawlessly. Their coordination skills helped us exceed our fundraising goals." },
    { name: "Baraka Foundation", event: "Fundraising Gala", review: "The team's innovative production approach and problem-solving abilities made our gala a resounding success. Truly professional execution." }
  ],
  // Row 3
  [
    { name: "Alleytia", event: "Wedding", review: "Dear Daisy & Ian, Thank you again for your attention to detail, support through the day and for being part of such a beautiful day for us both. We really enjoyed working with you and appreciate your insights and expertise." },
    { name: "David Chen", event: "Private Investor Dinner", review: "Nova Luxury's elegant design and impeccable coordination created the perfect atmosphere for our high-level networking event." },
    { name: "Isabella Rossi", event: "Luxury Brand Showcase", review: "The Nova team's technical expertise and production excellence perfectly captured our brand's prestige. A truly world-class experience." }
  ],
  // Row 4
  [
    { name: "The Omondi Twins", event: "21st Birthday Bash", review: "Darren and Ian worked together brilliantly to create the most amazing birthday celebration. Their energy and creativity made it unforgettable." },
    { name: "Nairobi Art Collective", event: "Gallery Opening", review: "Daisy's artistic vision perfectly complemented our exhibition. Her design choices enhanced the entire gallery experience." },
    { name: "Global Exports Inc.", event: "Annual Awards Ceremony", review: "Nova Luxury's production and technical expertise created a prestigious atmosphere that perfectly captured the significance of our awards ceremony." }
  ],
  // Row 5
  [
    { name: "Dr. Evelyn Kariuki", event: "Medical Conference", review: "Nova Luxury's organizational skills ensured our conference ran seamlessly. Their attention to detail made the complex event management look effortless." },
    { name: "Liam & Aisha", event: "Intimate Elopement", review: "Ian and Daisy made our intimate celebration feel incredibly special. Their personal touches and attention to detail were simply perfect." },
    { name: "Safari Adventures Ltd.", event: "Corporate Retreat", review: "The entire team, especially Darren and Frank, created an unforgettable experience that perfectly balanced luxury and adventure." }
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