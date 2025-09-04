import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import { Link } from 'react-router-dom';

// Import all components
import CompanyStory from './components/CompanyStory';
import TeamProfiles from './components/TeamProfiles';
import CompanyValues from './components/CompanyValues';
import OfficeLocation from './components/OfficeLocation';
import CompanyTimeline from './components/CompanyTimeline';
import CompanyStatistics from './components/CompanyStatistics';
import CulturalIntegration from './components/CulturalIntegration';
import ProfessionalCertifications from './components/ProfessionalCertifications';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - Nova Luxury Events | Kenya's Premier Event Planning Company</title>
        <meta name="description" content="Discover Nova Luxury Events' story, expert team, and commitment to creating extraordinary luxury celebrations across Kenya. Founded in 2018, we blend international standards with authentic Kenyan traditions." />
        <meta name="keywords" content="about nova luxury events, kenya event planners, luxury event company, event planning team, nairobi events, cultural integration, professional certifications" />
        <meta property="og:title" content="About Nova Luxury Events - Kenya's Premier Event Planning Company" />
        <meta property="og:description" content="Meet our expert team and discover our journey as Kenya's leading luxury event planning company, creating extraordinary celebrations since 2018." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novaluxuryeventske.com/about-us" />
        <link rel="canonical" href="https://novaluxuryeventske.com/about-us" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-surface to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Breadcrumb />
            
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                About Nova Luxury Events
              </h1>
              <div className="w-24 h-1 bg-secondary rounded-full mx-auto mb-8"></div>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
                Kenya's premier luxury event planning company, creating extraordinary celebrations 
                that honor tradition while embracing modern sophistication.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Events Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  asChild
                >
                  <Link to="/contact-booking">Book Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+254700000000'}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <CompanyStory />

        {/* Company Values Section */}
        <CompanyValues />

        {/* Team Profiles Section */}
        <TeamProfiles />

        {/* Company Statistics Section */}
        <CompanyStatistics />

        {/* Company Timeline Section */}
        <CompanyTimeline />

        {/* Cultural Integration Section */}
        <CulturalIntegration />

        {/* Professional Certifications Section */}
        <ProfessionalCertifications />

        {/* Office Location Section */}
        <OfficeLocation />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-secondary/5 to-primary/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <Icon name="Sparkles" size={48} className="text-secondary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Ready to Create Your Extraordinary Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let our experienced team bring your vision to life with the perfect blend of luxury, 
              culture, and personalized service that Nova Luxury Events is known for.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                asChild
              >
                <Link to="/contact-booking">Start Planning</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
                asChild
              >
                <Link to="/portfolio-gallery">View Our Work</Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-secondary" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-secondary" />
                <span>info@novaluxuryevents.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-secondary" />
                <span>Westlands, Nairobi</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;