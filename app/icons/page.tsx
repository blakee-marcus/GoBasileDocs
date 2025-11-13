import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Icons – GoBasile Brand Guidelines',
  description:
    'Iconography standards, usage patterns, and implementation details for the GoBasile design system.',
};

export default function IconsPage() {
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
              <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Icons</h1>
              <p className='max-w-2xl text-sm text-muted-foreground'>
                GoBasile icons are treated like precision markings on a tool: functional, minimal,
                and unambiguous. They support actions and navigation, never decorate for their own
                sake.
              </p>
            </div>
            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground'>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Affordances
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Status
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Navigation
              </span>
            </div>
          </div>
        </header>

        {/* Philosophy */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Philosophy</h2>
            <p className='text-sm text-muted-foreground'>
              Icons communicate reliability and clarity. Use them to reinforce meaning, not to
              introduce visual noise. If an icon does not clearly improve comprehension or
              scannability, omit it.
            </p>
          </div>
          <div className='grid gap-3 text-xs text-muted-foreground'>
            <div className='rounded-xl border border-border bg-card p-3'>
              <p className='font-medium text-foreground'>Icon goals</p>
              <ul className='mt-2 space-y-1'>
                <li>
                  <span className='font-medium text-foreground'>Utility:</span> icons exist to
                  clarify an action or state.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Consistency:</span> shared style,
                  size, and stroke across the system.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Hierarchy:</span> icons support
                  primary text, not replace it.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Restraint:</span> minimal motion,
                  minimal color, maximal clarity.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Icon standards */}
        <section className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-lg font-semibold'>Icon standards</h2>
            <p className='text-sm text-muted-foreground'>
              Icons follow a strict contract for scale, stroke, and color so that the system feels
              engineered and predictable.
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-3'>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Size</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Use <code className='rounded bg-muted/60 px-1'>16</code>–
                <code className='rounded bg-muted/60 px-1'>20</code> px icons for buttons, inputs,
                and inline labels. Larger patterns like empty states may use 32 px.
              </p>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Stroke & style</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Use outline icons with a consistent stroke weight (typically 1.5–2). Avoid mixed
                visual styles or filled icons.
              </p>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <h3 className='text-sm font-medium'>Color & contrast</h3>
              <p className='mt-2 text-xs text-muted-foreground'>
                Default to <code className='rounded bg-muted/60 px-1'>text-muted-foreground</code>.
                Use status tokens (success, warning, destructive) only when the icon represents
                state.
              </p>
            </div>
          </div>
        </section>

        {/* Library & usage */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Library</h2>
            <p className='text-sm text-muted-foreground'>
              GoBasile uses <code className='rounded bg-muted/60 px-1'>lucide-react</code> as the
              base library. Always prefer standard, semantically clear icons before introducing
              custom ones.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Example
              </p>
              <pre className='mt-3 overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>{`import { Wrench, Search, Bell } from 'lucide-react';

function Toolbar() {
  return (
    <div className='flex items-center gap-2'>
      <button className='inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-1.5 text-sm'>
        <Wrench className='h-4 w-4 text-muted-foreground' />
        <span>Tools</span>
      </button>
      <button className='inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card'>
        <Search className='h-4 w-4 text-muted-foreground' />
      </button>
      <button className='relative inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card'>
        <Bell className='h-4 w-4 text-muted-foreground' />
        <span className='absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-basil)]' />
      </button>
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Placement</h2>
            <p className='text-sm text-muted-foreground'>
              Icons should align to the same visual grid as text and inputs. Keep spacing consistent
              and avoid crowding labels.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Left-align icons before labels in buttons.</li>
                <li>• Use leading icons in inputs for search or filters.</li>
                <li>• Align navigation icons to a 4 px grid in sidebars.</li>
                <li>
                  • Avoid trailing icons unless they clearly convey affordance (for example,
                  chevrons).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Status icons */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Status & feedback icons</h2>
            <p className='text-sm text-muted-foreground'>
              When icons represent state, pair them with color tokens and concise labels. Do not
              rely on color alone.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs'>
              <div className='grid gap-2 md:grid-cols-2'>
                <div className='flex items-center gap-2 rounded-lg bg-muted/60 p-2'>
                  <span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-success/15 text-success'>
                    ●
                  </span>
                  <div>
                    <p className='text-xs font-medium text-foreground'>Success</p>
                    <p className='text-[11px] text-muted-foreground'>
                      Use for completed or healthy states.
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2 rounded-lg bg-muted/60 p-2'>
                  <span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-warning/15 text-warning'>
                    ●
                  </span>
                  <div>
                    <p className='text-xs font-medium text-foreground'>Warning</p>
                    <p className='text-[11px] text-muted-foreground'>
                      Use for pending or attention states.
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2 rounded-lg bg-muted/60 p-2'>
                  <span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-destructive/15 text-destructive'>
                    ●
                  </span>
                  <div>
                    <p className='text-xs font-medium text-foreground'>Destructive</p>
                    <p className='text-[11px] text-muted-foreground'>
                      Use only for errors or critical risk.
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2 rounded-lg bg-muted/60 p-2'>
                  <span className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--brand-basil)]/15 text-[var(--brand-basil)]'>
                    ●
                  </span>
                  <div>
                    <p className='text-xs font-medium text-foreground'>Brand</p>
                    <p className='text-[11px] text-muted-foreground'>
                      Use sparingly for key Basile moments.
                    </p>
                  </div>
                </div>
              </div>
              <p className='mt-3 text-[11px] text-muted-foreground'>
                Always pair a status icon with text so meaning remains accessible in low-contrast or
                colorblind scenarios.
              </p>
            </div>
          </div>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Motion</h2>
            <p className='text-sm text-muted-foreground'>
              Icon motion is subtle and mechanical. Treat animations like small mechanical feedback,
              not decoration.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Hover: small color shift or opacity change only.</li>
                <li>• Active: slight scale down (&lt; 0.96) to confirm press.</li>
                <li>• Loading: use spinners or progress icons under 150ms transitions.</li>
                <li>• Avoid looping or bouncing animations.</li>
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
                <li>• Use icons to clarify actions, not to replace labels.</li>
                <li>• Keep icon sizes and stroke weights consistent.</li>
                <li>• Use brand and status colors via tokens and CSS vars.</li>
                <li>• Align icons to the same grid and rhythm as text.</li>
              </ul>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-sm font-medium'>Don&apos;t</p>
              <ul className='mt-3 space-y-1 text-xs text-muted-foreground'>
                <li>• Mix filled, outline, and duotone styles.</li>
                <li>• Rely on icon-only buttons for critical actions.</li>
                <li>• Hardcode hex colors directly on icons.</li>
                <li>• Animate icons in playful or distracting ways.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
