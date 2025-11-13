const brandAccents = [
  {
    name: 'Brand Basil',
    token: '--brand-basil',
    hex: '#385B4F',
    usage: 'Primary accent for CTAs, key highlights, and links.',
  },
  {
    name: 'Brand Copper',
    token: '--brand-copper',
    hex: '#D88A59',
    usage: 'Secondary accent for supporting highlights, badges, and emphasis.',
  },
];

const surfaces = [
  {
    role: 'Base',
    token: 'bg-background',
    description: 'Global background for the app shell and dashboards.',
  },
  {
    role: 'Muted',
    token: 'bg-muted',
    description: 'Secondary background for controls, sidebars, and subtle groupings.',
  },
  {
    role: 'Card',
    token: 'bg-card',
    description: 'Primary surface for content blocks, forms, and panels.',
  },
];

const stateColors = [
  {
    state: 'Success',
    token: 'text-emerald-500 / bg-emerald-500/10',
    usage: 'Confirmations, positive states, completed steps.',
  },
  {
    state: 'Warning',
    token: 'text-amber-500 / bg-amber-500/10',
    usage: 'Caution messages that are not destructive.',
  },
  {
    state: 'Error',
    token: 'text-destructive / bg-destructive/10',
    usage: 'Destructive actions, validation errors, and blocking alerts.',
  },
  {
    state: 'Info',
    token: 'text-sky-500 / bg-sky-500/10',
    usage: 'Neutral notices, helper banners, and inline tips.',
  },
];

const doItems = [
  'Use brand colors sparingly for key moments and CTAs.',
  'Maintain strong contrast between text and background.',
  'Anchor layouts in neutral surfaces and use accents for focus.',
  'Reference colors via CSS variables and Tailwind tokens.',
];

const dontItems = [
  'Flood surfaces with Basil or Copper as full backgrounds.',
  'Layer accents on similar mid tone colors.',
  'Use brand colors for long form body text.',
  'Hardcode brand hex values instead of design tokens.',
];

