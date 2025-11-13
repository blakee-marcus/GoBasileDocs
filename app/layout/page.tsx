import type { Metadata } from 'next';
import { CodeBlock } from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Layout – GoBasile Brand Guidelines',
  description: 'Grid system, page structure, and spacing standards for the GoBasile design system.',
};

export default function LayoutGuidelinesPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:px-6 md:py-12 lg:py-16'>
        {/* Header */}
        <header className='space-y-3 border-b border-border pb-6'>
          <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>
            System
          </p>
          <div className='flex flex-wrap items-end justify-between gap-4'>
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Layout</h1>
              <p className='max-w-2xl text-sm text-muted-foreground'>
                GoBasile's layout system keeps every interface deliberate, organized, and
                utilitarian.
              </p>
            </div>
            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground'>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>Grid</span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Structure
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Responsive
              </span>
            </div>
          </div>
        </header>

        {/* Grid system */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Grid system</h2>
          <p className='text-sm text-muted-foreground'>
            GoBasile uses a responsive 12‑column grid based on Tailwind utilities.
          </p>

          <CodeBlock
            language='tsx'
            code={`<div className='mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3'>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>`}
          />
        </section>

        {/* Structure */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Page structure</h2>
          <p className='text-sm text-muted-foreground'>All pages follow a three‑part hierarchy.</p>

          <CodeBlock
            language='tsx'
            code={`<div className='flex min-h-screen'>
  <aside className='hidden w-64 border-r border-border bg-muted/50 p-4 md:block'>
    <SidebarMenu />
  </aside>
  <main className='flex-1 space-y-6 p-6 pt-16'>
    <PageHeader
      title='Inventory'
      action={<Button className='bg-[var(--brand-basil)] text-white'>Add device</Button>}
    />
    <ContentGrid />
  </main>
</div>`}
          />
        </section>

        {/* Panel layouts */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Panel layouts</h2>
          <p className='text-sm text-muted-foreground'>Use consistent spacing and structure.</p>

          <CodeBlock
            language='tsx'
            code={`<PanelBody title='Device info'>
  <div className='grid gap-4 md:grid-cols-2'>
    <Input label='Model' />
    <Select label='Type' />
  </div>
</PanelBody>`}
          />
        </section>

        {/* Navigation layouts */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Navigation layouts</h2>
          <p className='text-sm text-muted-foreground'>
            Navigation should be predictable and clear.
          </p>

          <CodeBlock
            language='tsx'
            code={`<nav className='flex items-center border-b border-border bg-muted/40 px-4 py-2'>
  <Button variant='ghost'>Overview</Button>
  <Button variant='ghost'>Devices</Button>
  <Button variant='ghost'>Bounties</Button>
</nav>`}
          />
        </section>

        {/* Responsive behavior */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Responsive behavior</h2>
          <p className='text-sm text-muted-foreground'>
            Layouts must adapt without losing hierarchy.
          </p>

          <CodeBlock
            language='tsx'
            code={`<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>`}
          />
        </section>

        {/* Alignment rules */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Alignment rules</h2>
          <p className='text-sm text-muted-foreground'>Keep alignment precise and consistent.</p>

          <CodeBlock
            language='tsx'
            code={`<header className='flex items-center justify-between border-b border-border px-6 py-4'>
  <h1 className='text-lg font-semibold'>Dashboard</h1>
  <Button className='bg-(--brand-basil) text-white'>New listing</Button>
</header>`}
          />
        </section>

        {/* Page templates */}
        <section className='space-y-4 border-t border-border pt-6'>
          <h2 className='text-lg font-semibold'>Page templates</h2>
          <div className='grid gap-4 md:grid-cols-3 text-xs text-muted-foreground'>
            <div className='rounded-xl border border-border bg-card p-4'>Dashboard layout</div>
            <div className='rounded-xl border border-border bg-card p-4'>Form layout</div>
            <div className='rounded-xl border border-border bg-card p-4'>Detail page layout</div>
          </div>
        </section>
      </div>
    </div>
  );
}
