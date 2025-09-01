import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ customItems = null }) => {
  const location = useLocation();
  
  const pathMap = {
    '/homepage': 'Home',
    '/services-overview': 'Services',
    '/individual-service-pages': 'Service Details',
    '/portfolio-gallery': 'Portfolio',
    '/about-us': 'About Us',
    '/contact-booking': 'Contact & Booking'
  };

  const generateBreadcrumbs = () => {
    if (customItems) {
      return customItems;
    }

    const pathSegments = location?.pathname?.split('/')?.filter(segment => segment);
    const breadcrumbs = [{ label: 'Home', path: '/homepage' }];

    let currentPath = '';
    pathSegments?.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const label = pathMap?.[currentPath] || segment?.replace(/-/g, ' ')?.replace(/\b\w/g, l => l?.toUpperCase());
      
      if (currentPath !== '/homepage') {
        breadcrumbs?.push({
          label,
          path: currentPath,
          isLast: index === pathSegments?.length - 1
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs?.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {breadcrumbs?.map((crumb, index) => (
          <li key={crumb?.path || index} className="flex items-center space-x-2">
            {index > 0 && (
              <Icon 
                name="ChevronRight" 
                size={14} 
                className="text-border" 
              />
            )}
            {crumb?.isLast || !crumb?.path ? (
              <span className="text-foreground font-medium">
                {crumb?.label}
              </span>
            ) : (
              <Link
                to={crumb?.path}
                className="hover:text-primary luxury-transition"
              >
                {crumb?.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;