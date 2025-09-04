import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import MainLayout from "components/MainLayout"; // <-- IMPORT THE NEW LAYOUT

// Import Pages
import NotFound from "pages/NotFound";
import ContactBooking from './pages/contact-booking';
import PortfolioGallery from './pages/portfolio-gallery';
import ServicesOverview from './pages/services-overview';
import AboutUs from './pages/about-us';
import IndividualServicePages from './pages/individual-service-pages';
import Homepage from './pages/homepage';
import Testimonials from './pages/testimonials';
import SpecializedServices from './pages/specialized-services';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Main Layout Route */}
          <Route path="/" element={<MainLayout />}>
            {/* All your pages are now nested inside the layout */}
            <Route index element={<Homepage />} /> {/* 'index' makes this the default child route */}
            <Route path="homepage" element={<Homepage />} />
            <Route path="contact-booking" element={<ContactBooking />} />
            <Route path="portfolio-gallery" element={<PortfolioGallery />} />
            <Route path="services-overview" element={<ServicesOverview />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="individual-service-pages" element={<IndividualServicePages />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="specialized-services" element={<SpecializedServices />} />
          </Route>

          {/* This route is outside the layout for a different appearance if needed */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;