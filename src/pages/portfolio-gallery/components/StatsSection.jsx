import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'Calendar',
      number: '500+',
      label: 'Events Executed',
      description: 'Successful celebrations across Kenya'
    },
    {
      icon: 'Users',
      number: '50K+',
      label: 'Happy Guests',
      description: 'Memorable experiences created'
    },
    {
      icon: 'Star',
      number: '4.9/5',
      label: 'Client Rating',
      description: 'Average satisfaction score'
    },
    {
      icon: 'Award',
      number: '15+',
      label: 'Industry Awards',
      description: 'Recognition for excellence'
    }
  ];

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Portfolio by Numbers
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Every event in our portfolio represents our commitment to excellence and our clients' trust in our expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-secondary-foreground" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                {stat?.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat?.label}
              </div>
              <div className="text-sm opacity-80">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;