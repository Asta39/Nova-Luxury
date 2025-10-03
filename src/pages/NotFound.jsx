import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/ui/Button';
// The static Icon component is no longer needed

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  // --- DEFINE YOUR THEME COLORS HERE ---
  // Replace these with the actual hex codes from your Tailwind config for best results
  const primaryTextColor = '#121331'; // Example: A dark color for text
  const secondaryColor = '#b8860b';   // Example: Your accent gold/yellow
  const primaryButtonTextColor = '#ffffff'; // White for text on a solid button

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-lg w-full">
        
        {/* --- 1. CENTRAL ANIMATION & STYLISH TEXT --- */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            4
          </span>
          <lord-icon
              src="https://cdn.lordicon.com/anmsyuqd.json" // A "searching/not found" icon
              trigger="loop"
              delay="1500"
              colors={`primary:${primaryTextColor},secondary:${secondaryColor}`}
              style={{ width: '150px', height: '150px' }}>
          </lord-icon>
          <span className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            4
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Oops! You seem to be lost.
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          The page you're looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track!
        </p>

        {/* --- 2. BUTTONS WITH ANIMATED ICONS --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default" // Changed to default for a primary action
            onClick={() => window.history.back()}
            className="group" // Added for hover effects on the icon
          >
            <lord-icon
                src="https://cdn.lordicon.com/vdufajob.json" // Back arrow icon
                trigger="hover"
                target="button"
                colors={`primary:${primaryButtonTextColor}`}
                style={{ width: '24px', height: '24px', marginRight: '8px' }}>
            </lord-icon>
            Go Back
          </Button>

          <Button
            variant="outline"
            onClick={handleGoHome}
            className="group" // Added for hover effects on the icon
          >
            <lord-icon
                src="https://cdn.lordicon.com/osuxyevn.json" // Home icon
                trigger="hover"
                target="button"
                colors={`primary:${primaryTextColor}`}
                style={{ width: '24px', height: '24px', marginRight: '8px' }}>
            </lord-icon>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;