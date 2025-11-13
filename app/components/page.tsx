import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Components – GoBasile Brand Guidelines',
  description:
    'Component patterns, interaction rules, and implementation standards for the GoBasile design system.',
};

export default function ComponentsPage() {
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
              <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Components</h1>
              <p className='max-w-2xl text-sm text-muted-foreground'>
                GoBasile components are built like precision tools: functional, durable, and
                visually balanced. Every button, card, and panel is part of a coherent kit, not a
                one-off.
              </p>
            </div>
            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground'>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Buttons
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Panels
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>Forms</span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Tables
              </span>
            </div>
          </div>
        </header>

        {/* Philosophy */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Philosophy</h2>
            <p className='text-sm text-muted-foreground'>
              Components should communicate reliability and clarity. Spacing, color, and hierarchy
              express intent, not decoration. The system favors repeatable patterns over custom
              layouts.
            </p>
          </div>
          <div className='grid gap-3 text-xs text-muted-foreground'>
            <div className='rounded-xl border border-border bg-card p-3'>
              <p className='font-medium text-foreground'>Component goals</p>
              <ul className='mt-2 space-y-1'>
                <li>
                  <span className='font-medium text-foreground'>Utility:</span> components exist to
                  perform, not decorate.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Consistency:</span> shared
                  alignment, rhythm, and tone.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Hierarchy:</span> primary actions
                  lead, secondary actions support.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Restraint:</span> minimal motion,
                  muted palette, predictable layout.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Component standards */}
        <section className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-lg font-semibold'>Component standards</h2>
            <p className='text-sm text-muted-foreground'>
              Each component family follows a clear contract: what it contains, how it behaves, and
              how it should be styled.
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Cards & panels</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Contain discrete, related data. Use{' '}
                <code className='rounded bg-muted/60 px-1'>p-4</code> or
                <code className='mx-1 rounded bg-muted/60 px-1'>p-6</code>,
                <code className='mx-1 rounded bg-muted/60 px-1'>rounded-xl</code>, and
                <code className='mx-1 rounded bg-muted/60 px-1'>border-border</code> for definition.
              </p>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Buttons</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Primary actions use Basil, secondary actions use outline, destructive actions use
                the destructive token. Motion is minimal and purposeful only.
              </p>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Forms</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Fields are vertically stacked with{' '}
                <code className='rounded bg-muted/60 px-1'>space-y-4</code>, clear labels, and
                inline validation where available.
              </p>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Tables & lists</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Text is left-aligned, rows get subtle dividers and hover states to keep large
                datasets scannable.
              </p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Buttons</h2>
            <p className='text-sm text-muted-foreground'>
              Buttons embody mechanical precision: solid, functional, with restrained motion. They
              lead the hierarchy of actions.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Variants
              </p>
              <ul className='mt-3 space-y-2 text-xs text-muted-foreground'>
                <li>
                  <span className='font-medium text-foreground'>Primary:</span>{' '}
                  <code className='rounded bg-muted/60 px-1'>
                    bg-[var(--brand-basil)] text-white
                  </code>{' '}
                  for save, submit, and continue actions.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Secondary:</span>{' '}
                  <code className='rounded bg-muted/60 px-1'>variant="outline"</code> for neutral or
                  cancel flows.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Destructive:</span>{' '}
                  <code className='rounded bg-muted/60 px-1'>variant="destructive"</code> for
                  irreversible actions.
                </li>
              </ul>
            </div>
          </div>
          <div className='space-y-3 rounded-xl border border-border bg-card p-4 md:p-5'>
            <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Example
            </p>
            <pre className='overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
              <code>
                {`<div className='flex gap-2'>
  <Button className='bg-[var(--brand-basil)] text-white hover:bg-[var(--brand-basil)]/90'>
    Save changes
  </Button>
  <Button variant='outline' className='border-border text-foreground hover:bg-muted/50'>
    Cancel
  </Button>
  <Button variant='destructive'>Delete</Button>
</div>`}
              </code>
            </pre>
          </div>
        </section>

        {/* Panels & cards / Forms */}
        <section className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Panels & cards</h2>
            <p className='text-sm text-muted-foreground'>
              Panels and cards are the workhorse containers. They group logical inputs or related
              data without heavy framing.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <pre className='overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>
                  {`<PanelBody title='Device details'>
  <div className='grid gap-4 md:grid-cols-2'>
    <Input label='Model name' />
    <Select label='Device type' />
  </div>
</PanelBody>`}
                </code>
              </pre>
            </div>
          </div>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Forms</h2>
            <p className='text-sm text-muted-foreground'>
              Forms are predictable and fast to scan. Labels sit directly above inputs, with a
              consistent vertical rhythm.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <pre className='overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>
                  {`<form className='space-y-4'>
  <div>
    <Label className='text-sm font-medium text-muted-foreground' htmlFor='name'>
      Device name
    </Label>
    <Input id='name' placeholder='iPhone 14 Pro' />
  </div>
  <div className='flex justify-end gap-2'>
    <Button variant='outline'>Cancel</Button>
    <Button className='bg-[var(--brand-basil)] text-white'>Save</Button>
  </div>
</form>`}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Modals & tables */}
        <section className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Modals</h2>
            <p className='text-sm text-muted-foreground'>
              Modals support short, focused interactions. Every modal includes a clear header, body,
              and footer.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>
                  • Use <code className='rounded bg-muted/60 px-1'>p-6</code> for internal padding.
                </li>
                <li>
                  • Keep width around <code className='rounded bg-muted/60 px-1'>max-w-lg</code>.
                </li>
                <li>• Right-align primary actions in the footer.</li>
              </ul>
            </div>
          </div>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Tables & lists</h2>
            <p className='text-sm text-muted-foreground'>
              Tables and list views should be clean and scannable. No dense gridlines, only subtle
              structure.
            </p>
            <div className='overflow-hidden rounded-xl border border-border bg-card'>
              <table className='w-full border-collapse text-xs'>
                <thead>
                  <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                    <th className='py-2 pl-4 text-left font-medium'>Model</th>
                    <th className='py-2 text-left font-medium'>Brand</th>
                    <th className='py-2 pr-4 text-left font-medium'>Year</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-border/50 text-foreground hover:bg-muted/30'>
                    <td className='py-2 pl-4'>iPhone 13</td>
                    <td className='py-2'>Apple</td>
                    <td className='py-2 pr-4'>2021</td>
                  </tr>
                  <tr className='text-foreground hover:bg-muted/30'>
                    <td className='py-2 pl-4'>Galaxy S22</td>
                    <td className='py-2'>Samsung</td>
                    <td className='py-2 pr-4'>2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Badges & feedback */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Badges</h2>
            <p className='text-sm text-muted-foreground'>
              Badges provide quick state at a glance. They are compact, color-coded, and never
              ornamental.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <div className='flex flex-wrap gap-2 text-xs'>
                <span className='rounded-md bg-blue-600/20 px-2 py-1 text-blue-600'>Active</span>
                <span className='rounded-md bg-[var(--brand-basil)]/90 px-2 py-1 text-white'>
                  Verified
                </span>
                <span className='rounded-md bg-amber-500/20 px-2 py-1 text-amber-600'>Pending</span>
                <span className='rounded-md bg-emerald-500/20 px-2 py-1 text-emerald-700'>
                  Completed
                </span>
              </div>
              <p className='mt-3 text-xs text-muted-foreground'>
                Use uppercase only for system-level tags (for example, STATUS, TYPE). Default weight
                is regular for readability.
              </p>
            </div>
          </div>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Motion & feedback</h2>
            <p className='text-sm text-muted-foreground'>
              Motion is subtle and purposeful. Every interaction returns immediate, visible
              feedback.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Fade or scale transitions only, under 150ms.</li>
                <li>• Hover: subtle background shift on interactive elements.</li>
                <li>• Active: slight scale down to confirm press.</li>
                <li>• Include loading states for async actions (skeletons or spinners).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Do & don&apos;t */}
        <section className='space-y-4 border-t border-border pt-6'>
          <h2 className='text-lg font-semibold'>Do & don&apos;t</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-sm font-medium'>Do</p>
              <ul className='mt-3 space-y-1 text-xs text-muted-foreground'>
                <li>• Keep components visually simple and grid-aligned.</li>
                <li>• Use consistent spacing tokens for rhythm.</li>
                <li>• Reference brand colors through CSS variables.</li>
                <li>• Keep modals short, focused, and task-specific.</li>
              </ul>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-sm font-medium'>Don&apos;t</p>
              <ul className='mt-3 space-y-1 text-xs text-muted-foreground'>
                <li>• Add ornamental shadows or gradients.</li>
                <li>• Mix arbitrary padding or margins inside components.</li>
                <li>• Hardcode hex values for brand colors.</li>
                <li>• Nest long, complex forms inside modals.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
