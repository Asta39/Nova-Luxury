import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    inquiryType: 'general',
    fullName: '',
    email: '',
    phone: '',
    howHeard: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budgetRange: '',
    venue: '',
    venueRecommendation: '',
    requirements: '',
    preferredTime: '',
    language: 'english',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Options Arrays ---
  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry / Event Booking' },
    { value: 'corporate', label: 'Corporate Partnership Inquiry' },
  ];

  const howHeardOptions = [
    'Social Media (Facebook, Instagram)',
    'Google Search',
    'Referral from a friend/colleague',
    'Advertisement',
    'Other'
  ];
   const eventTypes = [
    { value: 'wedding', label: 'Wedding Celebrations' },
    { value: 'corporate', label: 'Corporate Events' },
    { value: 'birthday', label: 'Birthday Celebrations' },
    { value: 'private', label: 'Private Luxury Events' },
    { value: 'milestone', label: 'Milestone & Life Celebrations' },
    { value: 'family', label: 'Family & Social Celebrations' },
    { value: 'cultural', label: 'Cultural Ceremonies' },
    { value: 'other', label: 'Other (Please specify)' }
  ];

  const budgetRanges = [
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000-25000', label: '$10,000 - $25,000' },
    { value: '25000+', label: '$25,000+' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const guestCounts = [
    { value: '1-25', label: '1-25 guests (Intimate)' },
    { value: '26-50', label: '26-50 guests (Small)' },
    { value: '51-100', label: '51-100 guests (Medium)' },
    { value: '101-200', label: '101-200 guests (Large)' },
    { value: '201-500', label: '201-500 guests (Grand)' },
    { value: '500+', label: '500+ guests (Mega Event)' }
  ];

  const consultationTimes = [
    { value: '9:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const languages = [
    { value: 'english', label: 'English' },
    { value: 'swahili', label: 'Swahili' },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.terms) newErrors.terms = 'You must accept the terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    const templateId = formData.inquiryType === 'corporate' 
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_CORPORATE_ID 
      : import.meta.env.VITE_EMAILJS_TEMPLATE_GENERAL_ID;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = { ...formData };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Sorry, there was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 lg:p-8 luxury-shadow-card text-center flex flex-col items-center justify-center min-h-[500px]">
        {/* --- ICON UPDATED HERE --- */}
        <lord-icon
            src="https://cdn.lordicon.com/rhmbrqqg.json"
            trigger="loop"
            state="loop-clapping"
            colors="primary:#121331,secondary:#b8860b"
            style={{ width: '100px', height: '100px' }}>
        </lord-icon>
        <h2 className="text-2xl font-semibold text-primary mt-4">Thank You!</h2>
        <p className="text-muted-foreground mt-2 max-w-md">
          Your consultation request has been received. Our team will contact you within the next 2 business hours to confirm your appointment.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          className="mt-6"
          type="button"
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 lg:p-8 luxury-shadow-card">
        <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">Book Your Consultation</h2>
        <p className="text-muted-foreground">
          Schedule a complimentary consultation to discuss your luxury event vision. Our expert planners will create a personalized proposal for your special occasion.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Let's Get Started</h3>
          <Select
            label="What is the nature of your inquiry?"
            options={inquiryTypes}
            value={formData.inquiryType}
            onChange={(value) => handleSelectChange('inquiryType', value)}
          />
          <div>
            <label className="block text-sm font-medium text-primary mb-2">How did you hear about us?</label>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {howHeardOptions.map(option => (
                <label key={option} className="flex items-center space-x-2 text-sm">
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
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            error={errors.fullName}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              error={errors.email}
              required
            />
            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+254 700 000 000"
              error={errors.phone}
              required
            />
          </div>
          <Select
            label="Preferred Language"
            options={languages}
            value={formData.language}
            onChange={(value) => handleSelectChange('language', value)}
            placeholder="Select consultation language"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Event Details</h3>
          <Select
            label="Event Type"
            options={eventTypes}
            value={formData.eventType}
            onChange={(value) => handleSelectChange('eventType', value)}
            placeholder="Select your event type"
            error={errors.eventType}
            required
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Event Date"
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleInputChange}
              min={getTomorrowDate()}
              error={errors.eventDate}
              required
            />
            <Select
              label="Expected Guest Count"
              options={guestCounts}
              value={formData.guestCount}
              onChange={(value) => handleSelectChange('guestCount', value)}
              placeholder="Select guest count"
              error={errors.guestCount}
              required
            />
          </div>
          <Select
            label="Budget Range"
            options={budgetRanges}
            value={formData.budgetRange}
            onChange={(value) => handleSelectChange('budgetRange', value)}
            placeholder="Select your budget range"
            error={errors.budgetRange}
            required
          />
          <Input
            label="Preferred Venue"
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            placeholder="Do you have a venue in mind?"
          />
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              What location would you want recommendations from?
            </label>
            <textarea
              name="venueRecommendation"
              value={formData.venueRecommendation}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              placeholder="e.g., Kiambu, Karen, Westlands, etc."
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Consultation Preferences</h3>
          <Select
            label="Preferred Consultation Time"
            options={consultationTimes}
            value={formData.preferredTime}
            onChange={(value) => handleSelectChange('preferredTime', value)}
            placeholder="Select preferred time"
          />
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Event Requirements & Vision
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              placeholder="Tell us about your vision, special requirements, themes, or any specific details you'd like us to know about your event..."
            />
            <p className="text-xs text-muted-foreground mt-1">
              The more details you provide, the better we can prepare for your consultation
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <Checkbox
              label="Subscribe to our newsletter for exclusive event planning tips and luxury inspiration"
              checked={formData.newsletter}
              onChange={(e) => handleInputChange(e)}
              name="newsletter"
              description="Unsubscribe anytime. We respect your privacy."
            />
            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData.terms}
              onChange={(e) => handleInputChange(e)}
              name="terms"
              error={errors.terms}
              required
            />
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isSubmitting}
            disabled={isSubmitting}
            iconName="Calendar"
            iconPosition="left"
            fullWidth
          >
            {isSubmitting ? 'Scheduling Consultation...' : 'Schedule Free Consultation'}
          </Button>
          <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>Response within 2 hours • Free consultation • No obligation</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;