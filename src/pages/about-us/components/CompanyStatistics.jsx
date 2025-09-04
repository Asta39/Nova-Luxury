import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyStatistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    events: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef(null);

  const statistics = [
    {
      icon: "Calendar",
      value: 50,
      suffix: "+",
      label: "Successful Events",
      description: "Luxury celebrations delivered with excellence"
    },
    {
      icon: "Users",
      value: 250,
      suffix: "+",
      label: "Happy Clients",
      description: "Families and corporations who trust us"
    },
    {
      icon: "Clock",
      value: 5,
      suffix: "",
      label: "Years Experience",
      description: "Building luxury event experiences"
    },
    {
      icon: "Star",
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    statistics?.forEach((stat, index) => {
      let currentValue = 0;
      const increment = stat?.value / steps;
      
      const timer = setInterval(() => {
        currentValue += increment;
        
        setAnimatedStats(prev => ({
          ...prev,
          [getStatKey(index)]: Math.min(Math.floor(currentValue), stat?.value)
        }));

        if (currentValue >= stat?.value) {
          clearInterval(timer);
          setAnimatedStats(prev => ({
            ...prev,
            [getStatKey(index)]: stat?.value
          }));
        }
      }, stepDuration);
    });
  };

  const getStatKey = (index) => {
    const keys = ['events', 'clients', 'years', 'satisfaction'];
    return keys?.[index];
  };

  const getAnimatedValue = (index) => {
    const keys = ['events', 'clients', 'years', 'satisfaction'];
    return animatedStats?.[keys?.[index]];
  };

  return (
    <section ref={sectionRef} className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Impact in Numbers
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These numbers represent more than statistics – they reflect the trust our clients place in us 
            and the memorable experiences we've created together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics?.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-background rounded-3xl luxury-shadow-card border border-border hover:luxury-shadow-modal luxury-transition group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 luxury-transition">
                <Icon 
                  name={stat?.icon} 
                  size={32} 
                  className="text-secondary group-hover:scale-110 luxury-transition" 
                />
              </div>

              {/* Animated Number */}
              <div className="mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {getAnimatedValue(index)}
                  <span className="text-secondary">{stat?.suffix}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {stat?.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground">
                {stat?.description}
              </p>

              {/* Progress Bar for Satisfaction */}
              {stat?.label === "Client Satisfaction" && (
                <div className="mt-4">
                  <div className="w-full bg-accent rounded-full h-2">
                    <div 
                      className="bg-secondary h-2 rounded-full luxury-transition"
                      style={{ 
                        width: `${getAnimatedValue(index)}%`,
                        transition: 'width 2s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-background rounded-3xl luxury-shadow-card border border-border">
            <Icon name="Award" size={24} className="text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">Industry Awards</h4>
            <p className="text-sm text-muted-foreground">
              Best Luxury Event Planner 2022 & 2023
            </p>
          </div>
          
          <div className="text-center p-6 bg-background rounded-3xl luxury-shadow-card border border-border">
            <Icon name="Shield" size={24} className="text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">ISO Certified</h4>
            <p className="text-sm text-muted-foreground">
              Quality Management System Certified
            </p>
          </div>
          
          <div className="text-center p-6 bg-background rounded-3xl luxury-shadow-card border border-border">
            <Icon name="Leaf" size={24} className="text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">Eco-Certified</h4>
            <p className="text-sm text-muted-foreground">
              Sustainable Event Planning Pioneer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStatistics;