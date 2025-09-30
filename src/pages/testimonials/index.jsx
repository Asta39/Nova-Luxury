import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import MarqueeTestimonials from './components/MarqueeTestimonials';
import BlogInsights from './components/BlogInsights';
import Button from '../../components/ui/Button'; // Assuming Button component path
import { Link } from 'react-router-dom'; // For CTA buttons

const TestimonialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Client Testimonials - Nova Luxury Events Kenya</title>
        <meta
          name="description"
          content="Read genuine testimonials from our satisfied clients across Kenya. See why Nova Luxury Events is trusted for weddings, corporate events, and luxury celebrations."
        />
        <meta
          name="keywords"
          content="Nova Luxury Events testimonials, client reviews Kenya, wedding testimonials Nairobi, event planning reviews, customer feedback luxury events"
        />
        <link rel="canonical" href="https://novaluxuryeventske.com/testimonials" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* New Marquee Testimonials Section */}
          <MarqueeTestimonials />

          {/* Blog Insights Section */}
          <BlogInsights />

          {/* CTA Section */}
          <section className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                Join our roster of satisfied clients and let us make your next event an unforgettable experience.
                Schedule a complimentary consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link to="/contact-booking">Book a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link to="/portfolio-gallery">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TestimonialsPage;