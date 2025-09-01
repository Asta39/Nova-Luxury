import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactSidebar = ({ service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    budget: '',
    message: ''
  });

  const budgetOptions = [
    { value: '50000-100000', label: 'KES 50,000 - 100,000' },
    { value: '100000-250000', label: 'KES 100,000 - 250,000' },
    { value: '250000-500000', label: 'KES 250,000 - 500,000' },
    { value: '500000-1000000', label: 'KES 500,000 - 1,000,000' },
    { value: '1000000+', label: 'KES 1,000,000+' }
  ];

  const eventTypeOptions = service ? [
    { value: 'consultation', label: 'Initial Consultation' },
    { value: 'full-planning', label: 'Full Event Planning' },
    { value: 'partial-planning', label: 'Partial Planning' },
    { value: 'day-coordination', label: 'Day-of Coordination' }
  ] : [];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const relatedServices = [
    { name: 'Wedding Celebrations', path: '/individual-service-pages?service=wedding' },
    { name: 'Corporate Events', path: '/individual-service-pages?service=corporate' },
    { name: 'Birthday Celebrations', path: '/individual-service-pages?service=birthday' },
    { name: 'Private Luxury Events', path: '/individual-service-pages?service=private' }
  ];

  return (
    <div className="space-y-8">
      {/* Quick Contact Form */}
      <div className="bg-surface rounded-xl luxury-shadow-card p-6">
        <h3 className="text-xl font-bold text-primary mb-4">
          Quick Consultation Request
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your name"
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            required
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={formData?.email}
            onChange={(e) => handleInputChange('email', e?.target?.value)}
            required
          />
          
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+254 700 000 000"
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            required
          />
          
          <Input
            label="Event Date"
            type="date"
            value={formData?.eventDate}
            onChange={(e) => handleInputChange('eventDate', e?.target?.value)}
            required
          />
          
          <Select
            label="Service Type"
            options={eventTypeOptions}
            value={formData?.eventType}
            onChange={(value) => handleInputChange('eventType', value)}
            placeholder="Select service type"
            required
          />
          
          <Select
            label="Budget Range"
            options={budgetOptions}
            value={formData?.budget}
            onChange={(value) => handleInputChange('budget', value)}
            placeholder="Select budget range"
            required
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Details
            </label>
            <textarea
              value={formData?.message}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
              placeholder="Tell us about your event vision..."
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            />
          </div>
          
          <Button
            type="submit"
            variant="default"
            fullWidth
            iconName="Send"
            iconPosition="left"
            className="bg-secondary hover:bg-secondary/90"
          >
            Request Consultation
          </Button>
        </form>
      </div>
      {/* Contact Information */}
      <div className="bg-background rounded-xl luxury-shadow-card p-6">
        <h3 className="text-xl font-bold text-primary mb-4">
          Get In Touch
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Icon name="Phone" size={18} className="text-secondary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Call Us</div>
              <div className="text-sm text-muted-foreground">+254 700 000 000</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Icon name="Mail" size={18} className="text-secondary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Email Us</div>
              <div className="text-sm text-muted-foreground">info@novaluxuryevents.com</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={18} className="text-secondary" />
            </div>
            <div>
              <div className="font-medium text-foreground">WhatsApp</div>
              <div className="text-sm text-muted-foreground">+254 700 000 000</div>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
              <Icon name="MapPin" size={18} className="text-secondary" />
            </div>
            <div>
              <div className="font-medium text-foreground">Visit Us</div>
              <div className="text-sm text-muted-foreground">
                Westlands, Nairobi<br />
                Kenya
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-sm text-muted-foreground mb-3">Business Hours</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-foreground">Monday - Friday</span>
              <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Saturday</span>
              <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-foreground">Sunday</span>
              <span className="text-muted-foreground">By Appointment</span>
            </div>
          </div>
        </div>
      </div>
      {/* Related Services */}
      <div className="bg-surface rounded-xl luxury-shadow-card p-6">
        <h3 className="text-xl font-bold text-primary mb-4">
          Related Services
        </h3>
        
        <div className="space-y-3">
          {relatedServices?.map((relatedService, index) => (
            <a
              key={index}
              href={relatedService?.path}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-accent luxury-transition group"
            >
              <span className="text-foreground group-hover:text-primary">
                {relatedService?.name}
              </span>
              <Icon 
                name="ArrowRight" 
                size={16} 
                className="text-muted-foreground group-hover:text-secondary" 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;