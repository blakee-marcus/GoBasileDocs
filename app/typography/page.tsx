import type { Metadata } from 'next';
import { CodeBlock } from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Typography – GoBasile Brand Guidelines',
  description:
    'Typography standards defining hierarchy, spacing, readability, and tone in the GoBasile design system.',
};

export default function TypographyPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <div className='mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:px-6 md:py-12 lg:py-16'>
        {/* Header */}
        <header className='space-y-3 border-b border-border pb-6'>
          <p className='text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground'>
            System
          </p>
          <div className='space-y-2'>
            <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>Typography</h1>
            <p className='max-w-2xl text-sm text-muted-foreground'>
              Typography defines GoBasile’s visual voice. It should feel structured, technical, and
              intentional, like engraved labeling on a precision tool.
            </p>
          </div>
        </header>

        {/* Philosophy */}
        <section className='grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]'>
          <div className='space-y-3'>
            <h2 className='text-lg font-semibold'>Philosophy</h2>
            <p className='text-sm text-muted-foreground'>
              Typography should reinforce clarity and hierarchy. Consistent sizing, spacing, and
              weight make the interface feel engineered rather than improvised.
            </p>
          </div>
          <div className='rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground'>
            <ul className='space-y-1'>
              <li>• Clarity first: maximize readability.</li>
              <li>• Use size and weight to express hierarchy.</li>
              <li>• Maintain consistent spacing around text blocks.</li>
              <li>• Keep tone neutral, professional, and direct.</li>
            </ul>
          </div>
        </section>

        {/* Font system */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Font system</h2>
          <p className='text-sm text-muted-foreground'>
            Inter is the primary typeface, chosen for readability and technical precision.
          </p>

          {/* Fix: language must be one of 'tsx' | 'jsx' | 'ts' | 'js'. Using 'tsx' here for highlighting. */}
          <CodeBlock
            language='tsx'
            code={`font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  'Helvetica Neue', Arial, 'Noto Sans', sans-serif;`}
          />

          <div className='rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground'>
            <p className='mb-2 font-medium text-foreground'>Weights used:</p>
            <ul className='space-y-1 text-xs'>
              <li>
                • <span className='font-normal text-foreground'>400</span> - Body text and labels
              </li>
              <li>
                • <span className='font-medium text-foreground'>500</span> - Buttons and input
                labels
              </li>
              <li>
                • <span className='font-semibold text-foreground'>600</span> - Section headers
              </li>
              <li>
                • <span className='font-bold text-foreground'>700</span> - Page titles
              </li>
            </ul>
          </div>
        </section>

        {/* Hierarchy */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Hierarchy</h2>
          <p className='text-sm text-muted-foreground'>
            Use predictable sizing and structure to guide attention.
          </p>

          <div className='overflow-hidden rounded-xl border border-border bg-card'>
            <table className='w-full border-collapse text-xs'>
              <thead>
                <tr className='border-b border-border bg-muted/40 text-muted-foreground'>
                  <th className='py-2 pl-4 text-left font-medium'>Role</th>
                  <th className='py-2 text-left font-medium'>Class example</th>
                  <th className='py-2 pr-4 text-left font-medium'>Use case</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Page title</td>
                  <td className='py-2 text-muted-foreground'>text-2xl font-bold tracking-tight</td>
                  <td className='py-2 pr-4 text-muted-foreground'>Main page or module titles</td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Section header</td>
                  <td className='py-2 text-muted-foreground'>text-lg font-semibold</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Major subheadings in panels or modals
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Label / subheading</td>
                  <td className='py-2 text-muted-foreground'>
                    text-sm font-medium text-muted-foreground uppercase tracking-wide
                  </td>
                  <td className='py-2 pr-4 text-muted-foreground'>Form labels, fieldset titles</td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Body text</td>
                  <td className='py-2 text-muted-foreground'>
                    text-sm font-normal leading-relaxed
                  </td>
                  <td className='py-2 pr-4 text-muted-foreground'>Paragraph copy and input text</td>
                </tr>
                <tr>
                  <td className='py-2 pl-4 text-foreground'>Caption</td>
                  <td className='py-2 text-muted-foreground'>text-xs text-muted-foreground</td>
                  <td className='py-2 pr-4 text-muted-foreground'>Hints, help text, timestamps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Spacing & rhythm */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Spacing &amp; rhythm</h2>
          <p className='text-sm text-muted-foreground'>
            Use consistent vertical rhythm for readability.
          </p>

          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Headings separated from paragraphs by mb-2 to mb-4.</li>
            <li>• Paragraph spacing should not exceed mb-6.</li>
            <li>• Use leading-tight for titles and leading-relaxed for body text.</li>
            <li>• Avoid manual line breaks, use spacing tokens instead.</li>
          </ul>

          <CodeBlock
            language='tsx'
            code={`<div className='space-y-4'>
  <h2 className='text-lg font-semibold'>Device Details</h2>
  <p className='text-sm text-muted-foreground leading-relaxed'>
    Manage specifications and conditions for each listed device.
  </p>
</div>`}
          />
        </section>

        {/* Alignment */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Alignment & layout</h2>
          <p className='text-sm text-muted-foreground'>
            Left-align text by default. Align headings and labels directly above or beside their
            content.
          </p>

          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Avoid center alignment in data heavy or form heavy layouts.</li>
            <li>• Use items-start and justify-between for clean vertical alignment.</li>
            <li>• Keep left and right padding consistent across sections.</li>
          </ul>
        </section>

        {/* Color & contrast */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Color & contrast</h2>
          <p className='text-sm text-muted-foreground'>
            Color should support clarity, not decoration. Use type tokens consistently.
          </p>

          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Default body text: text-foreground.</li>
            <li>• Secondary text: text-muted-foreground.</li>
            <li>• Do not rely on opacity or ad hoc gray values.</li>
            <li>• Maintain at least 4.5:1 contrast for standard text and 3:1 for large text.</li>
          </ul>

          <CodeBlock
            language='tsx'
            code={`<p className='text-sm text-foreground'>
  Primary content text
</p>
<p className='text-xs text-muted-foreground'>
  Secondary description or timestamp
</p>`}
          />
        </section>

        {/* Accessibility */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Accessibility</h2>
          <p className='text-sm text-muted-foreground'>
            Typography must remain readable across devices, zoom levels, and themes.
          </p>

          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Do not use color alone to convey meaning.</li>
            <li>• Keep line length under roughly 80 characters for body copy.</li>
            <li>• Use rem based sizing and Tailwind tokens so text scales predictably.</li>
            <li>• Ensure resized text does not clip or overlap other UI elements.</li>
          </ul>
        </section>

        {/* Tone of voice */}
        <section className='space-y-4'>
          <h2 className='text-lg font-semibold'>Tone of voice</h2>
          <p className='text-sm text-muted-foreground'>
            Text should feel practical, direct, and confident. Avoid marketing language or overly
            playful copy.
          </p>

          <div className='grid gap-4 md:grid-cols-2 text-xs text-muted-foreground'>
            <div className='rounded-xl border border-border bg-card p-4'>
              <p className='mb-2 font-medium text-foreground'>Preferred</p>
              <ul className='space-y-1'>
                <li>• Save changes</li>
                <li>• Add device</li>
                <li>• Edit listing</li>
              </ul>
            </div>
            <div className='rounded-xl border border-border bg-card p-4'>
              <p className='mb-2 font-medium text-foreground'>Avoid</p>
              <ul className='space-y-1'>
                <li>• Let’s do this</li>
                <li>• Add your awesome device</li>
                <li>• Tweak this listing</li>
              </ul>
            </div>
          </div>

          <ul className='space-y-1 text-sm text-muted-foreground'>
            <li>• Use verbs first, for example: Add device, Edit listing.</li>
            <li>• Keep labels short, ideally two words or less.</li>
            <li>• Use sentence case for headings, labels, and buttons.</li>
          </ul>
        </section>

        {/* Code examples */}
        <section className='space-y-6'>
          <h2 className='text-lg font-semibold'>Code examples</h2>

          <div className='space-y-2'>
            <h3 className='text-base font-semibold'>Headers and body copy</h3>
            <CodeBlock
              language='tsx'
              code={`<section className='space-y-2'>
  <h1 className='text-2xl font-bold tracking-tight'>Inventory</h1>
  <p className='text-sm text-muted-foreground leading-relaxed'>
    View, filter, and manage devices in your current shop inventory.
  </p>
</section>`}
            />
          </div>

          <div className='space-y-2'>
            <h3 className='text-base font-semibold'>Labels and form text</h3>
            <CodeBlock
              language='tsx'
              code={`<label className='text-sm font-medium text-muted-foreground'>
  Device type
</label>
<select className='mt-1 w-full rounded-md border border-border px-3 py-2 text-sm'>
  <option>Phone</option>
  <option>Laptop</option>
</select>`}
            />
          </div>
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
                    Random font sizes such as text-base or text-xl
                  </td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Stick to the defined scale: xs, sm, lg, 2xl for headings.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Overuse of bold text</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Use bold to signal hierarchy, not emphasis in body copy.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Center aligned body text</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Keep body text left aligned for easier scanning.
                  </td>
                </tr>
                <tr className='border-b border-border/60'>
                  <td className='py-2 pl-4 text-foreground'>Decorative or script fonts</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Use only Inter and the approved system stack.
                  </td>
                </tr>
                <tr>
                  <td className='py-2 pl-4 text-foreground'>Mixed casing styles</td>
                  <td className='py-2 pr-4 text-muted-foreground'>
                    Use sentence case for labels and headings, with uppercase reserved for small
                    meta labels only.
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
            Typography is the backbone of GoBasile’s utilitarian aesthetic. Applied consistently, it
            communicates craftsmanship, reliability, and focus, and makes every screen feel like
            part of the same engineered system.
          </p>
        </section>
      </div>
    </div>
  );
}
