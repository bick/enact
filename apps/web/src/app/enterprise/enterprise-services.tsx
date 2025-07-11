export function EnterpriseServices() {
  const services = [
    {
      title: 'Strategic Consulting',
      description:
        'Expert guidance on headless WordPress architecture, technology stack selection, and implementation strategy tailored to your business needs.',
      icon: '🎯',
    },
    {
      title: 'Custom Development',
      description:
        'Bespoke headless WordPress solutions built with modern frameworks like Next.js, React, and Vue.js, ensuring optimal performance and scalability.',
      icon: '⚡',
    },
    {
      title: 'API Design & Integration',
      description:
        'Robust REST and GraphQL API development, third-party integrations, and seamless data flow between systems.',
      icon: '🔌',
    },
    {
      title: 'Performance Optimization',
      description:
        'Comprehensive performance audits and optimizations to ensure lightning-fast page loads and optimal user experience.',
      icon: '🚀',
    },
    {
      title: 'Security & Compliance',
      description:
        'Enterprise-grade security implementation, compliance with industry standards, and regular security audits.',
      icon: '🛡️',
    },
    {
      title: 'Training & Support',
      description:
        'Comprehensive training programs and ongoing support to ensure your team can effectively manage and maintain the solution.',
      icon: '📚',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-4">
            Comprehensive Enterprise Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Our end-to-end services ensure your headless WordPress implementation is successful from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
