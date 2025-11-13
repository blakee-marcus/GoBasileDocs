export default function Page() {
  const principles = [
    {
      name: 'Aesthetic-Usability',
      meaning: 'Clean interfaces feel easier to use',
      apply: 'Maintain consistent spacing (gap-2, px-4) and clear typography hierarchy',
    },
    {
      name: "Hick's Law",
      meaning: 'Fewer visible options reduce cognitive load',
      apply: 'Collapse complex filters into expandable sections',
    },
    {
      name: "Jakob's Law",
      meaning: 'Familiar patterns reduce friction',
      apply: 'Follow WordPress-style layouts: cards, sidebars, modals',
    },
    {
      name: "Fitts's Law",
      meaning: 'Larger, closer targets are easier to use',
      apply: "Keep main actions large and near the user's focus area",
    },
    {
      name: 'Law of Proximity',
      meaning: 'Group related elements visually',
      apply: 'Use PanelBody, Card, and consistent vertical rhythm',
    },
    {
      name: 'Zeigarnik Effect',
      meaning: 'Users complete visible progress',
      apply: 'Use steppers, breadcrumbs, and save-state banners',
    },
    {
      name: 'Goal-Gradient',
      meaning: 'Progress motivates completion',
      apply: 'Emphasize next steps with primary button styling',
    },
    {
      name: 'Law of Similarity',
      meaning: 'Consistency breeds confidence',
      apply: 'Standardize toggles, icons, and component spacing',
    },
    {
      name: "Miller's Law",
      meaning: 'People can only process a few chunks at once',
      apply: 'Break content into sections and collapse advanced options',
    },
    {
      name: 'Doherty Threshold',
      meaning: 'Fast feedback builds trust',
      apply: 'Keep interactions under 400ms and use loading skeletons',
    },
  ];

  const colors = [
    {
      role: 'Background',
      token: 'bg-muted, bg-card',
      usage: 'Structural layers, never pure white',
    },
    {
      role: 'Accent',
      token: 'text-primary, border-primary',
      usage: 'Used sparingly for CTAs',
    },
    {
      role: 'Border',
      token: 'border-border',
      usage: 'Define edges with subtle contrast',
    },
    {
      role: 'Error',
      token: 'text-destructive',
      usage: 'Used exclusively for destructive actions',
    },
  ];

  const doItems = [
    'Use muted neutrals and disciplined accents',
    'Align elements to grid and spacing tokens',
    'Use icons with text for clarity',
    'Group related controls within containers',
    'Keep motion subtle and functional',
  ];

  const dontItems = [
    'Use gradients or bright colors',
    'Apply arbitrary margins or spacing',
    'Use icons alone as buttons',
    'Scatter inputs across the page',
    'Add decorative or excessive animation',
  ];

  return (
    <div className='space-y-8'>
      {/* Intro */}
      <section className='rounded-xl border border-border bg-card/70 p-6 shadow-sm'>
        <h2 className='text-base font-semibold tracking-tight'>GoBasile Brand Guidelines</h2>
        <p className='mt-2 text-sm text-muted-foreground max-w-2xl'>
          A utilitarian design system built for clarity, precision, and trust. The GoBasile brand
          exists to empower repair shops and technicians through reliable, straightforward tools
          that feel engineered, not decorated.
        </p>
      </section>

      {/* Purpose and philosophy */}
      <section className='grid gap-6 rounded-xl border border-border bg-card/60 p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            Purpose and philosophy
          </p>
          <h3 className='mt-2 text-sm font-semibold'>Built like a well engineered tool</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            GoBasile should feel like durable hardware: consistent, practical, and dependable. Every
            detail in the interface supports efficiency and comprehension rather than visual noise.
          </p>
        </div>
        <div className='grid gap-3 text-sm'>
          <div className='rounded-lg border border-border/80 bg-muted/60 p-3'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Core traits
            </p>
            <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
              <li>
                <span className='font-medium text-foreground'>Functional.</span> Every element
                serves a purpose.
              </li>
              <li>
                <span className='font-medium text-foreground'>Durable.</span> Design choices avoid
                trends and excess.
              </li>
              <li>
                <span className='font-medium text-foreground'>Consistent.</span> Layouts, spacing,
                and hierarchy are predictable.
              </li>
              <li>
                <span className='font-medium text-foreground'>Trustworthy.</span> Interfaces feel
                stable, clean, and professional.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Design tone */}
      <section className='rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
          <div className='max-w-xl'>
            <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
              Design tone
            </p>
            <h3 className='mt-2 text-sm font-semibold'>Utilitarian and mature</h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              The interface should feel like a technician workspace: competent, reliable, and free
              from decoration. Visual choices prioritize comprehension and speed.
            </p>
          </div>
          <dl className='grid flex-1 gap-3 text-sm md:grid-cols-2'>
            <div className='rounded-lg border border-border/70 bg-muted/50 p-3'>
              <dt className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Color
              </dt>
              <dd className='mt-1 text-sm text-muted-foreground'>
                Muted neutrals with disciplined, intentional accents.
              </dd>
            </div>
            <div className='rounded-lg border border-border/70 bg-muted/50 p-3'>
              <dt className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Typography
              </dt>
              <dd className='mt-1 text-sm text-muted-foreground'>
                Functional and legible. Never stylized just for flair.
              </dd>
            </div>
            <div className='rounded-lg border border-border/70 bg-muted/50 p-3'>
              <dt className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Layout
              </dt>
              <dd className='mt-1 text-sm text-muted-foreground'>
                Structured, grid aligned, and predictable.
              </dd>
            </div>
            <div className='rounded-lg border border-border/70 bg-muted/50 p-3'>
              <dt className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Motion
              </dt>
              <dd className='mt-1 text-sm text-muted-foreground'>
                Subtle, purposeful, and fast with clear intent.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Guiding principles */}
      <section className='rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Guiding principles
        </p>
        <h3 className='mt-2 text-sm font-semibold'>UX laws that shape the product</h3>
        <p className='mt-2 text-sm text-muted-foreground max-w-2xl'>
          Use these principles as constraints when designing flows and components. They are the
          default lens for decision making in GoBasile.
        </p>
        <div className='mt-4 overflow-hidden rounded-lg border border-border/80 bg-muted/40'>
          <div className='grid grid-cols-[0.9fr_1fr_1.2fr] border-b border-border/60 bg-muted/80 px-3 py-2 text-xs font-medium text-muted-foreground'>
            <div>Principle</div>
            <div>What it means</div>
            <div>Apply by</div>
          </div>
          <ul className='divide-y divide-border/60 text-sm'>
            {principles.map((principle) => (
              <li
                key={principle.name}
                className='grid grid-cols-[0.9fr_1fr_1.2fr] px-3 py-3 align-top'>
                <div className='pr-3 font-medium text-foreground'>{principle.name}</div>
                <div className='pr-3 text-muted-foreground'>{principle.meaning}</div>
                <div className='text-muted-foreground'>{principle.apply}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visual language */}
      <section className='space-y-6 rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            Visual language
          </p>
          <h3 className='mt-2 text-sm font-semibold'>Typography, color, spacing</h3>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          <div className='rounded-lg border border-border/70 bg-muted/50 p-4'>
            <h4 className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Typography
            </h4>
            <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
              <li>
                <span className='font-medium text-foreground'>Primary font:</span> Inter
              </li>
              <li>
                <span className='font-medium text-foreground'>Headers:</span> text-lg font-semibold
              </li>
              <li>
                <span className='font-medium text-foreground'>Body:</span> text-sm
                text-muted-foreground
              </li>
              <li>
                <span className='font-medium text-foreground'>Line height:</span> leading-tight for
                UI, leading-relaxed for documentation
              </li>
            </ul>
            <p className='mt-3 text-xs text-muted-foreground'>
              Typography should feel like labeling on precision equipment: minimal, clear, and
              intentional.
            </p>
          </div>
          <div className='rounded-lg border border-border/70 bg-muted/50 p-4'>
            <h4 className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Color system
            </h4>
            <ul className='mt-2 space-y-2 text-sm'>
              {colors.map((color) => (
                <li key={color.role} className='border-l border-border/70 pl-3'>
                  <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                    {color.role}
                  </p>
                  <p className='text-xs text-foreground'>Tokens: {color.token}</p>
                  <p className='text-xs text-muted-foreground'>{color.usage}</p>
                </li>
              ))}
            </ul>
            <p className='mt-3 text-xs text-muted-foreground'>
              Colors serve function, not flair. Favor industrial, grounded palettes.
            </p>
          </div>
          <div className='rounded-lg border border-border/70 bg-muted/50 p-4'>
            <h4 className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Spacing and layout
            </h4>
            <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
              <li>Use consistent scales: gap-2, gap-4, gap-6.</li>
              <li>Inputs and buttons: px-4 py-2.</li>
              <li>Page containers: max-w-5xl mx-auto.</li>
            </ul>
            <p className='mt-3 text-xs text-muted-foreground'>
              Every pixel of space should clarify structure and improve readability.
            </p>
          </div>
        </div>
      </section>

      {/* Components and icons */}
      <section className='space-y-6 rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-4'>
            <div>
              <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Components
              </p>
              <h3 className='mt-2 text-sm font-semibold'>Cards, panels, buttons, modals</h3>
            </div>
            <div className='space-y-3 text-sm text-muted-foreground'>
              <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Cards and panels
                </p>
                <p className='mt-1 text-sm'>
                  Use Card or PanelBody to organize related information. Avoid floating elements.
                  Every component should belong to a clear structure.
                </p>
              </div>
              <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Buttons
                </p>
                <ul className='mt-1 space-y-1 text-sm'>
                  <li>
                    <span className='font-medium text-foreground'>Primary:</span>{' '}
                    variant=&quot;default&quot; for key actions
                  </li>
                  <li>
                    <span className='font-medium text-foreground'>Secondary:</span>{' '}
                    variant=&quot;outline&quot; for neutral or cancel actions
                  </li>
                  <li>
                    <span className='font-medium text-foreground'>Destructive:</span>{' '}
                    variant=&quot;destructive&quot; only for irreversible actions
                  </li>
                </ul>
                <p className='mt-2 text-xs'>
                  Always use clear labels. Avoid icon only buttons except inside dense toolbars.
                </p>
              </div>
              <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  Modals
                </p>
                <p className='mt-1 text-sm'>
                  Include a title, description, and two actions. Primary actions are right aligned
                  and visually emphasized. Use padding and section dividers to reduce cognitive
                  load.
                </p>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div>
              <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
                Icons
              </p>
              <h3 className='mt-2 text-sm font-semibold'>Lucide as the single icon system</h3>
            </div>
            <div className='space-y-3 text-sm text-muted-foreground'>
              <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
                <ul className='space-y-1 text-sm'>
                  <li>Library: Lucide</li>
                  <li>Sizes: 16px inline, 20px in buttons.</li>
                  <li>Spacing: use space-x-2 when paired with text.</li>
                  <li>Color: inherit text color, no stand alone accents.</li>
                </ul>
                <p className='mt-2 text-xs'>Icons reinforce meaning. They never replace it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction and feedback */}
      <section className='rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Interaction and feedback
        </p>
        <h3 className='mt-2 text-sm font-semibold'>Fast, confident responses</h3>
        <div className='mt-3 grid gap-4 text-sm text-muted-foreground md:grid-cols-3'>
          <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Loading
            </p>
            <p className='mt-1 text-sm'>
              Use skeletons or shimmer placeholders for short waits. Target sub 400ms interactions.
            </p>
          </div>
          <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Save states
            </p>
            <p className='mt-1 text-sm'>
              Provide clear visual feedback for saving, autosave, and unsaved changes.
            </p>
          </div>
          <div className='rounded-lg border border-border/70 bg-muted/40 p-3'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Motion
            </p>
            <p className='mt-1 text-sm'>
              Framer Motion transitions under 150ms, used only to support comprehension and
              hierarchy.
            </p>
          </div>
        </div>
      </section>

      {/* Do and do not */}
      <section className='rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Do and do not
        </p>
        <h3 className='mt-2 text-sm font-semibold'>Guardrails for everyday design decisions</h3>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          <div className='rounded-lg border border-border/80 bg-muted/40 p-4'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500'>Do</p>
            <ul className='mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground'>
              {doItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='rounded-lg border border-border/80 bg-muted/40 p-4'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-destructive'>
              Do not
            </p>
            <ul className='mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground'>
              {dontItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation note */}
      <section className='rounded-xl border border-border bg-card/80 p-6 text-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Implementation
        </p>

        <div className='mt-3 grid gap-4 items-start md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]'>
          <div>
            <h3 className='text-sm font-semibold text-foreground'>How to apply these guidelines</h3>
            <p className='mt-2 text-sm text-foreground leading-relaxed max-w-2xl'>
              This guide scales with the GoBasile component library and is the single source of
              truth for new UI. Every new component, page, or state should reference these
              guidelines before implementation.
            </p>
            <p className='mt-3 text-xs font-medium text-muted-foreground'>
              Design with intent. Each decision should make GoBasile feel like a precise, reliable
              tool built by professionals for professionals.
            </p>
          </div>

          <ul className='rounded-lg border border-border/70 bg-muted/40 p-3 text-xs text-muted-foreground space-y-2'>
            <li>
              <span className='font-medium text-foreground'>Before you build:</span> Check
              Principles, Layout, and Components.
            </li>
            <li>
              <span className='font-medium text-foreground'>While designing:</span> Use the defined
              tokens for color, spacing, and type.
            </li>
            <li>
              <span className='font-medium text-foreground'>Before shipping:</span> Confirm states,
              feedback, and error handling match this guide.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