export default function ColorPage() {
  return (
    <div className='space-y-8'>
      {/* Intro */}
      <section className='rounded-xl border border-border bg-card/70 p-6 shadow-sm'>
        <h2 className='text-base font-semibold tracking-tight'>Color Guidelines</h2>
        <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
          Color in GoBasile is functional and restrained. Muted neutrals, grounded accents, and
          confident contrast support clarity and trust in workflows for repair shops and
          technicians.
        </p>
      </section>

      {/* Philosophy */}
      <section className='grid gap-6 rounded-xl border border-border bg-card/60 p-6 shadow-sm md:grid-cols-[1.1fr_0.9fr]'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            Philosophy
          </p>
          <h3 className='mt-2 text-sm font-semibold'>Utility first, never decorative</h3>
          <p className='mt-2 text-sm text-muted-foreground'>
            The color system exists to support comprehension and hierarchy, not decoration. GoBasile
            should feel like a well used tool: durable, understated, and built for purpose.
          </p>
        </div>
        <div className='grid gap-3 text-sm'>
          <div className='rounded-lg border border-border/80 bg-muted/60 p-3'>
            <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
              Goals
            </p>
            <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
              <li>
                <span className='font-medium text-foreground'>Utility first.</span> Every color maps
                to a clear function such as feedback, hierarchy, or interaction.
              </li>
              <li>
                <span className='font-medium text-foreground'>Neutral foundation.</span> Muted grays
                and cool tones form the primary canvas.
              </li>
              <li>
                <span className='font-medium text-foreground'>Measured accent use.</span> Brand
                colors appear rarely and intentionally to signal focus.
              </li>
              <li>
                <span className='font-medium text-foreground'>Accessibility.</span> Text and
                interactive elements meet WCAG contrast targets.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand accents */}
      <section className='rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Brand accents
        </p>
        <h3 className='mt-2 text-sm font-semibold'>Basil and Copper as primary accents</h3>
        <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
          Basil and Copper are the core brand accents. Use them to highlight key actions, reinforce
          brand identity, and guide focus within neutral layouts.
        </p>
        <div className='mt-4 grid gap-4 md:grid-cols-2'>
          {brandAccents.map((color) => (
            <div
              key={color.token}
              className='flex items-center gap-4 rounded-lg border border-border/80 bg-muted/40 p-4'>
              <div
                className='h-10 w-10 rounded-md border border-border/70 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.28),transparent_55%)]'
                style={{
                  backgroundColor: color.hex,
                  backgroundBlendMode: 'soft-light',
                }}
              />
              <div className='space-y-1 text-sm'>
                <p className='font-medium text-foreground'>{color.name}</p>
                <p className='text-xs text-muted-foreground'>
                  Token: <span className='font-mono text-[0.7rem]'>{color.token}</span>
                </p>
                <p className='text-xs text-muted-foreground'>
                  Hex: <span className='font-mono text-[0.7rem]'>{color.hex}</span>
                </p>
                <p className='text-xs text-muted-foreground'>{color.usage}</p>
              </div>
            </div>
          ))}
        </div>
        <p className='mt-3 text-xs text-muted-foreground'>
          Keep Basil as the anchor accent and Copper as a supporting tone. Most screens should be
          neutral first with small, intentional uses of brand color.
        </p>
      </section>

      {/* Surfaces */}
      <section className='space-y-4 rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            Surfaces
          </p>
          <h3 className='mt-2 text-sm font-semibold'>Layered neutrals for depth</h3>
          <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
            Surfaces are built on a small set of neutral tokens. Use them consistently instead of
            inventing new background colors on a per screen basis.
          </p>
        </div>
        <div className='grid gap-4 md:grid-cols-3'>
          {surfaces.map((surface) => (
            <div key={surface.token} className='rounded-lg border border-border/70 bg-muted/40 p-4'>
              <p className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                {surface.role}
              </p>
              <p className='mt-1 text-xs font-mono text-foreground'>{surface.token}</p>
              <p className='mt-2 text-sm text-muted-foreground'>{surface.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* States and feedback */}
      <section className='space-y-4 rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <div>
          <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
            States
          </p>
          <h3 className='mt-2 text-sm font-semibold'>Color for feedback and status</h3>
          <p className='mt-2 max-w-2xl text-sm text-muted-foreground'>
            State colors communicate what changed and how urgent it is. Use a consistent mapping so
            feedback feels predictable across the product.
          </p>
        </div>
        <div className='grid gap-3 md:grid-cols-2'>
          {stateColors.map((state) => (
            <div
              key={state.state}
              className='flex items-start gap-3 rounded-lg border border-border/70 bg-muted/40 p-3'>
              <div className='mt-1 h-6 w-6 rounded-full border border-border/60 bg-gradient-to-br from-background to-muted' />
              <div className='space-y-1 text-sm'>
                <p className='font-medium text-foreground'>{state.state}</p>
                <p className='text-xs font-mono text-muted-foreground'>{state.token}</p>
                <p className='text-xs text-muted-foreground'>{state.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Do and do not */}
      <section className='rounded-xl border border-border bg-card/60 p-6 shadow-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Do and do not
        </p>
        <h3 className='mt-2 text-sm font-semibold'>Guardrails for using color</h3>
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

      {/* Summary */}
      <section className='rounded-xl border border-dashed border-border bg-muted/40 p-5 text-sm'>
        <p className='text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground'>
          Summary
        </p>
        <p className='mt-2 max-w-3xl text-sm text-muted-foreground'>
          GoBasile is anchored by Basil and Copper on top of a neutral foundation. Use these tokens
          as the single source of truth for color decisions so the product feels grounded, precise,
          and consistently utilitarian.
        </p>
      </section>
    </div>
  );
}
