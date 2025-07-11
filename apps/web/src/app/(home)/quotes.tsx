'use client';

const quotes = [
  {
    text: 'HeadlessWP has transformed how we build our React applications. The GraphQL API is a game-changer!',
    author: 'Sarah Johnson',
    role: 'Senior Frontend Developer',
  },
  {
    text: 'The seamless integration with Next.js made our development process incredibly smooth.',
    author: 'Michael Chen',
    role: 'Tech Lead',
  },
  {
    text: 'We`&quot;ve seen a 40% improvement in our site&quot;s performance since switching to HeadlessWP.',
    author: 'Emily Rodriguez',
    role: 'Product Manager',
  },
];

export function QuotesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="flex-1">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 h-full">
                <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
                  &quot;{quote.text}&quot;
                </blockquote>
                <div className="text-white/70">
                  <p className="font-semibold">{quote.author}</p>
                  <p className="text-sm">{quote.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
