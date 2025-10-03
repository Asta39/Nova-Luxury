// src/data/legalContent.jsx

import React from 'react';

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-bold text-lg text-primary mb-2">{title}</h3>
    <div className="space-y-3 text-on-surface-variant">{children}</div>
  </div>
);

export const termsContent = (
  <>
    <Section title="1. Introduction & Agreement">
      <p>
        Welcome to Nova Luxury Events. These Terms of Service ("Terms") govern your use of our website located at [novaluxuryeventske.com] and any related services provided by us. By accessing our website or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
      </p>
    </Section>
    <Section title="2. Event Planning Services">
      <p>
        We provide bespoke luxury event planning, coordination, and management services. The specific scope, fees, and deliverables for any event will be detailed in a separate, legally binding Service Agreement signed by both the client and Nova Luxury Events.
      </p>
    </Section>
    <Section title="3. Client Responsibilities">
      <p>
        To ensure the successful execution of your event, you agree to provide timely and accurate information, make decisions within the agreed-upon timeframe, and fulfill all payment obligations as outlined in the Service Agreement.
      </p>
    </Section>
    <Section title="4. Intellectual Property">
      <p>
        All content on this website, including text, graphics, logos, and images, is the property of Nova Luxury Events or its content suppliers and protected by international copyright laws. Event concepts, designs, and plans created by us remain our intellectual property until full payment for services is complete.
      </p>
    </Section>
    <Section title="5. Limitation of Liability">
      <p>
        Nova Luxury Events shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your access to or use of our services. Our total liability for any claim arising out of or relating to these Terms or our services is limited to the amount paid by you for the services in question.
      </p>
    </Section>
    <Section title="6. Changes to Terms">
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
      </p>
    </Section>
  </>
);

export const privacyContent = (
  <>
    <Section title="1. Introduction">
      <p>
        Nova Luxury Events ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>
    </Section>
    <Section title="2. Information We Collect">
      <p>
        We may collect personal information that you voluntarily provide to us when you fill out a contact form, book a consultation, or otherwise contact us.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Personal Data:</strong> Name, phone number, email address.</li>
        <li><strong>Event Data:</strong> Event type, date, guest count, budget, and other details you provide about your event vision.</li>
        <li><strong>Derivative Data:</strong> Information our servers automatically collect, such as your IP address, browser type, and pages visited.</li>
      </ul>
    </Section>
    <Section title="3. Use of Your Information">
      <p>
        Having accurate information permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Create and manage your event proposal.</li>
        <li>Email you regarding your inquiry or event.</li>
        <li>Respond to your service requests.</li>
        <li>Send you a newsletter, if you have opted in.</li>
      </ul>
    </Section>
    <Section title="4. Disclosure of Your Information">
      <p>
        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties (vendors, suppliers) who assist us in operating our business and servicing you, so long as those parties agree to keep this information confidential.
      </p>
    </Section>
    <Section title="5. Security of Your Information">
      <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
      </p>
    </Section>
    <Section title="6. Your Data Rights">
      <p>
        You have the right to request access to the personal data we hold about you, to request corrections, or to request that we delete your personal data. To make such a request, please contact us at our official email address.
      </p>
    </Section>
  </>
);