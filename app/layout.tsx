import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/components/NavBar';
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
    <html lang='en' className={inter.variable}>
      <body className='min-h-screen bg-background text-foreground antialiased'>
        <div className='mx-auto max-w-5xl min-h-screen flex flex-col px-4 py-8 md:px-6 lg:px-8'>
          <header className='border-b border-border pb-4'>
            <div className='flex items-start justify-between gap-4'>
              <div className='space-y-1'>
                <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>
                  GoBasile design system
                </p>
                <h1 className='text-lg font-semibold tracking-tight'>UI and UX principles</h1>
              </div>

              <div className='hidden md:block text-right text-xs text-muted-foreground'>
                <p className='font-medium'>Internal documentation</p>
                <p className='text-[0.7rem]'>Built for repair shops and technicians</p>
              </div>
            </div>

            <NavBar />
          </header>

          <main className='flex-1 py-8'>{children}</main>

          <footer className='border-t border-border pt-4 text-xs text-muted-foreground'>
            <p>GoBasile — utilitarian design for professional repair workflows.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
