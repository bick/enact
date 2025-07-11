export function EnterpriseCTA() {
  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation with our experts to discuss your enterprise headless WordPress needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contact@headlesswp.com"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 text-gray-900 font-medium rounded-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
