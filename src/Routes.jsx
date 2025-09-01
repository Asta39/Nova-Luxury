import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
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
        {/* Define your route here */}
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact-booking" element={<ContactBooking />} />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/individual-service-pages" element={<IndividualServicePages />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/specialized-services" element={<SpecializedServices />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;