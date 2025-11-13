import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactions – GoBasile Brand Guidelines',
  description:
    'Interaction patterns, motion rules, and feedback standards for the GoBasile design system.',
};

export default function InteractionsPage() {
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
              <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                Interactions &amp; feedback
              </h1>
              <p className='max-w-2xl text-sm text-muted-foreground'>
                Interactions in GoBasile communicate responsiveness, reliability, and precision.
                Every motion and feedback state should feel engineered: purposeful, restrained, and
                immediate.
              </p>
            </div>
            <div className='flex flex-wrap gap-2 text-xs text-muted-foreground'>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Motion
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Feedback
              </span>
              <span className='rounded-full border border-border bg-muted/60 px-3 py-1'>
                Loading
              </span>
            </div>
          </div>
        </header>

        {/* Philosophy */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Philosophy</h2>
            <p className='text-sm text-muted-foreground'>
              The interface should behave like a trusted tool: responsive to input, consistent under
              load, and predictable in behavior. Users should always feel in control and never
              wonder if the system is listening.
            </p>
          </div>
          <div className='grid gap-3 text-xs text-muted-foreground'>
            <div className='rounded-xl border border-border bg-card p-3'>
              <p className='font-medium text-foreground'>Interaction goals</p>
              <ul className='mt-2 space-y-1'>
                <li>
                  <span className='font-medium text-foreground'>Speed:</span> feedback appears
                  within 400 ms (Doherty Threshold).
                </li>
                <li>
                  <span className='font-medium text-foreground'>Consistency:</span> patterns repeat
                  across components and pages.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Clarity:</span> motion and state
                  changes clearly map cause to effect.
                </li>
                <li>
                  <span className='font-medium text-foreground'>Restraint:</span> subtle transitions
                  enhance focus instead of competing with tasks.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Motion principles */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Motion principles</h2>
            <p className='text-sm text-muted-foreground'>
              Motion provides continuity, not flair. It helps users understand relationships between
              elements and states, especially when content appears, disappears, or moves.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Keep animations within 150 ms to 250 ms.</li>
                <li>• Use ease-in-out for standard transitions.</li>
                <li>• Prefer fade, scale, or slide only when they clarify change.</li>
                <li>• Avoid elastic, bouncy, or playful easing entirely.</li>
              </ul>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Example (Framer Motion)
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <pre className='overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>{`<motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.15, ease: 'easeOut' }}
>
  <Card>...</Card>
</motion.div>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Loading states */}
        <section className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Loading states</h2>
            <p className='text-sm text-muted-foreground'>
              Users should never wonder if the system is working. Loading states confirm progress
              and preserve trust, especially during slower operations.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Use skeletons for predictable layouts like lists, tables, and cards.</li>
                <li>• Use shimmer placeholders for broader content regions.</li>
                <li>• Use spinners for short operations under one second.</li>
                <li>• Use optimistic updates when changes are highly likely to succeed.</li>
              </ul>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Example
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <pre className='overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>{`{isLoading ? (
  <Skeleton className='h-10 w-full rounded-md' />
) : (
  <Button>Save changes</Button>
)}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Feedback states */}
        <section className='space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-lg font-semibold'>Feedback states</h2>
            <p className='text-sm text-muted-foreground'>
              Every user action should produce visible, timely feedback so users feel the system is
              responsive and under control.
            </p>
          </div>
          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <table className='w-full border-collapse text-xs'>
              <thead>
                <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                  <th className='py-2 pl-4 text-left font-medium'>Type</th>
                  <th className='py-2 text-left font-medium'>Example</th>
                  <th className='py-2 pr-4 text-left font-medium'>Guidance</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4 align-top'>Hover</td>
                  <td className='py-2 align-top text-muted-foreground'>bg-muted/50</td>
                  <td className='py-2 pr-4 align-top text-muted-foreground'>
                    Reinforces interactivity.
                  </td>
                </tr>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4 align-top'>Active / pressed</td>
                  <td className='py-2 align-top text-muted-foreground'>scale-95</td>
                  <td className='py-2 pr-4 align-top text-muted-foreground'>
                    Suggests confirmation of action.
                  </td>
                </tr>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4 align-top'>Focus</td>
                  <td className='py-2 align-top text-muted-foreground'>
                    ring-[var(--brand-basil)] ring-2
                  </td>
                  <td className='py-2 pr-4 align-top text-muted-foreground'>
                    Improves accessibility.
                  </td>
                </tr>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4 align-top'>Disabled</td>
                  <td className='py-2 align-top text-muted-foreground'>
                    opacity-50 cursor-not-allowed
                  </td>
                  <td className='py-2 pr-4 align-top text-muted-foreground'>
                    Clarifies inactive state.
                  </td>
                </tr>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4 align-top'>Success</td>
                  <td className='py-2 align-top text-muted-foreground'>inline banner or toast</td>
                  <td className='py-2 pr-4 align-top text-muted-foreground'>
                    Appears within 400 ms.
                  </td>
                </tr>
                <tr className='text-foreground'>
                  <td className='py-2 pl-4 align-top'>Error</td>
                  <td className='py-2 align-top text-muted-foreground'>
                    red border or toast message
                  </td>
                  <td className='py-2 pr-4 align-top text-muted-foreground'>
                    Include clear instructions for correction.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
            <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Example
            </p>
            <pre className='mt-3 overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
              <code>{`<Button
  className='transition-all hover:bg-muted/50 active:scale-95 focus:ring-2 focus:ring-[var(--brand-basil)]'
>
  Submit
</Button>`}</code>
            </pre>
          </div>
        </section>

        {/* Progress indicators */}
        <section className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Progress indicators</h2>
            <p className='text-sm text-muted-foreground'>
              Users should always know how far along they are in any process, from creating a
              listing to uploading device photos.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Use steppers for multi step workflows.</li>
                <li>• Use progress bars for uploads and long running tasks.</li>
                <li>• Use inline banners for real time saving indicators.</li>
              </ul>
            </div>
          </div>
          <div className='space-y-3'>
            <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Example
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <pre className='overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>{`{isSaving && <Banner variant='muted'>Saving changes...</Banner>}
{isSaved && <Banner variant='success'>All changes saved.</Banner>}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Timing & thresholds */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Timing &amp; thresholds</h2>
          <p className='text-sm text-muted-foreground'>
            Consistent timing keeps the system feeling reliable and engineered. Use these targets as
            defaults unless a strong reason exists to deviate.
          </p>
          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <table className='w-full border-collapse text-xs'>
              <thead>
                <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                  <th className='py-2 pl-4 text-left font-medium'>Interaction</th>
                  <th className='py-2 text-left font-medium'>Target duration</th>
                  <th className='py-2 pr-4 text-left font-medium'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4'>Click to response</td>
                  <td className='py-2 text-muted-foreground'>&lt; 100 ms</td>
                  <td className='py-2 pr-4 text-muted-foreground'>Immediate feedback preferred.</td>
                </tr>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4'>Hover effects</td>
                  <td className='py-2 text-muted-foreground'>100–150 ms</td>
                  <td className='py-2 pr-4 text-muted-foreground'>Smooth transitions only.</td>
                </tr>
                <tr className='border-b border-border/60 text-foreground'>
                  <td className='py-2 pl-4'>Modal or drawer animations</td>
                  <td className='py-2 text-muted-foreground'>150–200 ms</td>
                  <td className='py-2 pr-4 text-muted-foreground'>Use fades or slides only.</td>
                </tr>
                <tr className='text-foreground'>
                  <td className='py-2 pl-4'>Loading feedback</td>
                  <td className='py-2 text-muted-foreground'>Within 400 ms</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Aligns with the Doherty Threshold.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sounds & accessibility */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Sounds &amp; haptics</h2>
            <p className='text-sm text-muted-foreground'>
              The web platform is silent by default. Sound or vibration feedback is reserved for
              specialized devices or hardware integrations, and should remain short, subtle, and
              utilitarian.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Do not introduce sound for routine web interactions.</li>
                <li>• When used, ensure sounds are brief and low in intensity.</li>
                <li>• Allow users to control or mute any non critical feedback.</li>
              </ul>
            </div>
          </div>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Accessibility</h2>
            <p className='text-sm text-muted-foreground'>
              Interactions must remain accessible across motion preferences, assistive technologies,
              and contrast conditions.
            </p>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5 text-xs text-muted-foreground'>
              <ul className='space-y-1'>
                <li>• Do not rely only on motion or color to indicate change.</li>
                <li>• Respect prefers reduced motion user settings.</li>
                <li>• Ensure screen readers announce state changes for toasts and banners.</li>
                <li>• Avoid auto dismissing key messages without ARIA live regions.</li>
              </ul>
              <pre className='mt-3 overflow-auto rounded-lg bg-muted p-4 text-[11px] leading-relaxed'>
                <code>{`<div role='status' aria-live='polite'>
  {status === 'saving' && 'Saving...'}
  {status === 'saved' && 'All changes saved.'}
</div>`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Do & don't */}
        <section className='space-y-4 border-t border-border pt-6'>
          <h2 className='text-lg font-semibold'>Do &amp; don&apos;t</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-sm font-medium'>Do</p>
              <ul className='mt-3 space-y-1 text-xs text-muted-foreground'>
                <li>• Use motion to guide focus and explain change.</li>
                <li>• Provide immediate visual feedback on interaction.</li>
                <li>• Keep timing consistent across components.</li>
                <li>• Use banners or toasts for confirmations and errors.</li>
                <li>• Respect user motion and accessibility preferences.</li>
              </ul>
            </div>
            <div className='rounded-xl border border-border bg-card p-4 md:p-5'>
              <p className='text-sm font-medium'>Don&apos;t</p>
              <ul className='mt-3 space-y-1 text-xs text-muted-foreground'>
                <li>• Animate purely for style or decoration.</li>
                <li>• Delay feedback or fade in critical UI too slowly.</li>
                <li>• Mix fast and slow transitions arbitrarily.</li>
                <li>• Hide system feedback inside small or low contrast text.</li>
                <li>• Force animations or auto play transitions without control.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
