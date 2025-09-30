import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const officeLocation = {
    lat: -1.2299560317794829,
    lng: 36.864651643044745,
    address: "Garden Estate, Nairobi, Kenya"
  };

  const nearbyLandmarks = [
    { name: 'Sarit Centre', distance: '0.5 km' },
    { name: 'Westgate Shopping Mall', distance: '1.2 km' },
    { name: 'ABC Place', distance: '0.8 km' },
    { name: 'Nairobi CBD', distance: '5.5 km' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-2">Visit Our Office</h2>
        <p className="text-muted-foreground">
          Located in the heart of Westlands, our office is easily accessible and surrounded by premium venues we work with regularly.
        </p>
      </div>
      {/* Interactive Map */}
      <div className="bg-card border border-border rounded-lg overflow-hidden luxury-shadow-card">
        <div className="h-64 md:h-80 relative">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Nova Luxury Events Office Location"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${officeLocation?.lat},${officeLocation?.lng}&z=15&output=embed`}
            className="border-0"
          />
          
          {/* Map Overlay Controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Navigation"
              onClick={() => window.open(`https://maps.google.com/?q=${officeLocation?.lat},${officeLocation?.lng}`, '_blank')}
              className="bg-background/90 backdrop-blur-sm"
            >
              Directions
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="MapPin" size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">Nova Luxury Events</h3>
              <p className="text-muted-foreground">{officeLocation?.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Navigation"
              iconPosition="left"
              onClick={() => window.open(`https://maps.google.com/?q=${officeLocation?.lat},${officeLocation?.lng}`, '_blank')}
            >
              Get Directions
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share"
              iconPosition="left"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Nova Luxury Events Location',
                    text: 'Visit our office in Westlands, Nairobi',
                    url: `https://maps.google.com/?q=${officeLocation?.lat},${officeLocation?.lng}`
                  });
                } else {
                  navigator.clipboard?.writeText(`https://maps.google.com/?q=${officeLocation?.lat},${officeLocation?.lng}`);
                  alert('Location link copied to clipboard!');
                }
              }}
            >
              Share Location
            </Button>
          </div>
        </div>
      </div>
      {/* Nearby Landmarks
      
            <div className="bg-card border border-border rounded-lg p-6 luxury-shadow-card">
        <h3 className="text-lg font-semibold text-primary mb-4">Nearby Landmarks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nearbyLandmarks?.map((landmark, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-secondary" />
                <span className="text-sm font-medium text-primary">{landmark?.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{landmark?.distance}</span>
            </div>
          ))}
        </div>
      </div>
      */}

      {/* Transportation Info */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">Getting Here</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Icon name="Car" size={20} className="text-secondary mt-0.5" />
            <div>
              <h4 className="font-medium text-primary">By Car</h4>
              <p className="text-sm text-muted-foreground">
                Ample parking available. Take Thika Road to Garden Estate Road exit, then follow Garden Estate Road for about 2km to reach our location.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Bus" size={20} className="text-secondary mt-0.5" />
            <div>
              <h4 className="font-medium text-primary">Public Transport</h4>
              <p className="text-sm text-muted-foreground">
                Multiple matatu routes serve Garden Estate Road. Alight at Garden Estate Road stage near Roasters and walk 5 minutes to our office. Routes from CBD and Thika Road are available.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Icon name="Smartphone" size={20} className="text-secondary mt-0.5" />
            <div>
              <h4 className="font-medium text-primary">Ride-Hailing</h4>
              <p className="text-sm text-muted-foreground">
                Uber, Bolt, and Little Cab are readily available. Search for "Garden Estate Road" as your destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;