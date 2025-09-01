import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs?.map((faq, index) => (
        <div key={index} className="bg-white rounded-2xl border border-border overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface luxury-transition"
          >
            <h3 className="font-semibold text-primary">{faq?.question}</h3>
            <Icon 
              name="ChevronDown" 
              size={20} 
              className={`text-muted-foreground luxury-transition ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4 border-t border-border bg-surface/30">
              <p className="text-muted-foreground leading-relaxed pt-4">
                {faq?.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;