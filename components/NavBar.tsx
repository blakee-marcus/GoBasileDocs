'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  { href: '/', label: 'Overview' },
  { href: '/colors', label: 'Colors' },
  { href: '/components', label: 'Components' },
  { href: '/icons', label: 'Icons' },
  { href: '/interactions', label: 'Interactions' },
  { href: '/layout', label: 'Layout' },
  { href: '/principles', label: 'Principles' },
  { href: '/spacing', label: 'Spacing' },
  { href: '/typography', label: 'Typography' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='flex flex-wrap gap-2 text-xs mt-4'>
      {pages.map((page) => {
        const active = pathname === page.href;

        return (
          <Link
            key={page.href}
            href={page.href}
            className={`px-3 py-1 rounded-full border transition-colors
              ${
                active
                  ? 'border-[var(--brand-basil)] bg-[var(--brand-basil)]/10 text-foreground'
                  : 'border-border/60 bg-muted/40 text-muted-foreground hover:bg-muted/70'
              }`}>
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}
