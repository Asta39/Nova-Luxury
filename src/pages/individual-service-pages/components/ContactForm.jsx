import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    venue: '',
    budget: '',
    message: '',
    subscribe: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const budgetOptions = [
    { value: '', label: 'Select your budget range' },
    { value: 'under-100k', label: 'Under KES 100,000' },
    { value: '100k-300k', label: 'KES 100,000 - 300,000' },
    { value: '300k-600k', label: 'KES 300,000 - 600,000' },
    { value: '600k-1m', label: 'KES 600,000 - 1,000,000' },
    { value: 'over-1m', label: 'Over KES 1,000,000' },
    { value: 'discuss', label: 'Let\'s discuss' }
  ];

  const guestCountOptions = [
    { value: '', label: 'Expected number of guests' },
    { value: 'under-25', label: 'Under 25 guests' },
    { value: '25-50', label: '25-50 guests' },
    { value: '50-100', label: '50-100 guests' },
    { value: '100-200', label: '100-200 guests' },
    { value: '200-500', label: '200-500 guests' },
    { value: 'over-500', label: 'Over 500 guests' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventDate: '',
          guestCount: '',
          venue: '',
          budget: '',
          message: '',
          subscribe: false
        });
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          We've received your inquiry for {service?.name}. Our team will contact you within 24 hours to discuss your event details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+254700000000'}
          >
            Call +254 700 000 000
          </Button>
          <Button
            variant="outline"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/254700000000', '_blank')}
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
      {/* Form Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <h3 className="text-xl font-semibold mb-2">Get Your Free Consultation</h3>
        <p className="text-primary-foreground/90">
          Fill out the form below and we'll get back to you within 24 hours with a personalized proposal for your {service?.name?.toLowerCase()}.
        </p>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              name="name"
              value={formData?.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              name="email"
              value={formData?.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Phone Number *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData?.phone}
              onChange={handleInputChange}
              placeholder="+254 7XX XXX XXX"
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Event Date
            </label>
            <Input
              type="date"
              name="eventDate"
              value={formData?.eventDate}
              onChange={handleInputChange}
              min={new Date()?.toISOString()?.split('T')?.[0]}
              className="w-full"
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Number of Guests
            </label>
            <Select
              name="guestCount"
              value={formData?.guestCount}
              onChange={handleInputChange}
              options={guestCountOptions}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Budget Range
            </label>
            <Select
              name="budget"
              value={formData?.budget}
              onChange={handleInputChange}
              options={budgetOptions}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Preferred Venue (Optional)
          </label>
          <Input
            type="text"
            name="venue"
            value={formData?.venue}
            onChange={handleInputChange}
            placeholder="Do you have a venue in mind?"
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">
            Tell us about your vision
          </label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            placeholder={`Share your ideas, special requirements, or any questions about your ${service?.name?.toLowerCase()}...`}
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        {/* Subscription Checkbox */}
        <div className="flex items-start space-x-3">
          <Checkbox
            id="subscribe"
            name="subscribe"
            checked={formData?.subscribe}
            onChange={handleInputChange}
            className="mt-1"
          />
          <label htmlFor="subscribe" className="text-sm text-muted-foreground leading-relaxed">
            I'd like to receive event planning tips, exclusive offers, and updates from Nova Luxury Events. 
            You can unsubscribe at any time.
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            iconName={isSubmitting ? "Loader2" : "Send"}
            iconPosition="left"
            disabled={isSubmitting}
            className={isSubmitting ? "animate-pulse" : ""}
          >
            {isSubmitting ? 'Sending...' : 'Send My Request'}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.location.href = 'tel:+254700000000'}
            className="sm:w-auto"
          >
            Call Now
          </Button>
        </div>

        {/* Contact Information */}
        <div className="border-t border-border pt-6">
          <h4 className="font-semibold text-primary mb-4">Need Immediate Assistance?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-secondary" />
              <span className="text-muted-foreground">Call: +254 700 000 000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} className="text-secondary" />
              <button 
                type="button"
                onClick={() => window.open('https://wa.me/254700000000', '_blank')}
                className="text-primary hover:underline"
              >
                WhatsApp Chat
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-secondary" />
              <span className="text-muted-foreground">events@novaluxury.co.ke</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} className="text-secondary" />
              <span className="text-muted-foreground">Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;