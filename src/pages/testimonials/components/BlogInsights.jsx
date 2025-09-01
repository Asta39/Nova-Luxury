import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BlogInsights = () => {
  const blogPosts = [
    {
      id: 1,
      title: "2024 Wedding Trends: Incorporating Kenyan Cultural Elements",
      excerpt: "Discover how modern couples are blending traditional Kenyan customs with contemporary luxury wedding planning to create truly unique celebrations.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Wedding Planning",
      readTime: "5 min read",
      publishDate: "2024-08-25",
      author: "Grace Wanjiku"
    },
    {
      id: 2,
      title: "Corporate Event Planning: Creating Memorable Brand Experiences",
      excerpt: "Learn the essential strategies for planning corporate events that not only impress attendees but also strengthen your brand identity and business relationships.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Corporate Events",
      readTime: "7 min read",
      publishDate: "2024-08-22",
      author: "Michael Ochieng"
    },
    {
      id: 3,
      title: "Sustainable Event Planning: Eco-Friendly Luxury Celebrations",
      excerpt: "Explore how to create stunning luxury events while maintaining environmental responsibility through sustainable practices and local sourcing.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
      readTime: "6 min read",
      publishDate: "2024-08-20",
      author: "Diana Mutua"
    },
  {
    id: 4,
title: "Venue Selection Guide: Finding the Perfect Location in Nairobi",
excerpt: "A comprehensive guide to selecting the ideal venue for your event, featuring Nairobi's most prestigious locations and hidden gems.",
image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
category: "Venue Planning",
readTime: "8 min read",
publishDate: "2024-08-18",
author: "James Kariuki"
},
{
id: 5,
title: "Budget Planning for Luxury Events: Maximizing Value",
excerpt: "Professional tips on how to allocate your event budget effectively while maintaining the luxury experience your guests expect.",
image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
category: "Budget Planning",
readTime: "4 min read",
publishDate: "2024-08-15",
author: "Patricia Njeri"
},
{
id: 6,
title: "Cultural Celebrations: Honoring Traditions in Modern Events",
excerpt: "How to respectfully incorporate traditional Kenyan cultural elements into contemporary celebrations while maintaining authenticity.",
image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
category: "Cultural Events",
readTime: "6 min read",
publishDate: "2024-08-12",
author: "Samuel Mwangi"
}
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Event Planning Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and cultural insights for creating extraordinary events in Kenya and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts?.map((post) => (
            <article
              key={post?.id}
              className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post?.image}
                  alt={post?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post?.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(post?.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{post?.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors duration-300">
                  {post?.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post?.excerpt}
                </p>

                <div className="flex items-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={14} className="text-secondary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium ml-2">
                    {post?.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            iconName="BookOpen"
            iconPosition="left"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;