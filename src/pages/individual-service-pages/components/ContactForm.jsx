import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

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
    howHeard: '', // --- ADDED: New field for radio buttons
    eventDate: '',
    guestCount: '',
    venue: '',
    budget: '',
    message: '',
    subscribe: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // --- ADDED: Options for the new radio button group ---
  const howHeardOptions = [
    'Social Media',
    'Google Search',
    'Referral',
    'Advertisement'
  ];

  const budgetOptions = [
    { value: '', label: 'Select your budget range' },
    { value: 'under-1k', label: 'Under $1,000' },
    { value: '1k-3k', label: '$1,000 - $3,000' },
    { value: '3k-6k', label: '$3,000 - $6,000' },
    { value: '6k-10k', label: '$6,000 - $10,000' },
    { value: 'over-10k', label: 'Over $10,000' },
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
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  // --- MODIFIED: handleSubmit now sends email via EmailJS ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // We add the service name to the data being sent to the template
    const templateParams = {
      ...formData,
      serviceName: service?.name || 'General Inquiry'
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setShowSuccess(true);
    } catch (error) {
      console.error('EmailJS Form Submission Error:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- MODIFIED: The success message now uses an animated icon ---
  if (showSuccess) {
    return (
      <div className="text-center py-12 flex flex-col items-center justify-center">
        <lord-icon
            src="https://cdn.lordicon.com/rhmbrqqg.json"
            trigger="loop"
            state="loop-clapping"
            colors="primary:#121331,secondary:#b8860b"
            style={{ width: '120px', height: '120px' }}>
        </lord-icon>
        <h3 className="text-2xl font-bold text-primary mt-4 mb-4">Thank You!</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          We've received your inquiry for **{service?.name}**. Our team will contact you within 24 hours to discuss your event details.
        </p>
        <Button
            variant="outline"
            onClick={() => setShowSuccess(false)}
          >
            Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden">
      <div className="bg-primary text-primary-foreground p-6">
        <h3 className="text-xl font-semibold mb-2">Get Your Free Consultation</h3>
        <p className="text-primary-foreground/90">
          Fill out the form below and we'll get back to you within 24 hours with a personalized proposal for your {service?.name?.toLowerCase()}.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Email Address *</label>
            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required className="w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
            <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+254 7XX XXX XXX" required className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Event Date</label>
            <Input type="date" name="eventDate" value={formData.eventDate} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Number of Guests</label>
            <Select name="guestCount" value={formData.guestCount} onChange={handleInputChange} options={guestCountOptions} className="w-full" />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">Budget Range</label>
            <Select name="budget" value={formData.budget} onChange={handleInputChange} options={budgetOptions} className="w-full" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-2">Preferred Venue (Optional)</label>
          <Input type="text" name="venue" value={formData.venue} onChange={handleInputChange} placeholder="Do you have a venue in mind?" className="w-full" />
        </div>

        {/* --- ADDED: "How did you hear about us?" section --- */}
        <div>
          <label className="block text-sm font-medium text-primary mb-2">How did you hear about us?</label>
          <div className="grid grid-cols-2 gap-4">
            {howHeardOptions.map(option => (
              <label key={option} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <input
                  type="radio"
                  name="howHeard"
                  value={option}
                  checked={formData.howHeard === option}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-secondary focus:ring-secondary border-border"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary mb-2">Tell us about your vision</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={`Share your ideas, special requirements, or any questions about your ${service?.name?.toLowerCase()}...`}
            rows={4}
            // --- MODIFIED: Ensured consistent rounded corners ---
            className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>
        <div className="flex items-start space-x-3">
          <Checkbox id="subscribe" name="subscribe" checked={formData.subscribe} onChange={handleInputChange} className="mt-1" />
          <label htmlFor="subscribe" className="text-sm text-muted-foreground leading-relaxed">
            I'd like to receive event planning tips, exclusive offers, and updates from Nova Luxury Events.
          </label>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button type="submit" variant="default" size="lg" fullWidth iconName={isSubmitting ? "Loader2" : "Send"} iconPosition="left" disabled={isSubmitting} className={isSubmitting ? "animate-pulse" : ""}>
            {isSubmitting ? 'Sending...' : 'Send My Request'}
          </Button>
          <Button type="button" variant="outline" size="lg" iconName="Phone" iconPosition="left" onClick={() => window.location.href = 'tel:+254700000000'} className="sm:w-auto">
            Call Now
          </Button>
        </div>
        <div className="border-t border-border pt-6">
          <h4 className="font-semibold text-primary mb-4">Need Immediate Assistance?</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={16} className="text-secondary" />
              <span className="text-muted-foreground">Call: +254 703 334359</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} className="text-secondary" />
              <button type="button" onClick={() => window.open('https://wa.me/254703334359', '_blank')} className="text-primary hover:underline">
                WhatsApp Chat
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-secondary" />
              <span className="text-muted-foreground">info@novaluxuryeventske.com.</span>
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