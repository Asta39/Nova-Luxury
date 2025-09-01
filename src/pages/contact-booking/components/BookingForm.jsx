import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budgetRange: '',
    venue: '',
    requirements: '',
    preferredTime: '',
    language: 'english',
    newsletter: false,
    terms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    { value: '50000-100000', label: 'KES 50,000 - 100,000' },
    { value: '100000-250000', label: 'KES 100,000 - 250,000' },
    { value: '250000-500000', label: 'KES 250,000 - 500,000' },
    { value: '500000-1000000', label: 'KES 500,000 - 1,000,000' },
    { value: '1000000+', label: 'KES 1,000,000+' },
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
    { value: 'french', label: 'French' },
    { value: 'chinese', label: 'Chinese' },
    { value: 'japanese', label: 'Japanese' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.fullName?.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData?.eventType) {
      newErrors.eventType = 'Please select an event type';
    }

    if (!formData?.eventDate) {
      newErrors.eventDate = 'Event date is required';
    }

    if (!formData?.guestCount) {
      newErrors.guestCount = 'Please select guest count';
    }

    if (!formData?.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range';
    }

    if (!formData?.terms) {
      newErrors.terms = 'Please accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success handling
      alert('Thank you! Your consultation request has been submitted successfully. We will contact you within 2 hours to confirm your appointment.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        budgetRange: '',
        venue: '',
        requirements: '',
        preferredTime: '',
        language: 'english',
        newsletter: false,
        terms: false
      });
      
    } catch (error) {
      alert('Sorry, there was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow?.setDate(tomorrow?.getDate() + 1);
    return tomorrow?.toISOString()?.split('T')?.[0];
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 lg:p-8 luxury-shadow-card">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">Book Your Consultation</h2>
        <p className="text-muted-foreground">
          Schedule a complimentary consultation to discuss your luxury event vision. Our expert planners will create a personalized proposal for your special occasion.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Personal Information</h3>
          
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            value={formData?.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            error={errors?.fullName}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              name="email"
              value={formData?.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              error={errors?.email}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData?.phone}
              onChange={handleInputChange}
              placeholder="+254 700 000 000"
              error={errors?.phone}
              required
            />
          </div>

          <Select
            label="Preferred Language"
            options={languages}
            value={formData?.language}
            onChange={(value) => handleSelectChange('language', value)}
            placeholder="Select consultation language"
          />
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Event Details</h3>
          
          <Select
            label="Event Type"
            options={eventTypes}
            value={formData?.eventType}
            onChange={(value) => handleSelectChange('eventType', value)}
            placeholder="Select your event type"
            error={errors?.eventType}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Event Date"
              type="date"
              name="eventDate"
              value={formData?.eventDate}
              onChange={handleInputChange}
              min={getTomorrowDate()}
              error={errors?.eventDate}
              required
            />

            <Select
              label="Expected Guest Count"
              options={guestCounts}
              value={formData?.guestCount}
              onChange={(value) => handleSelectChange('guestCount', value)}
              placeholder="Select guest count"
              error={errors?.guestCount}
              required
            />
          </div>

          <Select
            label="Budget Range"
            options={budgetRanges}
            value={formData?.budgetRange}
            onChange={(value) => handleSelectChange('budgetRange', value)}
            placeholder="Select your budget range"
            error={errors?.budgetRange}
            required
          />

          <Input
            label="Preferred Venue (Optional)"
            type="text"
            name="venue"
            value={formData?.venue}
            onChange={handleInputChange}
            placeholder="Do you have a venue in mind?"
            description="Leave blank if you need venue recommendations"
          />
        </div>

        {/* Consultation Preferences */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Consultation Preferences</h3>
          
          <Select
            label="Preferred Consultation Time"
            options={consultationTimes}
            value={formData?.preferredTime}
            onChange={(value) => handleSelectChange('preferredTime', value)}
            placeholder="Select preferred time"
            description="All times are in East Africa Time (EAT)"
          />

          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Event Requirements & Vision
            </label>
            <textarea
              name="requirements"
              value={formData?.requirements}
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

        {/* Preferences */}
        <div className="space-y-4">
          <div className="space-y-3">
            <Checkbox
              label="Subscribe to our newsletter for exclusive event planning tips and luxury inspiration"
              checked={formData?.newsletter}
              onChange={(e) => handleInputChange(e)}
              name="newsletter"
              description="Unsubscribe anytime. We respect your privacy."
            />

            <Checkbox
              label="I agree to the Terms of Service and Privacy Policy"
              checked={formData?.terms}
              onChange={(e) => handleInputChange(e)}
              name="terms"
              error={errors?.terms}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
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