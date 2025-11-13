'use client';

import { Highlight, themes } from 'prism-react-renderer';

type CodeBlockProps = {
  code: string;
  language?: 'tsx' | 'jsx' | 'ts' | 'js';
  className?: string;
};

export function CodeBlock({ code, language = 'tsx', className }: CodeBlockProps) {
  return (
    <Highlight code={code.trim()} language={language} theme={themes.nightOwl}>
      {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={[
            'mt-3 overflow-auto rounded-lg border border-border/80 bg-muted/80 p-4 text-[11px] leading-relaxed',
            highlightClassName,
            className,
          ]
            .filter(Boolean)
            .join(' ')}
          style={style}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
