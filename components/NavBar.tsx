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
    <header className='sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href='/' className='text-sm font-semibold tracking-tight'>
          GoBasile Brand Guidelines
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden p-2 text-muted-foreground hover:text-foreground'>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop nav */}
        <nav className='hidden gap-2 text-xs md:flex'>
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 font-medium transition-colors ${
                  isActive
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className='md:hidden border-t border-border bg-background'>
          <nav className='flex flex-col p-2 text-sm'>
            {navItems.map((item) => {
              const isActive =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 transition-colors ${
                    isActive
                      ? 'bg-muted text-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
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
