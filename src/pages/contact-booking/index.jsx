import React from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ContactInfo from './components/ContactInfo';
import BookingForm from './components/BookingForm';
import LocationMap from './components/LocationMap';

import Icon from '../../components/AppIcon';

const ContactBooking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-surface py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Breadcrumb />
            
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                Contact & Booking
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to create your extraordinary event? Get in touch with our luxury event planning experts. We're here to bring your vision to life with unparalleled attention to detail and personalized service.
              </p>
            </div>

            {/* Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Quick Response</h3>
                <p className="text-sm text-muted-foreground">Within 2 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Calendar" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">No obligation</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">GDPR compliant</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <ContactInfo />
              </div>

              {/* Booking Form */}
              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-12 lg:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Located in the prestigious Westlands district, our office is at the heart of Nairobi's business center, surrounded by the finest venues we work with.
              </p>
            </div>
            
            <LocationMap />
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={32} className="text-secondary-foreground" />
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Urgent Event Support?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                For time-sensitive events or emergency planning needs, our dedicated team is available 24/7 to ensure your special occasion goes perfectly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold luxury-transition"
                >
                  <Icon name="Phone" size={20} />
                  <span>Call Emergency Line</span>
                </a>
                
                <a
                  href="https://wa.me/254700000000?text=URGENT: I need immediate event planning assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold luxury-transition"
                >
                  <Icon name="MessageCircle" size={20} />
                  <span>WhatsApp Emergency</span>
                </a>
              </div>
              
              <p className="text-sm opacity-75 mt-4">
                Available 24/7 for urgent events • Response within 30 minutes
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

export default ContactBooking;