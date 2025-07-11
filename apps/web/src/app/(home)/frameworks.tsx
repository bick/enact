import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const frameworks = [
  {
    name: 'Next.js',
    description: 'The React framework for production',
    icon: '⚡',
    docsUrl: 'https://docs.headlesswp.com/nextjs',
  },
  {
    name: 'Gatsby',
    description: 'The fastest frontend for the web',
    icon: '🚀',
    docsUrl: 'https://docs.headlesswp.com/gatsby',
  },
  {
    name: 'Remix',
    description: 'Build better websites',
    icon: '🎯',
    docsUrl: 'https://docs.headlesswp.com/remix',
  },
  {
    name: 'Astro',
    description: 'Build faster websites',
    icon: '✨',
    docsUrl: 'https://docs.headlesswp.com/astro',
  },
];

export function FrameworksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent to-white/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Supported React Frameworks</h2>
        <p className="text-xl text-center mb-12 text-white/70">Get started with your favorite React framework</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {frameworks.map((framework) => (
            <div
              key={framework.name}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:border-white/20"
            >
              <div className="text-4xl mb-4">{framework.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{framework.name}</h3>
              <p className="text-white/70 mb-6">{framework.description}</p>
              <Button
                asChild
                variant="outline"
                className="w-full bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20"
              >
                <Link href={framework.docsUrl} target="_blank" rel="noopener noreferrer">
                  View Documentation
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
