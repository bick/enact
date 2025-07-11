export function EnterpriseBenefits() {
  const benefits = [
    {
      title: 'Expert Team',
      description:
        'Work with certified WordPress and headless development experts with years of enterprise experience.',
      icon: '👥',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions that perfectly match your business requirements and technical needs.',
      icon: '🎯',
    },
    {
      title: 'Scalable Architecture',
      description: 'Future-proof architecture that grows with your business needs.',
      icon: '📈',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures and compliance with industry standards.',
      icon: '🔒',
    },
    {
      title: 'Performance Optimized',
      description: 'Lightning-fast performance through optimized code and infrastructure.',
      icon: '⚡',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your solution runs smoothly.',
      icon: '🛠️',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-4">
            Why Choose Our Enterprise Services
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            We deliver exceptional value through our comprehensive enterprise solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 dark:bg-gray-900 rounded-xl hover:shadow-lg dark:hover:shadow-gray-700/50 transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
