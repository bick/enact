import { FaWordpress } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 pt-48 pb-32 relative">
      <div className="text-center mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          Turn WordPress Into the Ultimate Headless CMS
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          Transform your WordPress site into a powerful headless CMS with modern features, blazing-fast performance, and
          seamless integration capabilities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild={true} variant={'secondary'}>
            <Link href={'#'}>View Documentation</Link>
          </Button>
          <button className="flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors">
            <FaWordpress className="mr-2 text-xl" /> Download on WordPress.org
          </button>
        </div>
      </div>
    </section>
  );
}
