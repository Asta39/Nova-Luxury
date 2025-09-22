import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import emailjs from '@emailjs/browser'; // 1. IMPORT EMAILJS

import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

import ServiceOverview from './components/ServiceOverview';
import ServiceOfferings from './components/ServiceOfferings';
import PlanningProcess from './components/PlanningProcess';
import ServicePortfolio from './components/ServicePortfolio';
import ServiceTestimonials from './components/ServiceTestimonials';
import ServiceFAQ from './components/ServiceFAQ';

const IndividualServicePages = () => {
  const [searchParams] = useSearchParams();
  const serviceType = searchParams?.get('service') || 'wedding';
  const [currentService, setCurrentService] = useState(null);

  // --- 2. STATES FOR FORM HANDLING ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    budget: '',
    howHeard: '', // Added field
    message: ''
  });

  // --- COMPLETE SERVICES DATA WITH CORRECTED URLS ---
  const servicesData = {
    wedding: {
      name: "Wedding Celebrations",
      category: "Luxury Weddings",
      heroImage: "/assets/images/wedding/hero.jpg",
      heroDescription: "Create the wedding of your dreams with our comprehensive luxury planning services. From intimate ceremonies to grand celebrations, we orchestrate every detail to perfection.",
      overviewTitle: "Luxury Wedding Planning Excellence",
      overviewDescription: `Transform your special day into an unforgettable celebration with Nova Luxury Events. Our expert wedding planners specialize in creating bespoke experiences that reflect your unique love story. From traditional Kenyan ceremonies to modern destination weddings, we handle every aspect with meticulous attention to detail.\n\nOur comprehensive approach ensures seamless coordination from engagement to honeymoon, allowing you to focus on what matters most - celebrating your love.`,
      keyFeatures: [
        "Complete wedding planning and coordination",
        "Venue sourcing and vendor management",
        "Custom décor and floral arrangements",
        "Traditional and modern ceremony integration",
        "Guest management and logistics",
        "Photography and videography coordination"
      ],
      overviewImages: [
        { src: "/assets/images/wedding/ceremony-1.jpg" },
        { src: "/assets/images/wedding/reception-1.jpg" },
        { src: "/assets/images/wedding/flowers-1.jpg" },
        { src: "/assets/images/wedding/cake-1.jpg" }
      ],
      offerings: [
        { title: "Traditional Ceremonies", description: "Honor your heritage with authentic traditional wedding ceremonies that celebrate your cultural roots while incorporating modern luxury elements.", image: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?w=600&h=400&fit=crop", features: ["Cultural ceremony coordination", "Traditional attire consultation", "Authentic décor elements", "Elder and family integration", "Custom ritual planning", "Heritage photography"] },
        { title: "Modern Celebrations", description: "Contemporary wedding experiences featuring cutting-edge design, innovative technology, and personalized touches that reflect your modern love story.", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop", features: ["Modern venue styling", "Technology integration", "Contemporary entertainment", "Innovative catering concepts", "Social media coordination", "Luxury transportation"] },
        { title: "Destination Weddings", description: "Exotic destination weddings in Kenya's most breathtaking locations, from coastal resorts to safari lodges, creating unforgettable experiences.", image: "https://images.pixabay.com/photo/2016/11/21/16/01/beach-1846040_1280.jpg?w=600&h=400&fit=crop", features: ["Location scouting", "Travel coordination", "Accommodation management", "Local vendor partnerships", "Guest experience planning", "Legal documentation support"] }
      ],
      planningProcess: [
        { icon: "Users", title: "Initial Consultation", description: "Meet with our wedding specialists to discuss your vision, preferences, and requirements for your perfect day." },
        { icon: "PenTool", title: "Concept Development", description: "Create a detailed wedding concept including theme, color palette, venue options, and timeline planning." },
        { icon: "Calendar", title: "Vendor Coordination", description: "Source and coordinate with premium vendors including venues, caterers, photographers, and entertainment."},
        { icon: "CheckCircle", title: "Flawless Execution", description: "Complete day-of coordination ensuring every detail is perfect while you enjoy your special moment.", duration: "Wedding day" },
        { icon: "Book", title: "The Exit Meeting", description: "A comprehensive review of your wedding celebration, gathering feedback and providing final documentation while sharing cherished memories of your special day." }
      ],
      portfolioImages: [
        { src: "/assets/images/wedding/wedding-1.jpg" },
        { src: "/assets/images/wedding/wedding-2.jpg" },
        { src: "/assets/images/wedding/wedding-3.jpg" },
        { src: "/assets/images/wedding/wedding-4.jpg" },
        { src: "/assets/images/wedding/wedding-5.jpg" },
        { src: "/assets/images/wedding/wedding-6.jpg" }
      ],
      testimonials: [
        { name: "Sarah & James Mwangi", event: "Traditional & Modern Wedding", date: "December 2024", rating: 5, content: "Nova Luxury Events made our dream wedding a reality. They seamlessly blended our traditional Kikuyu ceremony with a modern reception. Every detail was perfect, and our guests are still talking about it!", avatar: "https://randomuser.me/api/portraits/women/32.jpg" },
        { name: "Priya & David Ochieng", event: "Destination Wedding", date: "November 2024", rating: 5, content: "Planning a destination wedding in Diani was stress-free with Nova's team. They coordinated everything from guest accommodations to the beachside ceremony. Absolutely magical experience!", avatar: "https://randomuser.me/api/portraits/women/45.jpg" }
      ],
      faqs: [
        { question: "How far in advance should we book your wedding planning services?", answer: "We recommend booking our services 6-12 months in advance for optimal planning time. However, we can accommodate shorter timelines depending on availability and your specific requirements." },
        { question: "Do you handle both traditional and modern wedding ceremonies?", answer: "Yes, we specialize in both traditional Kenyan ceremonies and modern celebrations. Our team has extensive experience in cultural customs and can seamlessly blend traditional elements with contemporary touches." },
        { question: "What's included in your wedding planning services?", answer: "Our services include complete wedding planning, vendor management, timeline creation, and on-site coordination. We also offer décor design, guest management, and additional premium services based on your needs." }
      ]
    },
    corporate: {
      name: "Corporate Events",
      category: "Business Excellence", 
      heroImage: "/assets/images/corporate/hero.jpg",
      heroDescription: "Elevate your business presence with professionally executed corporate events that inspire, engage, and deliver results. From conferences to product launches, we create impactful experiences.",
      overviewTitle: "Professional Corporate Event Management",
      overviewDescription: `Transform your business objectives into memorable experiences with Nova Luxury Events' corporate division. We tell authentic, visually compelling stories for organizations. Stories rooted in our land, told for the world to feel. From documenting the groundbreaking work of institutions like the Wrti to capturing the human heartbeat behind corporate missions, we help brands and organizations connect deeply with their audiences. Every project is more than just visuals; it's about meaning, impact, and truth that resonates.`,
      keyFeatures: ["Strategic event planning and execution", "Brand-compliant design and messaging", "Professional AV and technology integration", "Stakeholder and VIP management", "Budget optimization and reporting", "Post-event analysis and ROI measurement"],
      overviewImages: [
        { src: "/assets/images/Nova-1.jpg", alt: "Corporate conference setup" },
        { src: "/assets/images/Nova 5.jpg", alt: "Business networking event" },
        { src: "/assets/images/Nova 3.jpg", alt: "Product launch presentation" },
        { src: "/assets/images/Nova 4.jpg", alt: "Corporate gala dinner" }
      ],
      offerings: [
        { title: "Conferences & Seminars", description: "Professional conferences and seminars that educate, inspire, and connect your audience with cutting-edge content and seamless execution.", image: "/assets/images/corporate/conference-2.jpg", features: ["Venue selection and setup", "Speaker coordination", "AV and technology management", "Registration and check-in", "Networking facilitation", "Content documentation"] },
        { title: "Product Launches", description: "Create buzz and excitement around your new products with strategically planned launch events that capture attention and drive market adoption.", image: "/assets/images/corporate/product-launch-2.jpg", features: ["Launch strategy development", "Media and PR coordination", "Interactive product displays", "Influencer management", "Live streaming capabilities", "Social media integration"] },
        { title: "Team Building & Retreats", description: "Strengthen team bonds and boost morale with engaging team building activities and corporate retreats in inspiring locations.", image: "/assets/images/corporate/team-building-1.jpg", features: ["Activity planning and coordination", "Venue sourcing and booking", "Team challenge design", "Accommodation management", "Catering and dining", "Transportation logistics"] }
      ],
      planningProcess: [
        { icon: "Target", title: "Objective Setting", description: "Define clear event objectives, target audience, and success metrics aligned with your business goals."},
        { icon: "Layout", title: "Strategic Planning", description: "Develop comprehensive event strategy including timeline, budget, venue selection, and vendor coordination."},
        { icon: "Palette", title: "Bespoke Event Design & Styling", description: "Create unique and personalized event designs with custom themes, color palettes, and styling elements that bring your vision to life." },
        { icon: "BarChart", title: "Execution & Analysis", description: "Flawless event delivery followed by comprehensive analysis and ROI reporting.", duration: "Event day + 1 week" },
        { icon: "Book", title: "The Exit Meeting", description: "A comprehensive review of your corporate event, analyzing success metrics, gathering stakeholder feedback and providing detailed reporting for future planning." }
      ],
      portfolioImages: [
        { src: "/assets/images/corp-3.jpg"  },
        { src: "/assets/images/corp-2.jpg" },
        { src: "/assets/images/corp-1.jpg" },
        { src: "/assets/images/corp-4.jpg"},
        { src: "/assets/images/corp-5.jpg" },
        { src: "/assets/images/Nova-1.jpg" },
        { src: "/assets/images/Nova 4.jpg" },
        { src: "/assets/images/Nova 5.jpg" },
        { src: "/assets/images/Nova 3.jpg" }
      ],
      testimonials: [
        { name: "Robert Kimani", event: "Annual Conference 2024", date: "January 2025", rating: 5, content: "Nova delivered an exceptional conference experience for our 500+ attendees. The seamless coordination and professional execution exceeded our expectations. Highly recommended for corporate events.", avatar: "https://randomuser.me/api/portraits/men/42.jpg" },
        { name: "Linda Wanjiku", event: "Product Launch", date: "December 2024", rating: 5, content: "Our product launch was a huge success thanks to Nova's strategic planning and flawless execution. The media coverage and attendee engagement were outstanding.", avatar: "https://randomuser.me/api/portraits/women/38.jpg" }
      ],
      faqs: [
        { question: "What types of corporate events do you specialize in?", answer: "We specialize in conferences, seminars, product launches, team building retreats, corporate galas, AGMs, awards ceremonies, and executive meetings. Our team has experience across all corporate event categories." },
        { question: "How do you ensure brand compliance in corporate events?", answer: "We work closely with your marketing team to understand brand guidelines and ensure all event elements - from signage to presentations - align with your corporate identity and messaging standards." },
        { question: "Can you handle multi-location corporate events?", answer: "Yes, we have experience coordinating simultaneous events across multiple locations, including live streaming connections and synchronized presentations for nationwide or international corporate events." },
        { question: "What AV and technology services do you provide?", answer: "We provide comprehensive AV solutions including sound systems, projection, lighting, live streaming, video conferencing, registration technology, and interactive displays tailored to your event needs." },
        { question: "Do you provide post-event analysis and reporting?", answer: "Yes, our services include detailed post-event analysis with attendance metrics, engagement data, feedback compilation, and ROI assessment to help you measure event success and plan future events." }
      ]
    },
    birthday: {
      name: "Birthday Celebrations",
      category: "Life Celebrations",
      heroImage: "/assets/images/birthday/hero.jpg",
      heroDescription: "Make every birthday unforgettable with personalized celebrations that capture the joy and uniqueness of your special day. From intimate gatherings to grand parties, we create magical moments.",
      overviewTitle: "Personalized Birthday Celebration Planning",
      overviewDescription: `Celebrate life's milestones with Nova Luxury Events' birthday planning expertise. Whether it's a child's themed party, a milestone adult celebration, or a surprise gathering, we create personalized experiences that reflect the birthday person's personality and preferences.\n\nOur creative team specializes in transforming venues into magical spaces that create lasting memories for guests of all ages, ensuring every birthday celebration is as unique as the person being celebrated.`,
      keyFeatures: ["Custom theme development and design", "Age-appropriate entertainment and activities", "Personalized décor and styling", "Recommend Catering for all dietary preferences", "Recommend Photography and videography coordination", "Surprise element planning and execution"],
      overviewImages: [
        { src: "/assets/images/birthday/birthday-1.jpg" },
        { src: "/assets/images/birthday/birthday-2.jpg" },
        { src: "/assets/images/birthday/birthday-3.jpg" },
        { src: "/assets/images/birthday/birthday-4.jpg" }
      ],
      offerings: [
        { title: "Children's Themed Parties", description: "Magical themed birthday parties for children featuring beloved characters, interactive entertainment, and age-appropriate activities that create wonder and excitement.", image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop", features: ["Mascots & Clown Perfomance", "Interactive games and activities", "Themed decorations and props", "Kid-friendly catering options", "Character appearence and entertainment", "Safety-focused planning"] },
        { title: "Milestone Celebrations", description: "Sophisticated celebrations for significant birthdays like 18th, 21st, 30th, 50th, and beyond, designed to honor life achievements and create memorable experiences.", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", features: ["Elegant venue styling", "Sophisticated entertainment", "Premium catering and bar service", "Memory lane displays", "Professional photography"] },
        { title: "Surprise Parties", description: "Expertly coordinated surprise celebrations that create unforgettable moments of joy and amazement for the birthday person and their loved ones.", image: "https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?w=600&h=400&fit=crop", features: ["Secret planning coordination", "Guest communication management", "Venue preparation timing", "Surprise reveal planning", "Backup contingency plans", "Moment capture coordination"] }
      ],
      planningProcess: [
        { icon: "Heart", title: "Personal Consultation", description: "Understand the birthday person's interests, preferences, and dream celebration vision to create a personalized plan."},
        { icon: "Palette", title: "Bespoke Event Design & Styling", description: "Create unique and personalized event designs with custom themes, color palettes, and styling elements that bring your vision to life."},
        { icon: "Users", title: "Coordination & Setup", description: "Manage all vendors, entertainment, and logistics while coordinating with family and friends for seamless execution."},
        { icon: "Gift", title: "Celebration Day & Analysis", description: "Execute the perfect birthday celebration with on-site coordination ensuring every moment is magical and memorable.", duration: "Event day" },

      ],
      portfolioImages: [
        { src: "/assets/images/birthday/birthday-1.jpg" },
        { src: "/assets/images/birthday/birthday-2.jpg" },
        { src: "/assets/images/birthday/birthday-3.jpg" },
        { src: "/assets/images/birthday/birthday-4.jpg" },
        { src: "/assets/images/birthday/birthday-5.jpg" },
        { src: "/assets/images/birthday/birthday-6.jpg" }
      ],
      testimonials: [
        { name: "Mary Njeri", event: "Daughter's 7th Birthday", date: "January 2025", rating: 5, content: "Nova created the most magical princess party for my daughter. The attention to detail was incredible, and seeing her face light up made it all worth it. The children had an amazing time!", avatar: "https://randomuser.me/api/portraits/women/29.jpg" },
        { name: "John Mutua", event: "50th Milestone Birthday", date: "December 2024", rating: 5, content: "My 50th birthday celebration was beyond my expectations. Nova perfectly captured my personality in the theme and created an elegant evening that my friends and family will never forget.", avatar: "https://randomuser.me/api/portraits/men/48.jpg" }
      ],
      faqs: [
        { question: "What age groups do you cater to for birthday celebrations?", answer: "We plan birthday celebrations for all ages, from toddler parties to milestone adult celebrations. Our team customizes themes, entertainment, and activities appropriate for each age group." },
        { question: "Can you organize surprise birthday parties?", answer: "Yes, we specialize in surprise party coordination. We work discreetly with family and friends to plan every detail while keeping the celebration a secret from the birthday person." },
        { question: "Do you provide themed decorations and entertainment?", answer: "Absolutely! We offer custom theme development with matching decorations, entertainment, and activities. From princess parties to sports themes to elegant adult celebrations, we bring any vision to life." },
        { question: "What's included in your birthday party services?", answer: "Our services include party planning, theme decoration, entertainment coordination, and catering setup. We also offer professional photography, premium entertainment, and complete surprise coordination based on your needs." },
        { question: "How far in advance should we book birthday party planning?", answer: "We recommend booking 4-6 weeks in advance for optimal planning time, especially for themed parties requiring custom decorations. However, we can accommodate shorter timelines based on availability." }
      ]
    },
    private: {
      name: "Private Luxury Events",
      category: "Exclusive Experiences",
      heroImage: "/assets/images/private/hero.jpg",
      heroDescription: "Create exclusive, intimate experiences with our private luxury event planning. From VIP gatherings to cultural ceremonies, we craft bespoke celebrations that reflect sophistication and elegance.",
      overviewTitle: "Exclusive Private Event Experiences",
      overviewDescription: `Elevate your private gatherings with Nova Luxury Events' exclusive planning services. We specialize in creating intimate, sophisticated experiences that cater to discerning clients seeking privacy, elegance, and personalized attention.\n\nOur private event expertise encompasses cultural ceremonies, religious celebrations, VIP gatherings, and exclusive parties, all executed with the highest level of discretion and luxury service standards.`,
      keyFeatures: ["Exclusive venue access and privacy", "Bespoke event design and styling", "Premium catering and beverage service", "Discreet and professional service staff", "Cultural and religious ceremony expertise", "VIP guest management and security"],
      overviewImages: [
        { src: "/assets/images/birthday/birthday-1.jpg" },
        { src: "/assets/images/birthday/birthday-2.jpg" },
        { src: "/assets/images/birthday/birthday-3.jpg" },
        { src: "/assets/images/birthday/birthday-4.jpg" }
      ],
      offerings: [
        { title: "VIP Exclusive Gatherings", description: "Ultra-exclusive gatherings for high-profile clients requiring privacy, security, and impeccable service in sophisticated settings.", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop", features: ["Private venue exclusivity", "Security and privacy management", "Luxury transportation coordination", "Premium hospitality service", "Confidentiality agreements", "Bespoke experience design"] },
        { title: "Cultural Ceremonies", description: "Authentic cultural and traditional ceremonies honoring heritage while incorporating modern luxury elements and professional coordination.", image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop", features: ["Cultural authenticity consultation", "Traditional element coordination", "Elder and family integration", "Ceremonial logistics management", "Heritage documentation", "Modern luxury integration"] },
        { title: "Religious Celebrations", description: "Sacred religious celebrations and ceremonies planned with deep respect for traditions while ensuring seamless logistics and meaningful experiences.", image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?w=600&h=400&fit=crop", features: ["Religious protocol adherence", "Sacred space preparation", "Clergy coordination", "Ritual element management", "Community integration", "Spiritual atmosphere creation"] }
      ],
      planningProcess: [
        { icon: "Shield", title: "Confidential Consultation", description: "Private consultation to understand your vision, requirements, and privacy needs with complete confidentiality assurance." },
        { icon: "Crown", title: "Bespoke Design", description: "Create exclusive event concepts tailored to your preferences, cultural requirements, and luxury standards."},
        { icon: "Lock", title: "Discreet Coordination", description: "Manage all aspects with utmost discretion, ensuring privacy while coordinating premium vendors and services." },
        { icon: "Star", title: "Flawless Execution", description: "Execute the milestone celebration with precision and care, creating an unforgettable experience that honors this special achievement.", duration: "Event day" },
        { icon: "Book", title: "The Exit Meeting", description: "A comprehensive review of your private party, gathering memories and feedback from guests while providing keepsake documentation of your exclusive event." }
      ],
      portfolioImages: [
        { src: "/assets/images/private-1.jpg" },
        { src: "/assets/images/private-2.jpg" },
        { src: "/assets/images/private-3.jpg" }, 
        { src: "/assets/images/private-4.jpg" },
        { src: "/assets/images/private-5.jpg" },
        { src: "/assets/images/private-6.jpg" }
      ],
      testimonials: [
        { name: "Ambassador Patricia Kones", event: "Private Cultural Ceremony", date: "December 2024", rating: 5, content: "Nova handled our traditional ceremony with exceptional cultural sensitivity and luxury service. The discretion and attention to detail were exactly what we needed for this important family celebration.", avatar: "https://randomuser.me/api/portraits/women/52.jpg" },
        { name: "Dr. Samuel Kiprotich", event: "VIP Religious Celebration", date: "November 2024", rating: 5, content: "The religious celebration organized by Nova was both spiritually meaningful and elegantly executed. They understood the sacred nature of our event while providing luxury service.", avatar: "https://randomuser.me/api/portraits/men/55.jpg" }
      ],
      faqs: [
        { question: "What types of private events do you specialize in?", answer: "We specialize in VIP gatherings, cultural ceremonies, religious celebrations, exclusive parties, intimate dinners, and private milestone celebrations. All events are planned with complete discretion and luxury service." },
        { question: "How do you ensure privacy and confidentiality?", answer: "We maintain strict confidentiality agreements with all staff and vendors, provide security coordination when needed, and ensure complete discretion throughout the planning and execution process." },
        { question: "Can you accommodate specific cultural or religious requirements?", answer: "Absolutely. Our team has extensive experience with various cultural and religious traditions. We work closely with community leaders and families to ensure authentic and respectful celebrations." },
        { question: "Do you provide exclusive venue access?", answer: "Yes, we can arrange exclusive venue access for complete privacy. We work with premium venues that can provide private spaces and dedicated service for your exclusive event." },
        { question: "What security measures can you coordinate?", answer: "We can coordinate professional security services, privacy management, controlled access, and discreet protection for high-profile events requiring enhanced security measures." }
      ]
    },
    milestone: {
      name: "Milestone Celebrations",
      category: "Life Achievements",
      heroImage: "/assets/images/milestone/hero.jpg",
      heroDescription: "Honor life's significant moments with elegant milestone celebrations that capture the importance of your achievements and create lasting memories for you and your loved ones.",
      overviewTitle: "Meaningful Milestone Celebrations",
      overviewDescription: `Celebrate life's most significant moments with Nova Luxury Events' milestone celebration expertise. From graduations to retirements, anniversaries to achievements, we create meaningful experiences that honor your journey and accomplishments.\n\nOur thoughtful approach ensures every milestone celebration reflects the significance of the occasion while creating an atmosphere of joy, reflection, and anticipation for the future.`,
      keyFeatures: ["Personalized celebration design", "Memory and achievement showcase", "Recommend Professional documentation services", "Cultural and traditional elements"],
      overviewImages: [
        { src: "/assets/images/birthday/birthday-1.jpg" },
        { src: "/assets/images/birthday/birthday-2.jpg" },
        { src: "/assets/images/birthday/birthday-3.jpg" },
        { src: "/assets/images/birthday/birthday-4.jpg" }
      ],
      offerings: [
        { title: "Academic Achievements", description: "Celebrate educational milestones with graduations, academic honors, and scholarship celebrations that recognize hard work and achievement.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop", features: ["Graduation ceremony coordination", "Academic honor celebrations", "Scholarship award ceremonies", "Educational milestone parties", "Family gathering coordination", "Achievement documentation"] },
        { title: "Career Milestones", description: "Honor professional achievements with retirement parties, promotion celebrations, and career recognition events that acknowledge dedication and success.", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop", features: ["Retirement celebration planning", "Promotion recognition events", "Career achievement honors", "Professional networking events", "Legacy project showcases", "Colleague coordination"] },
        { title: "Life Transitions", description: "Mark significant life transitions with coming of age ceremonies, anniversary celebrations, and personal achievement recognition events.", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop", features: ["Coming of age ceremonies", "Anniversary celebrations", "Personal achievement recognition", "Life transition ceremonies", "Family tradition planning", "Cultural ceremony integration"] }
      ],
      planningProcess: [
        { icon: "Award", title: "Achievement Recognition", description: "Understand the significance of the milestone and plan a celebration that honors the achievement appropriately." },
        { icon: "Calendar", title: "Celebration Planning", description: "Design a meaningful celebration that reflects the honoree's personality and the importance of the milestone."},
        { icon: "Users", title: "Community Coordination", description: "Coordinate with family, friends, colleagues, and community members to create a meaningful gathering."},
        { icon: "Camera", title: "Memory Creation", description: "Execute the celebration with professional documentation to preserve memories of this significant moment.", duration: "Event day" },
        { icon: "Book", title: "The Exit Meeting", description: "A comprehensive review of your birthday celebration, gathering memories and feedback from guests while providing keepsake documentation of your special day." }
        
      ],
      portfolioImages: [
        { src: "/assets/images/milestone-1.jpg" },
        { src: "/assets/images/milestone-2.jpg" },
        { src: "/assets/images/milestone-3.jpg" },
        { src: "/assets/images/milestone-4.jpg" },
        { src: "/assets/images/milestone-5.jpg" },
        { src: "/assets/images/milestone-6.jpg" }
      ],
      testimonials: [
        { name: "Dr. Grace Kamau", event: "PhD Graduation Celebration", date: "December 2024", rating: 5, content: "Nova made my PhD graduation celebration incredibly meaningful. They understood the significance of this achievement and created a beautiful ceremony that honored my academic journey.", avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
        { name: "Professor James Wanjiku", event: "Retirement Celebration", date: "November 2024", rating: 5, content: "After 40 years in education, Nova created the perfect retirement celebration that honored my career while bringing together colleagues, students, and family. It was truly special.", avatar: "https://randomuser.me/api/portraits/men/58.jpg" }
      ],
      faqs: [
        { question: "What types of milestone celebrations do you plan?", answer: "We plan graduations, retirements, career achievements, anniversaries, coming of age ceremonies, academic honors, and other significant life milestones that deserve special recognition." },
        { question: "How do you make milestone celebrations meaningful?", answer: "We focus on the significance of the achievement, incorporate personal touches and memories, coordinate with important people in the honoree's life, and create lasting documentation of the celebration." },
        { question: "Can you coordinate with multiple family generations?", answer: "Yes, we excel at bringing together multiple generations and coordinating with various family members, friends, and colleagues to ensure everyone can participate meaningfully in the celebration." }
      ]
    },
    family: {
      name: "Family & Social Events",
      category: "Family Gatherings",
      heroImage: "/assets/images/family/hero.jpg",
      heroDescription: "Create warm, welcoming family gatherings that bring loved ones together. From baby showers to family reunions, we specialize in events that celebrate family bonds and create cherished memories.",
      overviewTitle: "Heartwarming Family Celebrations",
      overviewDescription: `Strengthen family bonds with Nova Luxury Events' family-focused celebration planning. We understand that family events are about connection, love, and creating memories that last a lifetime. Our approach emphasizes warmth, inclusivity, and personal touches that make every family member feel special.\n\nWhether it's welcoming a new family member, celebrating achievements, or simply bringing everyone together, we create environments where families can connect, laugh, and create lasting memories.`,
      keyFeatures: ["Multi-generational event planning", "Child-friendly activity coordination", "Cultural tradition incorporation", "Recommend Family-style catering and dining", "Memory-making activities and games", "Comfortable and inclusive atmospheres"],
      overviewImages: [
        { src: "/assets/images/corporate/conf-1.jpg" },
        { src: "/assets/images/corporate/conf-2.jpg" },
        { src: "/assets/images/corporate/conf-3.jpg" },
        { src: "/assets/images/corporate/conf-4.jpg" }
      ],
      offerings: [
        { title: "Baby & Family Celebrations", description: "Welcome new family members with baby showers, naming ceremonies, and first birthday parties that celebrate new beginnings and family joy.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop", features: ["Baby shower celebrations", "Naming ceremony planning", "First birthday celebrations", "Baptism events", "Gender reveal parties", "Baby blessing ceremonies"] },
        { title: "Family Reunions", description: "Bring families together with reunions that accommodate multiple generations, celebrate family history, and create new memories for years to come.", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop", features: ["Multi-day reunion planning", "Activity coordination for all ages", "Family history presentations", "Traditional family games", "Memory preservation activities"] },
        { title: "Holiday & Seasonal Gatherings", description: "Create magical holiday celebrations and seasonal gatherings that honor traditions while making new ones for your family to treasure.", image: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?w=600&h=400&fit=crop", features: ["Holiday dinner coordination", "Seasonal celebration planning", "Recommend Traditional meal preparation", "Bespoke Holiday decoration and styling", "Gift exchange coordination", "House warming events"] }
      ],
      planningProcess: [
        { icon: "Heart", title: "Family Vision", description: "Understand your family dynamics, traditions, and vision for bringing everyone together in a meaningful way.", duration: "1 hour" },
        { icon: "Users", title: "Inclusive Planning", description: "Plan activities and arrangements that accommodate all family members, from youngest to oldest, ensuring everyone feels included.", duration: "2-3 weeks" },
        { icon: "Home", title: "Atmosphere Creation", description: "Create a warm, welcoming environment that encourages connection and makes every family member feel comfortable and loved.", duration: "3-4 weeks" },
        { icon: "Camera", title: "Memory Making", description: "Execute the celebration with special attention to creating and capturing moments that families will treasure forever.", duration: "Event day" }
      ],
      portfolioImages: [
        { src: "/assets/images/family-1.jpg" },
        { src: "/assets/images/family-2.jpg" },
        { src: "/assets/images/family-3.jpg" },
        { src: "/assets/images/family-4.jpg" },
        { src: "/assets/images/family-5.jpg" },
        { src: "/assets/images/family-6.jpg" }
      ],
      testimonials: [
        { name: "Margaret Wanjiru", event: "Three-Generation Reunion", date: "December 2024", rating: 5, content: "Nova brought our entire extended family together for the first time in years. They managed to coordinate activities that entertained both the grandchildren and great-grandparents. It was magical!", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
        { name: "Peter & Mary Kimani", event: "Baby Shower", date: "January 2025", rating: 5, content: "Our baby shower was perfect! Nova created such a warm, loving atmosphere and made sure every family member felt special. The attention to detail was incredible.", avatar: "https://randomuser.me/api/portraits/women/31.jpg" }
      ],
      faqs: [
        { question: "How do you accommodate multiple generations at family events?", answer: "We plan activities and arrangements suitable for all ages, provide comfortable seating options, offer diverse entertainment, and create spaces where different generations can interact naturally while also having age-appropriate options." },
        { question: "Can you incorporate family traditions into the event?", answer: "Absolutely! We love incorporating family traditions, cultural elements, special recipes, family games, and meaningful rituals that honor your family's heritage and create continuity across generations." },
        { question: "What makes family events different from other celebrations?", answer: "Family events focus on connection, comfort, and inclusivity. We emphasize creating relaxed atmospheres where families can genuinely connect, share stories, and make memories rather than formal presentations or structured programs." }
      ]
    }
  };

  const howHeardOptions = ['Social Media', 'Google Search', 'Referral', 'Advertisement'];

  const budgetOptions = [
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000+', label: '$25,000+' }
  ];

  const eventTypeOptions = currentService ? [
    { value: 'consultation', label: 'Initial Consultation' },
    { value: 'full-planning', label: 'Full Event Planning' },
    { value: 'partial-planning', label: 'Partial Planning' },
    { value: 'day-coordination', label: 'Day-of Coordination' }
  ] : [];

  useEffect(() => {
    if (servicesData[serviceType]) {
      setCurrentService(servicesData[serviceType]);
    }
  }, [serviceType]);

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Services', path: '/services-overview' },
    { label: currentService?.name || 'Service Details', path: null, isLast: true }
  ];

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      ...contactFormData,
      serviceName: currentService?.name || 'General Inquiry'
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Sorry, there was an error sending your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!currentService) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary mb-4">Service Not Found</h1>
            <p className="text-muted-foreground">The requested service could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{currentService.name} | Nova Luxury Events Kenya</title>
        <meta name="description" content={currentService.heroDescription} />
        <meta name="keywords" content={`${currentService.name.toLowerCase()}, luxury events, event planning Kenya, ${currentService.category.toLowerCase()}`} />
        <meta property="og:title" content={`${currentService.name} | Nova Luxury Events Kenya`} />
        <meta property="og:description" content={currentService.heroDescription} />
        <meta property="og:image" content={currentService.heroImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://novaluxuryeventske.com/individual-service-pages?service=${serviceType}`} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
            <div className="absolute inset-0">
              <img src={currentService.heroImage} alt={currentService.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <div className="max-w-4xl mx-auto">
                  <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">{currentService.category}</span>
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">{currentService.name}</h1>
                  <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">{currentService.heroDescription}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="default" size="lg" iconName="Calendar" iconPosition="left"><a href="#contact-form">Start Planning</a></Button>
                    <Button variant="outline" size="lg" iconName="Phone" iconPosition="left" onClick={() => window.location.href = 'tel:+254 703 334359'} className="bg-white/10 border-white/20 text-white hover:bg-white/20">Call +254 703 334359</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <Breadcrumb customItems={breadcrumbItems} />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
            <div className="space-y-16">
              <div className="space-y-0">
                <ServiceOverview service={currentService} />
                <ServiceOfferings service={currentService} />
                <PlanningProcess service={currentService} />
                <ServicePortfolio service={currentService} />
                <ServiceTestimonials service={currentService} />
                <ServiceFAQ service={currentService} />
              </div>
            </div>
            
            <section id="contact-form" className="py-16">
              <div className="max-w-4xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Ready to Plan Your {currentService.name}?</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Let's discuss your vision and create an extraordinary experience that exceeds your expectations. Fill out the form below to get started.</p>
                </div>
                
                <div className="bg-surface rounded-2xl p-8 shadow-lg">
                  {isSubmitted ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center">
                      <lord-icon src="https://cdn.lordicon.com/rhmbrqqg.json" trigger="loop" state="loop-clapping" colors="primary:#121331,secondary:#b8860b" style={{ width: '120px', height: '120px' }}></lord-icon>
                      <h3 className="text-2xl font-bold text-primary mt-4 mb-4">Thank You!</h3>
                      <p className="text-muted-foreground mb-6 max-w-md">Your inquiry has been sent successfully. Our team will get back to you within 24 hours.</p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleContactFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                        <input name="name" type="text" value={contactFormData.name} onChange={handleContactFormChange} placeholder="Enter your full name" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                        <input name="email" type="email" value={contactFormData.email} onChange={handleContactFormChange} placeholder="Enter your email" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                        <input name="phone" type="tel" value={contactFormData.phone} onChange={handleContactFormChange} placeholder="+254 700 000 000" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Event Date *</label>
                        <input name="eventDate" type="date" value={contactFormData.eventDate} onChange={handleContactFormChange} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Service Type *</label>
                        <select name="eventType" value={contactFormData.eventType} onChange={handleContactFormChange} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" required>
                          <option value="">Select service type</option>
                          {eventTypeOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Budget Range *</label>
                        <select name="budget" value={contactFormData.budget} onChange={handleContactFormChange} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent" required>
                          <option value="">Select budget range</option>
                          {budgetOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">How did you hear about us?</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {howHeardOptions.map(option => (
                            <label key={option} className="flex items-center space-x-2 text-sm">
                              <input type="radio" name="howHeard" value={option} checked={contactFormData.howHeard === option} onChange={handleContactFormChange} className="form-radio h-4 w-4 text-secondary focus:ring-secondary border-border" />
                              <span className="text-muted-foreground">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-2">Tell Us About Your Vision</label>
                        <textarea name="message" value={contactFormData.message} onChange={handleContactFormChange} placeholder="Describe your event vision, special requirements, or any questions you have..." rows={6} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none" />
                      </div>
                      <div className="md:col-span-2">
                        <Button type="submit" variant="default" size="lg" fullWidth disabled={isSubmitting} iconName={isSubmitting ? "Loader2" : "Send"} iconPosition="left" className="bg-secondary hover:bg-secondary/90">
                          {isSubmitting ? 'Sending Request...' : 'Send Consultation Request'}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
                
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4"><Icon name="Phone" size={24} className="text-secondary" /></div>
                    <h3 className="font-semibold text-primary mb-2">Call Us</h3>
                    <p className="text-muted-foreground">+254 703 334 359</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4"><Icon name="Mail" size={24} className="text-secondary" /></div>
                    <h3 className="font-semibold text-primary mb-2">Email Us</h3>
                    <p className="text-muted-foreground">info@novaluxuryeventske.com</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4"><Icon name="MessageCircle" size={24} className="text-secondary" /></div>
                    <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground">+254 703 334 359</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-16 bg-surface/50">
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Get In Touch With Us</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We're here to help bring your vision to life. Reach out to us through any of these convenient methods.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  <div className="lg:col-span-2">
                    <div className="bg-background rounded-2xl p-8 shadow-lg h-full">
                      <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Icon name="Phone" size={20} className="text-secondary" /></div>
                          <div>
                            <div className="font-semibold text-primary mb-1">Call Us</div>
                            <div className="text-foreground">+254 703 334 359</div>
                            <div className="text-sm text-muted-foreground">Available during business hours</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Icon name="Mail" size={20} className="text-secondary" /></div>
                          <div>
                            <div className="font-semibold text-primary mb-1">Email Us</div>
                            <div className="text-foreground">info@novaluxuryeventske.com</div>
                            <div className="text-sm text-muted-foreground">We respond within 24 hours</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Icon name="MessageCircle" size={20} className="text-secondary" /></div>
                          <div>
                            <div className="font-semibold text-primary mb-1">WhatsApp</div>
                            <div className="text-foreground">+254 703 334 359</div>
                            <div className="text-sm text-muted-foreground">Quick responses via WhatsApp</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1"><Icon name="MapPin" size={20} className="text-secondary" /></div>
                          <div>
                            <div className="font-semibold text-primary mb-1">Visit Our Office</div>
                            <div className="text-foreground">Westlands, Nairobi</div>
                            <div className="text-foreground">Kenya</div>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-border pt-6">
                        <h4 className="font-semibold text-primary mb-4">Business Hours</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div className="text-center p-4 bg-surface rounded-lg"><div className="font-medium text-foreground mb-1">Monday - Friday</div><div className="text-muted-foreground">8:00 AM - 5:00 PM</div></div>
                          <div className="text-center p-4 bg-surface rounded-lg"><div className="font-medium text-foreground mb-1">Saturday</div><div className="text-muted-foreground">9:00 AM - 4:00 PM</div></div>
                          <div className="text-center p-4 bg-surface rounded-lg"><div className="font-medium text-foreground mb-1">Sunday</div><div className="text-muted-foreground">By Appointment</div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-background rounded-2xl p-8 shadow-lg h-full">
                      <h3 className="text-2xl font-bold text-primary mb-6">Other Services</h3>
                      <div className="space-y-3">
                        <a href="/individual-service-pages?service=wedding" className="flex items-center justify-between p-4 rounded-lg hover:bg-surface transition-colors group"><span className="text-foreground group-hover:text-primary font-medium">Wedding Celebrations</span><Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" /></a>
                        <a href="/individual-service-pages?service=corporate" className="flex items-center justify-between p-4 rounded-lg hover:bg-surface transition-colors group"><span className="text-foreground group-hover:text-primary font-medium">Corporate Events</span><Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" /></a>
                        <a href="/individual-service-pages?service=birthday" className="flex items-center justify-between p-4 rounded-lg hover:bg-surface transition-colors group"><span className="text-foreground group-hover:text-primary font-medium">Birthday Celebrations</span><Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" /></a>
                        <a href="/individual-service-pages?service=private" className="flex items-center justify-between p-4 rounded-lg hover:bg-surface transition-colors group"><span className="text-foreground group-hover:text-primary font-medium">Private Luxury Events</span><Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" /></a>
                        <a href="/individual-service-pages?service=milestone" className="flex items-center justify-between p-4 rounded-lg hover:bg-surface transition-colors group"><span className="text-foreground group-hover:text-primary font-medium">Milestone Celebrations</span><Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" /></a>
                        <a href="/individual-service-pages?service=family" className="flex items-center justify-between p-4 rounded-lg hover:bg-surface transition-colors group"><span className="text-foreground group-hover:text-primary font-medium">Family & Social Events</span><Icon name="ArrowRight" size={18} className="text-muted-foreground group-hover:text-secondary transition-colors" /></a>
                      </div>
                      <div className="mt-8 pt-6 border-t border-border">
                        <div className="text-center">
                          <Button variant="outline" fullWidth iconName="Phone" iconPosition="left" onClick={() => window.location.href = 'tel:+254703334359'} className="mb-3">Call Now</Button>
                          <Button variant="default" fullWidth iconName="MessageCircle" iconPosition="left" onClick={() => window.open('https://wa.me/254703334359', '_blank')} className="bg-green-600 hover:bg-green-700">WhatsApp</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default IndividualServicePages;