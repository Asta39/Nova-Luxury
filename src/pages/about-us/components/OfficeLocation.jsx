import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const officeInfo = {
    address: "Westlands Business Center, 5th Floor\nWaiyaki Way, Westlands\nNairobi, Kenya",
    phone: "+254 703 334359",
    email: "info@novaluxuryevents.com",
    coordinates: { lat: -1.2299560317794829, lng: 36.864651643044745 }
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By Appointment Only" }
  ];

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}`;
    window.open(url, '_blank');
  };

  // Define the icon color for consistency
  const iconSecondaryColor = "#b8860b";

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Visit Our Office
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Located in the serene Garden Estate area, our office is designed to inspire
            and showcase the luxury experiences we create for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-background p-6 rounded-lg luxury-shadow-card border border-border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Office Address</h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {officeInfo?.address}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDirections}
                    iconName="Navigation"
                    iconPosition="left"
                    className="mt-3"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-background p-6 rounded-lg luxury-shadow-card border border-border">
              <h3 className="font-semibold text-primary mb-4 flex items-center">
                <Icon name="Phone" size={20} className="text-secondary mr-2" />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-muted-foreground" />
                  <a
                    href={`tel:${officeInfo?.phone}`}
                    className="text-muted-foreground hover:text-primary luxury-transition"
                  >
                    {officeInfo?.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-muted-foreground" />
                  <a
                    href={`mailto:${officeInfo?.email}`}
                    className="text-muted-foreground hover:text-primary luxury-transition"
                  >
                    {officeInfo?.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={16} className="text-muted-foreground" />
                  <a
                    href="https://wa.me/254703334359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary luxury-transition"
                  >
                    WhatsApp: +254 703 334359
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-background p-6 rounded-lg luxury-shadow-card border border-border">
              <h3 className="font-semibold text-primary mb-4 flex items-center">
                <Icon name="Clock" size={20} className="text-secondary mr-2" />
                Business Hours
              </h3>
              <div className="space-y-3">
                {businessHours?.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule?.day}</span>
                    <span className="font-medium text-primary">{schedule?.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-accent rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <Icon name="Info" size={14} className="inline mr-1 text-secondary" />
                  Emergency consultations available 24/7 for urgent events
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-background rounded-lg luxury-shadow-card overflow-hidden border border-border">
            <div className="h-96 lg:h-full min-h-[400px]">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Nova Luxury Events Office Location"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${officeInfo?.coordinates?.lat},${officeInfo?.coordinates?.lng}&z=16&output=embed`}
                className="border-0"
              />
            </div>

            {/* Map Overlay Info */}
            <div className="p-4 bg-background border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-primary">Nova Luxury Events</h4>
                  <p className="text-sm text-muted-foreground">Garden Estate, Nairobi</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDirections}
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  Open in Maps
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-background rounded-lg luxury-shadow-card border border-border">
<div className="w-full flex justify-center mb-4">
            <lord-icon
    src="https://cdn.lordicon.com/njpauqoc.json"
    trigger="loop"
    colors={`primary:#121331,secondary:${iconSecondaryColor}`}
                style={{ width: '60px', height: '60px' }}>
</lord-icon>
            </div>           
             <h4 className="font-semibold text-primary mb-2">Parking Available</h4>
            <p className="text-sm text-muted-foreground">
              Complimentary parking for all client consultations
            </p>
          </div>

          {/* --- CORRECTED THIS BLOCK --- */}
          <div className="text-center p-6 bg-background rounded-lg luxury-shadow-card border border-border">
            <div className="w-full flex justify-center mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/pwbcwjje.json"
                trigger="loop"
                colors={`primary:#121331,secondary:${iconSecondaryColor}`}
                style={{ width: '60px', height: '60px' }}>
              </lord-icon>
            </div>
            <h4 className="font-semibold text-primary mb-2">Consultation Lounge</h4>
            <p className="text-sm text-muted-foreground">
              Comfortable meeting spaces with refreshments
            </p>
          </div>

          {/* --- CORRECTED THIS BLOCK --- */}
          <div className="text-center p-6 bg-background rounded-lg luxury-shadow-card border border-border">
            <div className="w-full flex justify-center mb-4">
              <lord-icon
                src="https://cdn.lordicon.com/jezazvlx.json"
                trigger="loop"
                colors={`primary:#121331,secondary:${iconSecondaryColor}`}
                style={{ width: '60px', height: '60px' }}>
              </lord-icon>
            </div>
            <h4 className="font-semibold text-primary mb-2">Modern Facilities</h4>
            <p className="text-sm text-muted-foreground">
              High-speed internet and presentation equipment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;