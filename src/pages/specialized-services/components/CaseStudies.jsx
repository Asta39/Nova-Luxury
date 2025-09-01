import React from 'react';
import AppImage from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CaseStudies = ({ caseStudies }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {caseStudies?.map((study) => (
        <div key={study?.id} className="bg-white rounded-2xl border border-border overflow-hidden shadow-lg">
          {/* Main Image */}
          <div className="relative h-64 overflow-hidden">
            <AppImage
              src={study?.image}
              alt={study?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">
              {study?.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {study?.description}
            </p>
            
            {/* Services Used */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-primary mb-2">Services Applied:</h4>
              <div className="flex flex-wrap gap-2">
                {study?.services?.map((service, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Results */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-primary mb-2">Key Results:</h4>
              <ul className="space-y-1">
                {study?.results?.map((result, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle" size={14} className="text-secondary flex-shrink-0" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Before/After Images */}
            {study?.beforeImage && study?.afterImage && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-2">Before</h5>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <AppImage
                      src={study?.beforeImage}
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-medium text-muted-foreground mb-2">After</h5>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <AppImage
                      src={study?.afterImage}
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudies;