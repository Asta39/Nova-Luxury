import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoTestimonials = [
    {
      id: 1,
      clientName: "James & Mary Oloo",
      eventType: "Wedding",
      thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://player.vimeo.com/video/example1",
      duration: "2:45",
      description: "Watch James and Mary share their wedding day experience"
    },
    {
      id: 2,
      clientName: "Safari Lodge Resort",
      eventType: "Corporate Event",
      thumbnailUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://player.vimeo.com/video/example2",
      duration: "3:20",
      description: "Corporate testimonial about their annual conference"
    },
    {
      id: 3,
      clientName: "The Ngugi Family",
      eventType: "Anniversary",
      thumbnailUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://player.vimeo.com/video/example3",
      duration: "1:55",
      description: "Golden anniversary celebration testimonial"
    }
  ];

  const handleVideoPlay = (videoId) => {
    setActiveVideo(videoId);
  };

  return (
    <section className="py-16 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="content-left-layout">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Video Testimonials
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Hear directly from our clients as they share their experiences and the magic 
            of their special events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials?.map((video) => (
              <div
                key={video?.id}
                className="glassmorphic-dark rounded-2xl overflow-hidden luxury-transition hover:glassmorphic-dark-hover group cursor-pointer"
                onClick={() => handleVideoPlay(video?.id)}
              >
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={video?.thumbnailUrl}
                    alt={`${video?.clientName} testimonial`}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 luxury-transition">
                    <div className="w-16 h-16 glassmorphic-cta rounded-full flex items-center justify-center group-hover:scale-110 luxury-transition">
                      <Icon name="Play" size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 glassmorphic-filter px-2 py-1 rounded-lg">
                    <span className="text-white text-sm">{video?.duration}</span>
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {video?.clientName}
                  </h3>
                  <p className="text-secondary text-sm mb-3">
                    {video?.eventType}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {video?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Video Modal/Player would go here in a real implementation */}
          {activeVideo && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
              <div className="glassmorphic-dark rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white text-xl font-semibold">
                    {videoTestimonials?.find(v => v?.id === activeVideo)?.clientName}
                  </h3>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="text-white/70 hover:text-white luxury-transition"
                  >
                    <Icon name="X" size={24} />
                  </button>
                </div>
                <div className="aspect-video bg-black rounded-xl flex items-center justify-center">
                  <p className="text-white/70 text-center">
                    Video player would be integrated here
                    <br />
                    <small className="text-white/50">
                      (Vimeo, YouTube, or custom video player)
                    </small>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;