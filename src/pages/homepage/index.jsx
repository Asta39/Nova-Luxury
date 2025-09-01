import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import TrustIndicators from './components/TrustIndicators';
import CorporateServicesSection from './components/CorporateServicesSection';
import ServicesOverview from './components/ServicesOverview';
import ClientLogos from './components/ClientLogos';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleSmoothScroll = (e) => {
      const target = e?.target?.getAttribute('href');
      if (target && target?.startsWith('#')) {
        e?.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners for smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links?.forEach(link => {
      link?.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners
    return () => {
      links?.forEach(link => {
        link?.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Nova Luxury Events - Kenya's Premier Event Planning Authority</title>
        <meta 
          name="description" 
          content="Transform your vision into extraordinary celebrations with Nova Luxury Events. Kenya's leading event planners specializing in corporate events, weddings, and luxury celebrations across Nairobi." 
        />
        <meta 
          name="keywords" 
          content="luxury event planning Kenya, wedding planners Nairobi, corporate events Kenya, event management, luxury celebrations, Nova Luxury Events" 
        />
        <meta property="og:title" content="Nova Luxury Events - Kenya's Premier Event Planning Authority" />
        <meta 
          property="og:description" 
          content="Creating extraordinary luxury events that exceed expectations. From intimate gatherings to grand celebrations in Kenya." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaluxuryevents.com" />
        <meta 
          property="og:image" 
          content="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nova Luxury Events - Kenya's Premier Event Planning Authority" />
        <meta 
          name="twitter:description" 
          content="Creating extraordinary luxury events that exceed expectations. From intimate gatherings to grand celebrations in Kenya." 
        />
        <link rel="canonical" href="https://novaluxuryevents.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Nova Luxury Events",
            "description": "Kenya's premier luxury event planning company",
            "url": "https://novaluxuryevents.com",
            "logo": "https://novaluxuryevents.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254700000000",
              "contactType": "customer service",
              "areaServed": "KE",
              "availableLanguage": ["English", "Swahili"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Westlands",
              "addressLocality": "Nairobi",
              "addressCountry": "KE"
            },
            "sameAs": [
              "https://facebook.com/novaluxuryevents",
              "https://instagram.com/novaluxuryevents",
              "https://twitter.com/novaluxuryevents"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TrustIndicators />
          <ServicesOverview />
          <VideoSection />
          <CorporateServicesSection />
          <ClientLogos />
          <CallToAction />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;