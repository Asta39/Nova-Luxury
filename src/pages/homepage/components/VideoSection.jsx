import React from 'react';

const VideoSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience the Extraordinary
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our 3D renders provide a glimpse into the meticulously planned and beautifully executed events we create. See your vision come to life before it even happens.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/assets/render.mp4" // **IMPORTANT: Replace with your actual video path**
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;