import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GoBasile Design System',
  description: 'Internal documentation for GoBasile UI and UX design principles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.variable} suppressHydrationWarning>
      <body className='min-h-screen bg-background text-foreground antialiased'>
        <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,91,79,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(216,138,89,0.16),_transparent_55%)]'>
          <div className='mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8 md:px-6 lg:px-8'>
            <header className='flex items-center justify-between border-b border-border pb-4'>
              <div className='space-y-1'>
                <p className='text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase'>
                  GoBasile design system
                </p>
                <h1 className='text-lg font-semibold tracking-tight'>UI and UX principles</h1>
              </div>
              <div className='hidden text-right text-xs text-muted-foreground md:block'>
                <p className='font-medium'>Internal documentation</p>
                <p className='text-[0.7rem]'>Built for repair shops and technicians</p>
              </div>
            </header>

            <main className='flex-1 py-8'>{children}</main>

            <footer className='border-t border-border pt-4 text-xs text-muted-foreground'>
              <p>GoBasile - utilitarian design for professional repair workflows.</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
