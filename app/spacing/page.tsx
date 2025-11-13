import type { Metadata } from 'next';
import { CodeBlock } from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Spacing – GoBasile Brand Guidelines',
  description:
    'Spacing, rhythm, and alignment standards that define structure and hierarchy in the GoBasile design system.',
};

export default function SpacingPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:px-6 md:py-12 lg:py-16'>
        {/* Header */}
        <header className='space-y-3 border-b border-border pb-6'>
          <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>
            System
          </p>
          <div className='space-y-2'>
            <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Spacing &amp; layout</h1>
            <p className='max-w-2xl text-sm text-muted-foreground'>
              Spacing establishes rhythm, hierarchy, and clarity. Consistent gaps, padding, and
              margins make the interface feel engineered rather than improvised.
            </p>
          </div>
        </header>

        {/* Philosophy */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Philosophy</h2>
            <p className='text-sm text-muted-foreground'>
              GoBasile’s spacing system prioritizes utility, alignment, and clarity. Spacing guides
              the eye, defines relationships, and ensures every component feels anchored.
            </p>
          </div>
          <div className='rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground'>
            <ul className='space-y-1'>
              <li>
                <span className='font-medium text-foreground'>Consistency:</span> reuse the same
                values across components.
              </li>
              <li>
                <span className='font-medium text-foreground'>Alignment:</span> keep margins and
                gutters predictable.
              </li>
              <li>
                <span className='font-medium text-foreground'>Readability:</span> give elements
                breathing room.
              </li>
              <li>
                <span className='font-medium text-foreground'>Efficiency:</span> avoid arbitrary
                one-off spacing.
              </li>
            </ul>
          </div>
        </section>

        {/* Spacing scale */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Spacing scale</h2>
          <p className='text-sm text-muted-foreground'>
            Use the Tailwind spacing scale consistently. Only approved tokens should be used for
            gaps, padding, and margins.
          </p>

          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <table className='w-full border-collapse text-xs'>
              <thead>
                <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                  <th className='py-2 pl-4 text-left font-medium'>Token</th>
                  <th className='py-2 text-left font-medium'>Value</th>
                  <th className='py-2 pr-4 text-left font-medium'>Use case</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>gap-2 / p-2</td>
                  <td className='py-2 text-muted-foreground'>0.5 rem (8 px)</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Small gaps between compact or inline items.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>gap-4 / p-4</td>
                  <td className='py-2 text-muted-foreground'>1 rem (16 px)</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Default spacing for cards, forms, and groups.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>gap-6 / p-6</td>
                  <td className='py-2 text-muted-foreground'>1.5 rem (24 px)</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Comfortable spacing for panels and modals.
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pl-4 text-foreground'>gap-8 / p-8</td>
                  <td className='py-2 text-muted-foreground'>2 rem (32 px)</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Page-level padding and section breaks.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-xs text-muted-foreground'>
            Avoid unlisted values unless there is a clear layout constraint that cannot be expressed
            with existing tokens.
          </p>
        </section>

        {/* Layout structure */}
        <section className='space-y-6'>
          <h2 className='text-lg font-semibold'>Layout structure</h2>

          <div className='grid gap-4 md:grid-cols-2'>
            <div className='space-y-2'>
              <h3 className='text-base font-semibold'>Containers</h3>
              <ul className='space-y-1 text-sm text-muted-foreground'>
                <li>• Use max-w-5xl mx-auto for standard page content.</li>
                <li>• Page sections should have at least py-8 vertical padding.</li>
                <li>• Nested cards and panels use p-4 or p-6 internally.</li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h3 className='text-base font-semibold'>Grids & flex layouts</h3>
              <ul className='space-y-1 text-sm text-muted-foreground'>
                <li>• Use gap-* utilities to space items.</li>
                <li>• Prefer parent-controlled spacing over child margins.</li>
                <li>• Use space-y-* / space-x-* for stacked content.</li>
              </ul>
            </div>
          </div>

          <CodeBlock
            language='tsx'
            code={`<div className='grid gap-4 md:grid-cols-2'>
  <Card>...</Card>
  <Card>...</Card>
</div>`}
          />
        </section>

        {/* Vertical rhythm */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Vertical rhythm</h2>
          <p className='text-sm text-muted-foreground'>
            Vertical rhythm makes pages easier to scan. Use consistent spacing between headings,
            text, and blocks.
          </p>
          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Between headings and body text: around mb-2 to mb-4.</li>
            <li>• Between larger blocks (cards, sections): mb-6 or mb-8.</li>
            <li>• Avoid mixing different top and bottom margins on similar elements.</li>
          </ul>

          <CodeBlock
            language='tsx'
            code={`<section className='space-y-6'>
  <PanelBody title='Device Info'>...</PanelBody>
  <PanelBody title='Pricing'>...</PanelBody>
</section>`}
          />
        </section>

        {/* Alignment rules */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Alignment rules</h2>
          <p className='text-sm text-muted-foreground'>
            Align all spacing decisions to the 4 px base grid. Headers and action bars should feel
            balanced and predictable.
          </p>
          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Align to Tailwind’s 4 px base grid by default.</li>
            <li>• Use items-center and justify-between in toolbars and headers.</li>
            <li>• Avoid center alignment for dense data or forms.</li>
            <li>• Keep left/right padding consistent (px-4 or px-6).</li>
          </ul>

          <CodeBlock
            language='tsx'
            code={`<header className='flex items-center justify-between border-b border-border px-4 py-2'>
  <h1 className='text-lg font-semibold'>Inventory</h1>
  <Button variant='default'>Add New</Button>
</header>`}
          />
        </section>

        {/* Component spacing */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Component spacing guidelines</h2>
          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <table className='w-full border-collapse text-xs'>
              <thead>
                <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                  <th className='py-2 pl-4 text-left font-medium'>Component</th>
                  <th className='py-2 text-left font-medium'>Internal padding</th>
                  <th className='py-2 pr-4 text-left font-medium'>External margin / gap</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Card / Panel</td>
                  <td className='py-2 text-muted-foreground'>p-4 or p-6</td>
                  <td className='py-2 pr-4 text-muted-foreground'>mb-4 or parent gap-4</td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Modal body</td>
                  <td className='py-2 text-muted-foreground'>p-6</td>
                  <td className='py-2 pr-4 text-muted-foreground'>space-y-4 between inputs</td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Form field</td>
                  <td className='py-2 text-muted-foreground'>space-y-2 for label + input</td>
                  <td className='py-2 pr-4 text-muted-foreground'>gap-4 between fields</td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Button group</td>
                  <td className='py-2 text-muted-foreground'>space-x-2</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Inline within toolbars or footers
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pl-4 text-foreground'>Page section</td>
                  <td className='py-2 text-muted-foreground'>py-8</td>
                  <td className='py-2 pr-4 text-muted-foreground'>space-y-8 between sections</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Responsive considerations */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Responsive considerations</h2>
          <p className='text-sm text-muted-foreground'>
            Spacing should scale predictably across breakpoints. Tighten on mobile, use standard
            spacing on tablet, and relax on desktop for readability.
          </p>
          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Mobile: tighter spacing (gap-2, p-4).</li>
            <li>• Tablet: standard spacing (gap-4, p-6).</li>
            <li>• Desktop: looser spacing (gap-6, p-8).</li>
          </ul>

          <CodeBlock
            language='tsx'
            code={`<div className='p-4 md:p-6 lg:p-8'>
  <Content />
</div>`}
          />
        </section>

        {/* Don’t */}
        <section className='space-y-4 border-t border-border pt-6'>
          <h2 className='text-lg font-semibold'>Common pitfalls</h2>
          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <table className='w-full border-collapse text-xs'>
              <thead>
                <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                  <th className='py-2 pl-4 text-left font-medium'>Common issue</th>
                  <th className='py-2 pr-4 text-left font-medium'>Preferred approach</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>
                    Random margins on individual elements
                  </td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Define spacing from parent containers using gap-* or space-*.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Inconsistent gaps between panels</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Use a single scale like space-y-6 or gap-6.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Uneven padding within cards</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Stick to uniform p-4 or p-6 inside cards.
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pl-4 text-foreground'>
                    Mixing rem, px, and arbitrary spacing
                  </td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Use Tailwind spacing tokens consistently.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <section className='space-y-3'>
          <h2 className='text-lg font-semibold'>Summary</h2>
          <p className='max-w-2xl text-sm text-muted-foreground'>
            Spacing is what makes GoBasile feel coherent and professional. By following the shared
            spacing scale and alignment rules, every screen falls into a predictable rhythm that
            feels engineered, not improvised.
          </p>
        </section>
      </div>
    </div>
  );
}
