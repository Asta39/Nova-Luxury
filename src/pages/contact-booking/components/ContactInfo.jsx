import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      label: 'Call Us',
      value: '+254 700 000 000',
      action: () => window.location.href = 'tel:+254700000000',
      description: 'Available 24/7 for urgent events'
    },
    {
      icon: 'Mail',
      label: 'Email Us',
      value: 'info@novaluxuryevents.com',
      action: () => window.location.href = 'mailto:info@novaluxuryevents.com',
      description: 'Response within 2 hours'
    },
    {
      icon: 'MessageCircle',
      label: 'WhatsApp',
      value: '+254 700 000 000',
      action: () => window.open('https://wa.me/254700000000?text=Hello, I would like to inquire about your luxury event planning services.', '_blank'),
      description: 'Instant messaging support'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/novaluxuryevents' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/novaluxuryevents' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/novaluxuryevents' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/novaluxuryevents' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div>
        <h2 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h2>
        <div className="space-y-4">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 luxury-shadow-card hover:shadow-lg luxury-transition cursor-pointer"
              onClick={method?.action}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={method?.icon} size={20} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">{method?.label}</h3>
                  <p className="text-primary font-medium mb-1">{method?.value}</p>
                  <p className="text-sm text-muted-foreground">{method?.description}</p>
                </div>
                <Icon name="ExternalLink" size={16} className="text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Business Hours */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Business Hours</h3>
        <div className="bg-card border border-border rounded-lg p-6 luxury-shadow-card">
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="Clock" size={20} className="text-secondary" />
            <span className="font-medium text-primary">East Africa Time (EAT)</span>
          </div>
          <div className="space-y-3">
            {businessHours?.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-muted-foreground">{schedule?.day}</span>
                <span className="font-medium text-primary">{schedule?.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Icon name="AlertCircle" size={16} />
              <span>Emergency events: 24/7 availability</span>
            </div>
          </div>
        </div>
      </div>
      {/* Office Location */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Visit Our Office</h3>
        <div className="bg-card border border-border rounded-lg p-6 luxury-shadow-card">
          <div className="flex items-start space-x-4 mb-4">
            <Icon name="MapPin" size={20} className="text-secondary mt-1" />
            <div>
              <p className="font-medium text-primary">Nova Luxury Events</p>
              <p className="text-muted-foreground">Westlands Business District</p>
              <p className="text-muted-foreground">Nairobi, Kenya</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="Navigation"
            iconPosition="left"
            onClick={() => window.open('https://maps.google.com/?q=-1.2641,36.8017', '_blank')}
            className="w-full"
          >
            Get Directions
          </Button>
        </div>
      </div>
      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Follow Us</h3>
        <div className="flex space-x-3">
          {socialLinks?.map((social) => (
            <a
              key={social?.name}
              href={social?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-accent hover:bg-secondary hover:text-secondary-foreground rounded-lg flex items-center justify-center luxury-transition"
              aria-label={`Follow us on ${social?.name}`}
            >
              <Icon name={social?.icon} size={20} />
            </a>
          ))}
        </div>
      </div>
      {/* Trust Indicators */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Shield" size={20} className="text-secondary" />
          <span className="font-semibold text-primary">Secure & Trusted</span>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} className="text-success" />
            <span>SSL Encrypted Communications</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} className="text-success" />
            <span>GDPR Compliant Data Handling</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Check" size={16} className="text-success" />
            <span>Licensed Event Planning Company</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;