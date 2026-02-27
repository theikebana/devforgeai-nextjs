'use client';

import * as React from 'react';
import { cn } from '../../../lib/utlis'; // optional

// --------------------
// Code Context
// --------------------
type CodeContextType = { code: string };
const CodeContext = React.createContext<CodeContextType | undefined>(undefined);

function CodeProvider({ code, children }: { code: string; children: React.ReactNode }) {
  return <CodeContext.Provider value={{ code }}>{children}</CodeContext.Provider>;
}

function useCode() {
  const context = React.useContext(CodeContext);
  if (!context) throw new Error('useCode must be used within a CodeProvider');
  return context;
}

// --------------------
// Code Container
// --------------------
type CodeProps = React.ComponentProps<'div'> & { code: string };

function Code({ className, code, ...props }: CodeProps) {
  return (
    <CodeProvider code={code}>
      <div
        className={cn(
          'relative flex flex-col w-full overflow-hidden border border-white/10 bg-black text-white rounded-lg shadow-lg',
          className
        )}
        {...props}
      />
    </CodeProvider>
  );
}

// --------------------
// Copy Button with Tooltip
// --------------------
function CopyButton({ content, className }: { content: string; className?: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        'relative ml-auto w-auto h-auto px-2 py-1 text-xs rounded hover:bg-gray-800 transition text-white',
        className
      )}
    >
      Copy
      {copied && (
        <span className="absolute -top-6 right-1/2 transform translate-x-1/2 bg-gray-900/90 text-white text-xs px-2 py-1 rounded opacity-100 transition-opacity animate-fade-in-out pointer-events-none">
          Copied!
        </span>
      )}
    </button>
  );
}

// --------------------
// Typewriter Animation Styles
// --------------------
const style = `
@keyframes fade-in-out {
  0% { opacity: 0; transform: translateY(-0.25rem); }
  10% { opacity: 1; transform: translateY(0); }
  90% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-0.25rem); }
}
.animate-fade-in-out {
  animation: fade-in-out 1.5s ease-in-out forwards;
}
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}
.cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s step-start infinite;
}
`;

// --------------------
// Code Header
// --------------------
type CodeHeaderProps = React.ComponentProps<'div'> & {
  icon?: React.ElementType;
  copyButton?: boolean;
};

function CodeHeader({ className, children, icon: Icon, copyButton = false, ...props }: CodeHeaderProps) {
  const { code } = useCode();

  return (
    <div
      className={cn(
        'bg-[#0a0a0a] shrink-0 gap-x-2 border-b border-white/10 text-xs flex items-center px-4 py-2 w-full',
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 text-white" />}
      {children}
      {copyButton && <CopyButton content={code} />}
    </div>
  );
}

// --------------------
// Code Block with Typewriting
// --------------------
type CodeBlockProps = {
  cursor?: boolean;
  typingSpeed?: number; // ms per character
  className?: string;
};

function CodeBlock({ cursor = true, typingSpeed = 20, className, ...props }: CodeBlockProps) {
  const { code } = useCode();
  const [displayedCode, setDisplayedCode] = React.useState('');
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedCode((prev) => prev + code[i]);
      i++;
      if (i >= code.length) clearInterval(interval);

      // Auto scroll to bottom
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [code, typingSpeed]);

  return (
    <div
      ref={scrollRef}
      className={cn(
        'relative text-xs p-2  overflow-auto font-mono bg-black text-gray-400 w-full',
        className
      )}
      {...props}
    >
      <style>{style}</style>
      <pre className="whitespace-pre-wrap">
        <code>
          {displayedCode}
          {cursor && <span className="cursor">|</span>}
        </code>
      </pre>
    </div>
  );
}

// --------------------
// Export
// --------------------
export { Code, CodeHeader, CodeBlock, type CodeProps, type CodeHeaderProps, type CodeBlockProps };