import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSnippet = ({ testimonial }) => {
  const { name, role, company, content, avatar, rating } = testimonial;

  return (
    <div className="bg-accent/50 border border-border rounded-lg p-6 luxury-shadow-card">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)]?.map((_, index) => (
          <Icon
            key={index}
            name="Star"
            size={16}
            className={index < rating ? "text-secondary fill-current" : "text-border"}
          />
        ))}
      </div>
      <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4">
        "{content}"
      </blockquote>
      <div className="flex items-center space-x-3">
        <Image
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-primary">{name}</p>
          <p className="text-xs text-muted-foreground">
            {role} {company && `at ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSnippet;