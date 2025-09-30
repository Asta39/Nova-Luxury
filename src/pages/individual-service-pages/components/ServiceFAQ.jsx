import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFAQ = ({ service }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  if (!service || !service?.faqs) return null;

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our {service?.name?.toLowerCase()} services
          </p>
        </div>

        <div className="space-y-4">
          {service?.faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-surface rounded-lg luxury-shadow-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent luxury-transition"
              >
                <span className="font-semibold text-primary pr-4">
                  {faq?.question}
                </span>
                <Icon
                  name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-secondary flex-shrink-0"
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 luxury-transition">
              <Icon name="Phone" size={16} />
              <span>Call us at +254 703 334 359</span>
            </button>
            <button className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 luxury-transition">
              <Icon name="Mail" size={16} />
              <span>Email info@novaluxuryeventske.com</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;