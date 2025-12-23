import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer';
import FloatingContactButtons from './ui/FloatingContactButtons';
import CookieConsent from "react-cookie-consent"; 


// --- Function to initialize Google Analytics ---
// We will call this ONLY after the user accepts cookies.
const initializeAnalytics = () => {
  const measurementId = 'G-6BK6W50113';
  
  // Check if the script already exists to avoid duplicates
  if (document.getElementById('google-analytics-script')) return;

  const script = document.createElement('script');
  script.id = 'google-analytics-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', measurementId);
  
  console.log("Google Analytics initialized.");
};


const MainLayout = () => {
  
  // This function will be called when the user clicks "I understand"
  const handleAcceptCookie = () => {
    initializeAnalytics();
    // If you have other tracking scripts (like Facebook Pixel), initialize them here too.
  };

  return (
    <>
      <main>
        {/* The Outlet component renders the matched child route element */}
        <Outlet />
      </main>
     
      <FloatingContactButtons />

      
      {/* --- THIS IS THE COOKIE BANNER --- */}
    
      {/* --- REVISED AND STYLED COOKIE BANNER --- */}
      <CookieConsent
        location="bottom"
        buttonText="Accept & Continue"
        cookieName="novaLuxuryConsentCookie"
        expires={150}
        onAccept={handleAcceptCookie}
        
        // Main container styling for the floating, glassmorphic effect
        style={{
          background: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
          backdropFilter: "blur(10px)", // The key to the frosted glass effect
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#333", // Darker text for readability on a light background
          borderRadius: "16px", // iOS-style rounded corners
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)", // Soft shadow to lift the banner
          
          // Centering logic
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "auto",
          maxWidth: "90%", // Ensures it doesn't touch the edges on mobile
          
          // Flexbox for alignment
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          gap: "1rem", // Space between text and button
        }}

        // Style for the button to match your site's branding
        buttonStyle={{
          background: "#000000", // Black background like your CTA buttons
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "9999px", // Creates the pill shape
          padding: "12px 24px",
        }}

        // Style for the text content
        contentStyle={{
          margin: "0",
          flex: "1", // Allows text to take up available space
        }}
      >
        We use cookies to enhance your experience and analyze site traffic.
      </CookieConsent>


    </>
  );
};

export default MainLayout;