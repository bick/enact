export function EnterpriseProcess() {
  const steps = [
    {
      title: 'Discovery & Planning',
      description:
        'We begin with a thorough analysis of your requirements, goals, and technical landscape to create a tailored implementation strategy.',
      icon: '🔍',
    },
    {
      title: 'Architecture Design',
      description:
        'Our experts design a scalable architecture that aligns with your business needs and technical requirements.',
      icon: '📐',
    },
    {
      title: 'Development & Integration',
      description:
        'We build your solution using modern technologies and best practices, ensuring seamless integration with existing systems.',
      icon: '💻',
    },
    {
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization ensure your solution meets enterprise standards.',
      icon: '⚡',
    },
    {
      title: 'Deployment & Training',
      description:
        'Smooth deployment followed by comprehensive training ensures your team is ready to manage the solution.',
      icon: '🚀',
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance to keep your solution running at peak performance.',
      icon: '🛠️',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-4">
            Our Implementation Process
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            A structured approach to ensure your headless WordPress implementation is successful
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md dark:hover:shadow-gray-700/50 transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-lg">
                {index + 1}
              </div>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
