import React from 'react';

const features = [
  {
    title: 'GraphQL API',
    description: 'Built-in GraphQL API for efficient data fetching and real-time updates',
    icon: '🚀',
  },
  {
    title: 'Custom Post Types',
    description: 'Easily create and manage custom post types with a user-friendly interface',
    icon: '📝',
  },
  {
    title: 'Media Management',
    description: 'Advanced media handling with automatic optimization and CDN support',
    icon: '🖼️',
  },
  {
    title: 'User Authentication',
    description: 'Secure user authentication and role-based access control',
    icon: '🔐',
  },
  {
    title: 'Webhooks',
    description: 'Real-time updates with configurable webhooks for seamless integration',
    icon: '🔔',
  },
  {
    title: 'SEO Ready',
    description: 'Built-in SEO features and metadata management for better visibility',
    icon: '🔍',
  },
];

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Powerful Features for Modern Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:border-white/20"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
