import Navbar from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { CheckCircle2, Code2, Cpu, Database, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaWordpress } from 'react-icons/fa';

export default function ProductPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-8 pt-48 pb-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
              Headless WordPress Plugin
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Transform your WordPress site into a powerful headless CMS with modern features, blazing-fast performance,
              and seamless integration capabilities.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary">
                <Link href="#">View Documentation</Link>
              </Button>
              <button className="flex items-center px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-medium rounded-lg transition-colors">
                <FaWordpress className="mr-2 text-xl" /> Download on WordPress.org
              </button>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              Powerful Features for Modern Development
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Cpu className="w-8 h-8" />}
                title="Performance Optimized"
                description="Lightning-fast API responses with built-in caching and optimization features."
              />
              <FeatureCard
                icon={<Code2 className="w-8 h-8" />}
                title="Developer Friendly"
                description="Clean, well-documented REST API with TypeScript support and comprehensive documentation."
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8" />}
                title="Enterprise Security"
                description="Advanced security features including API key authentication, rate limiting, and request validation."
              />
              <FeatureCard
                icon={<Database className="w-8 h-8" />}
                title="Data Flexibility"
                description="Custom post types, taxonomies, and ACF support out of the box."
              />
              <FeatureCard
                icon={<Zap className="w-8 h-8" />}
                title="Real-time Updates"
                description="Webhook support for instant content updates across your applications."
              />
              <FeatureCard
                icon={<CheckCircle2 className="w-8 h-8" />}
                title="Reliable Support"
                description="Dedicated support team and regular updates to ensure your success."
              />
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="relative overflow-hidden bg-muted/50">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Technical Specifications</h2>
            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">API Endpoints</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 mr-2" />
                    <div>
                      <code className="bg-muted px-2 py-1 rounded text-white">GET /wp-json/wp/v2/posts</code>
                      <p className="text-white/70 mt-1">Retrieve posts with pagination and filtering</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 mr-2" />
                    <div>
                      <code className="bg-muted px-2 py-1 rounded text-white">GET /wp-json/wp/v2/posts/{'{id}'}</code>
                      <p className="text-white/70 mt-1">Get detailed post information</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-gray-400 mt-1 mr-2" />
                    <div>
                      <code className="bg-muted px-2 py-1 rounded text-white">GET /wp-json/wp/v2/categories</code>
                      <p className="text-white/70 mt-1">Access taxonomy data</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Integration Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <IntegrationExample
                title="Next.js Integration"
                description="Seamless integration with Next.js for static and server-side rendering."
                code={`import { WordPressClient } from '@headlesswp/client';

const client = new WordPressClient({
  baseUrl: 'https://your-wordpress-site.com',
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});

export async function getStaticProps() {
  const posts = await client.getPosts();
  return { props: { posts } };
}`}
              />
              <IntegrationExample
                title="React Integration"
                description="Easy integration with React applications using hooks and components."
                code={`import { useWordPressPosts } from '@headlesswp/react';

function BlogList() {
  const { posts, loading, error } = useWordPressPosts({
    baseUrl: 'https://your-wordpress-site.com',
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret'
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </article>
      ))}
    </div>
  );
}`}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:border-white/20">
      <div className="text-gray-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

function IntegrationExample({ title, description, code }: { title: string; description: string; code: string }) {
  return (
    <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
        <code className="text-white">{code}</code>
      </pre>
    </div>
  );
}
