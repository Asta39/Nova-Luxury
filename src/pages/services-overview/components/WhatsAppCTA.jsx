import React from 'react';
import Button from '../../../components/ui/Button';

const WhatsAppCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "254703334359";
    const message = encodeURIComponent("Hi! I'm interested in learning more about Nova Luxury Events services. Could you please provide more information?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-primary mb-2">
        Need Immediate Assistance?
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Chat with our event planning experts on WhatsApp for instant support and personalized recommendations.
      </p>
      <Button
        variant="default"
        iconName="MessageCircle"
        iconPosition="left"
        onClick={handleWhatsAppClick}
        className="bg-secondary hover:bg-secondary/90"
      >
        Chat on WhatsApp
      </Button>
    </div>
  );
};

export default WhatsAppCTA;