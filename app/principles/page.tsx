import type { Metadata } from 'next';
import { CodeBlock } from '@/components/CodeBlock';

export const metadata: Metadata = {
  title: 'Principles – GoBasile Brand Guidelines',
  description: 'Foundational UX and design principles that govern the GoBasile design system.',
};

export default function PrinciplesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:px-6 md:py-12 lg:py-16">
        {/* Header */}
        <header className="space-y-3 border-b border-border pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">System</p>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Design principles</h1>
            <p className="max-w-2xl text-sm text-muted-foreground">
              GoBasile’s design rules come from cognitive psychology and HCI, creating interfaces that feel
              intuitive, trustworthy, and engineered for clarity.
            </p>
          </div>
        </header>

        {/* Philosophy */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Philosophy</h2>
            <p className="text-sm text-muted-foreground">
              Design should support clarity. Every component, motion, and layout choice reinforces precision,
              speed, and understanding for technicians.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground">
            <ul className="space-y-1">
              <li>
                <span className="font-medium text-foreground">Function over form:</span> visuals support usability.
              </li>
              <li>
                <span className="font-medium text-foreground">Familiarity:</span> reduce friction through known
                patterns.
              </li>
              <li>
                <span className="font-medium text-foreground">Focus:</span> remove distractions from the workflow.
              </li>
              <li>
                <span className="font-medium text-foreground">Feedback:</span> acknowledge all actions quickly.
              </li>
              <li>
                <span className="font-medium text-foreground">Consistency:</span> predictable structure builds trust.
              </li>
            </ul>
          </div>
        </section>

        {/* UX Laws */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">UX laws in practice</h2>
          <p className="text-sm text-muted-foreground">
            These principles guide every UI decision across the platform.
          </p>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b border-border bg-muted/40 text-muted-foreground">
                  <th className="py-2 pl-4 text-left font-medium">Principle</th>
                  <th className="py-2 text-left font-medium">Description</th>
                  <th className="py-2 pr-4 text-left font-medium">Application</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Aesthetic–Usability</td>
                  <td className="py-2 text-muted-foreground">Clean visuals improve perceived usability.</td>
                  <td className="py-2 pr-4 text-muted-foreground">
                    Use balanced spacing and disciplined contrast.
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Hick’s law</td>
                  <td className="py-2 text-muted-foreground">More options slow decision making.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Collapse advanced or complex controls.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Jakob’s law</td>
                  <td className="py-2 text-muted-foreground">Users prefer familiar structures.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Mirror known admin patterns.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Fitts’s law</td>
                  <td className="py-2 text-muted-foreground">Large, close targets improve usability.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Prioritize large primary buttons.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Proximity</td>
                  <td className="py-2 text-muted-foreground">Related items belong together.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Group inputs and settings logically.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Similarity</td>
                  <td className="py-2 text-muted-foreground">Similar visuals imply similar function.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Unify visual styles for common components.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Zeigarnik effect</td>
                  <td className="py-2 text-muted-foreground">Users remember unfinished tasks.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Use progress indicators and save states.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Goal–Gradient</td>
                  <td className="py-2 text-muted-foreground">Motivation increases near completion.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Emphasize progress in multi step flows.</td>
                </tr>
                <tr className="border-b border-border/60">
                  <td className="py-2 pl-4 font-medium text-foreground">Miller’s law</td>
                  <td className="py-2 text-muted-foreground">Users handle about seven items at once.</td>
                  <td className="py-2 pr-4 text-muted-foreground">Chunk content into digestible groups.</td>
                </tr>
                <tr>
                  <td className="py-2 pl-4 font-medium text-foreground">Doherty threshold</td>
                  <td className="py-2 text-muted-foreground">Feedback should appear within 400 ms.</td>
                  <td className="py-2 pr-4 text-muted-foreground">
                    Use optimistic updates, skeletons, and shimmer loading.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Practical application */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold">Practical application</h2>

          {/* Aesthetic–Usability */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Aesthetic–Usability</h3>
            <p className="text-sm text-muted-foreground">Clean, consistent visuals build trust.</p>
            <CodeBlock
              language="tsx"
              code={`<Card className='p-6 space-y-4 border border-border bg-card'>
  <h2 className='text-lg font-semibold'>Device Info</h2>
  <p className='text-sm text-muted-foreground'>
    Organize technical specifications clearly.
  </p>
</Card>`}
            />
          </div>

          {/* Hick's Law */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Hick’s law</h3>
            <p className="text-sm text-muted-foreground">Minimize visible choices to reduce friction.</p>
            <CodeBlock
              language="tsx"
              code={`<Accordion type='single' collapsible>
  <AccordionItem value='advanced'>
    <AccordionTrigger>Advanced Settings</AccordionTrigger>
    <AccordionContent>
      <AdvancedFilters />
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
            />
          </div>

          {/* Fitts's Law */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Fitts’s law</h3>
            <p className="text-sm text-muted-foreground">Make primary actions large and easy to reach.</p>
            <CodeBlock
              language="tsx"
              code={`<div className='mt-4 flex justify-end space-x-2'>
  <Button variant='outline'>Cancel</Button>
  <Button className='bg-[var(--brand-basil)] text-white'>Save Changes</Button>
</div>`}
            />
          </div>

          {/* Zeigarnik & Goal–Gradient */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Zeigarnik & Goal–Gradient effects</h3>
            <p className="text-sm text-muted-foreground">
              Encourage completion with clear progress and next steps.
            </p>
            <CodeBlock
              language="tsx"
              code={`<Progress value={60} className='h-2 bg-muted'>
  <div className='h-2 bg-[var(--brand-basil)]' />
</Progress>
<p className='mt-1 text-xs text-muted-foreground'>Step 3 of 5 – Configure pricing</p>`}
            />
          </div>

          {/* Doherty Threshold */}
          <div className="space-y-2">
            <h3 className="text-base font-semibold">Doherty threshold</h3>
            <p className="text-sm text-muted-foreground">Keep the interface fast and communicative.</p>
            <CodeBlock
              language="tsx"
              code={`{isSaving && <Banner variant='muted'>Saving...</Banner>}
{isSaved && <Banner variant='success'>All changes saved.</Banner>}`}
            />
          </div>
        </section>

        {/* Cognitive reinforcement */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Cognitive reinforcement</h2>
          <p className="text-sm text-muted-foreground">
            Each principle strengthens the user’s mental model of the product.
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Predictable motion reinforces hierarchy and state.</li>
            <li>• Consistent spacing improves scannability across screens.</li>
            <li>• Fast feedback reinforces trust in system reliability.</li>
          </ul>
          <p className="text-xs text-muted-foreground">
            These are not visual preferences. They are engineering standards for human experience.
          </p>
        </section>

        {/* Summary */}
        <section className="space-y-3 border-t border-border pt-6">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            GoBasile’s design principles form the backbone of its interface. When every decision aligns with these
            laws, the result is an experience that feels precise, stable, and built for professionals, just like
            the tools and technicians it serves.
          </p>
        </section>
      </div>
    </div>
  );
}
