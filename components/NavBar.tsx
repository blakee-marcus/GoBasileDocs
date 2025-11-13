'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Overview' },
  { href: '/color', label: 'Color' },
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

  return (
    <header className='sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur'>
      <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6'>
        <Link href='/' className='text-sm font-semibold tracking-tight'>
          GoBasile Brand Guidelines
        </Link>

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
    </header>
  );
}

// components/CodeBlock.tsx
import type { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className='mt-4 overflow-x-auto rounded-lg border border-border bg-muted/40 p-4 text-xs leading-relaxed text-muted-foreground'>
      <code>{children}</code>
    </pre>
  );
}
