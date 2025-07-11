export function EnterpriseHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Enterprise-Grade Headless WordPress Solutions
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Transform your digital presence with our expert headless WordPress consulting and development services. We
            help enterprises build scalable, performant, and future-proof web applications.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              Schedule a Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 font-medium rounded-lg transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
