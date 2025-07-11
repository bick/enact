'use client';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FaWordpress } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const isHomepage = pathname === '/' || pathname === '';
  const megaMenuRef = React.useRef<HTMLDivElement>(null);
  const productButtonRef = React.useRef<HTMLAnchorElement>(null);

  const menuItems = [
    { name: 'Themes', href: '/themes', hasMegaMenu: true },
    { name: 'Docs', href: 'https://docs.headlesswp.com' },
    { name: 'Community', href: '/community' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Blog', href: '/blog' },
    { name: 'Changelog', href: '/changelog' },
  ];

  const megaMenuItems = [
    {
      category: 'Core Features',
      items: [
        { name: 'Headless CMS', href: '/product/headless-cms' },
        { name: 'REST & GraphQL API', href: '/product/api' },
        { name: 'Performance Optimization', href: '/product/performance' },
        { name: 'Security Features', href: '/product/security' },
      ],
    },
    {
      category: 'Integrations',
      items: [
        { name: 'Next.js Integration', href: '/product/next-js' },
        { name: 'Gatsby Integration', href: '/product/gatsby' },
        { name: 'React Integration', href: '/product/react' },
        { name: 'Vue Integration', href: '/product/vue' },
      ],
    },
    {
      category: 'Extensions',
      items: [
        { name: 'Plugin Ecosystem', href: '/product/plugins' },
        { name: 'Headless Themes', href: '/product/themes' },
        { name: 'Custom Fields', href: '/product/custom-fields' },
        { name: 'Block Editor Support', href: '/product/blocks' },
      ],
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 0);
      // Only hide the navbar if the mega menu is not open
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !activeMegaMenu) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeMegaMenu]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        productButtonRef.current &&
        !productButtonRef.current.contains(event.target as Node)
      ) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemHover = (itemName: string, hasMegaMenu?: boolean) => {
    if (hasMegaMenu) {
      setActiveMegaMenu(itemName);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleMenuItemLeave = () => {
    // We don't immediately close the mega menu to allow users to move their cursor to it
    // The click outside handler will take care of closing it when appropriate
  };

  return (
    <nav
      className={cn(
        'w-full z-40 transition-all duration-300 ease-in-out',
        isHomepage ? 'fixed top-0 left-0 right-0' : 'sticky top-0 bg-background',
        isMenuOpen || activeMegaMenu ? 'bg-black' : '',
        (isHomepage && hasScrolled) || !isHomepage ? 'bg-b max-h-fit' : '',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image className="w-auto block mr-4" src="/assets/apollo.png" width={36} height={36} alt="HeadlessWP" />
            <span className="text-xl font-bold">HeadlessWP</span>
          </Link>
        </div>
        <div className="hidden md:flex md:flex-1 ml-8">
          <div className="flex items-center space-x-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                ref={item.name === 'Themes' ? productButtonRef : undefined}
                className={cn(
                  'text-[15px] font-medium transition-colors rounded-[8px] px-2 py-1 flex items-center',
                  activeMegaMenu === item.name
                    ? 'text-foreground bg-white/10'
                    : pathname === item.href
                      ? 'text-foreground bg-white/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/10',
                )}
                onMouseEnter={() => handleMenuItemHover(item.name, item.hasMegaMenu)}
                onMouseLeave={handleMenuItemLeave}
                onClick={() => item.hasMegaMenu && setActiveMegaMenu(activeMegaMenu === item.name ? null : item.name)}
              >
                {item.name}
                {item.hasMegaMenu && (
                  <ChevronDown
                    className={cn(
                      'ml-1 h-4 w-4 transition-transform duration-200',
                      activeMegaMenu === item.name ? 'rotate-180' : '',
                    )}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-end flex-1">
          <Button asChild variant="secondary" className="text-[15px]">
            <Link href="https://wordpress.org" target="_blank" rel="noopener noreferrer">
              <FaWordpress className="text-xl mr-2" /> Download on WordPress.org
            </Link>
          </Button>
        </div>
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {/* Mega Menu */}
      <div
        ref={megaMenuRef}
        className={cn(
          'absolute left-0 right-0 w-full bg-black border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out',
          activeMegaMenu === 'Themes' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        )}
        onMouseEnter={() => setActiveMegaMenu('Themes')}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {megaMenuItems.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} className="text-foreground/70 hover:text-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Get Started</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Transform your WordPress site into a modern headless architecture in minutes.
              </p>
              <Button asChild className="w-full">
                <Link href="/product/demo">View Demo</Link>
              </Button>
              <div className="mt-4">
                <Link
                  href="/product/pricing"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  View pricing →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 z-50 bg-black border-b shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="px-4 py-5 space-y-4">
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.hasMegaMenu ? (
                <div className="space-y-2">
                  <button
                    className="flex items-center justify-between w-full text-base font-medium text-foreground/70 transition-colors hover:text-foreground py-2"
                    onClick={() => setActiveMegaMenu(activeMegaMenu === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        'ml-1 h-4 w-4 transition-transform duration-200',
                        activeMegaMenu === item.name ? 'rotate-180' : '',
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'pl-4 space-y-2 overflow-hidden transition-all duration-300',
                      activeMegaMenu === item.name ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0',
                    )}
                  >
                    {megaMenuItems.slice(0, 2).map((category, index) => (
                      <div key={index} className="py-2 border-l border-white/10 pl-4">
                        <h4 className="text-sm font-semibold mb-2">{category.category}</h4>
                        <ul className="space-y-2">
                          {category.items.slice(0, 2).map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.href}
                                className="block text-sm text-foreground/70 hover:text-foreground"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-base font-medium text-foreground/70 transition-colors hover:text-foreground py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="pt-4">
            <Button asChild variant="secondary" className="w-full text-[15px]">
              <Link href="#" onClick={() => setIsMenuOpen(false)}>
                <FaWordpress className="mr-2" /> Download on WordPress.org
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
