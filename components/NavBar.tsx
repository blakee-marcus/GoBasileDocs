'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/colors', label: 'Color' },
  { href: '/typography', label: 'Typography' },
  { href: '/spacing', label: 'Spacing' },
  { href: '/layout', label: 'Layout' },
  { href: '/components', label: 'Components' },
  { href: '/icons', label: 'Icons' },
  { href: '/interactions', label: 'Interactions' },
  { href: '/principles', label: 'Principles' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6'>
        <Link
          href='/'
          className='text-sm font-semibold tracking-tight text-foreground flex items-center gap-2'>
          <span className='inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[var(--brand-basil)] text-[10px] font-bold text-white'>
            GB
          </span>
          <span>GoBasile Brand Guidelines</span>
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden inline-flex items-center rounded-md p-2 text-muted-foreground hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-basil)] focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          aria-label='Toggle navigation'>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop nav */}
        <nav className='hidden gap-1 text-xs md:flex'>
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-basil)] focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? 'bg-[var(--brand-basil)] text-white shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className='md:hidden border-t border-border/80 bg-card/95 backdrop-blur'>
          <nav className='mx-auto flex max-w-5xl flex-col gap-1 px-2 py-3 text-sm'>
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-basil)] focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive
                      ? 'bg-[var(--brand-basil)] text-white shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                  }`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
