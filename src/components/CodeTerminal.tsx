import { useState, useEffect, useRef, useCallback } from "react";
import { RotateCcw, Terminal } from "lucide-react";

interface Token {
  text: string;
  className: string;
}

const tokens: Token[] = [
  { text: "// Perfil profissional de Hiago\n", className: "text-muted/60 italic" },
  { text: "const ", className: "text-purple-500 dark:text-purple-400 font-semibold" },
  { text: "developer ", className: "text-blue-500 dark:text-blue-400" },
  { text: "= ", className: "text-pink-500 dark:text-pink-400" },
  { text: "{\n  ", className: "text-fg" },
  { text: "name", className: "text-accent font-semibold" },
  { text: ": ", className: "text-pink-500 dark:text-pink-400" },
  { text: '"Hiago Gabriel"', className: "text-emerald-600 dark:text-emerald-400 font-medium" },
  { text: ",\n  ", className: "text-fg" },
  { text: "role", className: "text-accent font-semibold" },
  { text: ": ", className: "text-pink-500 dark:text-pink-400" },
  { text: '"Full-Stack Developer"', className: "text-emerald-600 dark:text-emerald-400 font-medium" },
  { text: ",\n  ", className: "text-fg" },
  { text: "location", className: "text-accent font-semibold" },
  { text: ": ", className: "text-pink-500 dark:text-pink-400" },
  { text: '"São Paulo, BR"', className: "text-emerald-600 dark:text-emerald-400 font-medium" },
  { text: ",\n  ", className: "text-fg" },
  { text: "skills", className: "text-accent font-semibold" },
  { text: ": ", className: "text-pink-500 dark:text-pink-400" },
  { text: "[", className: "text-fg" },
  { text: '"React"', className: "text-emerald-600 dark:text-emerald-400" },
  { text: ", ", className: "text-fg" },
  { text: '"TypeScript"', className: "text-emerald-600 dark:text-emerald-400" },
  { text: ", ", className: "text-fg" },
  { text: '"Node"', className: "text-emerald-600 dark:text-emerald-400" },
  { text: ", ", className: "text-fg" },
  { text: '"SQL"', className: "text-emerald-600 dark:text-emerald-400" },
  { text: "]", className: "text-fg" },
  { text: ",\n  ", className: "text-fg" },
  { text: "status", className: "text-accent font-semibold" },
  { text: ": ", className: "text-pink-500 dark:text-pink-400" },
  { text: '"Bora construir algo incrível juntos!"', className: "text-emerald-600 dark:text-emerald-400 font-medium" },
  { text: "\n};", className: "text-fg" }
];

const totalLength = tokens.reduce((sum, t) => sum + t.text.length, 0);

// Slice the tokens to the current character limit
function getSlicedTokens(tokensList: Token[], count: number): Token[] {
  let remaining = count;
  const result: Token[] = [];
  for (const token of tokensList) {
    if (remaining <= 0) break;
    if (token.text.length <= remaining) {
      result.push(token);
      remaining -= token.text.length;
    } else {
      result.push({
        ...token,
        text: token.text.slice(0, remaining),
      });
      remaining = 0;
    }
  }
  return result;
}

// Group sliced tokens into lines by splitting on '\n'
function getLinesFromTokens(slicedTokens: Token[]): Token[][] {
  const lines: Token[][] = [[]];
  for (const token of slicedTokens) {
    const parts = token.text.split("\n");
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) {
        lines.push([]);
      }
      if (parts[i].length > 0) {
        lines[lines.length - 1].push({
          text: parts[i],
          className: token.className,
        });
      }
    }
  }
  return lines;
}

// Whether the user asked the OS to minimize motion
function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function CodeTerminal() {
  const reducedMotion = useRef(prefersReducedMotion()).current;
  const [charCount, setCharCount] = useState(reducedMotion ? totalLength : 0);
  const [isTyping, setIsTyping] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);

  // Cancel every pending step timeout scheduled by handleRun / auto-run
  const clearScheduled = useCallback(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  // Delay typing initialization on mount to reduce initial CPU load
  useEffect(() => {
    if (reducedMotion) return;
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 800);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  // Character typing interval
  useEffect(() => {
    if (!isTyping) return;
    const interval = setInterval(() => {
      setCharCount((prev) => {
        if (prev >= totalLength) {
          clearInterval(interval);
          setIsTyping(false);
          return totalLength;
        }
        // Random speed variance, optimized for rendering frequency (35ms)
        const randomIncrement = Math.random() > 0.45 ? 3 : 2;
        return Math.min(prev + randomIncrement, totalLength);
      });
    }, 35);

    return () => clearInterval(interval);
  }, [isTyping]);

  // Scroll to bottom of terminal when output updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [outputLines]);

  const runExecution = useCallback(() => {
    clearScheduled();
    setOutputLines([]);

    const steps = [
      { text: "node developer.ts", delay: 200 },
      { text: "Iniciando verificação de stack...", delay: 700 },
      { text: "✔ Frontend: React & Vite [Ativo]", delay: 1200 },
      { text: "✔ Backend: Node.js & PostgreSQL [Estável]", delay: 1700 },
      { text: "✔ Mensagem: \"Bora construir algo incrível juntos!\"", delay: 2200 }
    ];

    steps.forEach((step) => {
      const id = window.setTimeout(() => {
        setOutputLines((prev) => [...prev, step.text]);
      }, step.delay);
      timeoutsRef.current.push(id);
    });
  }, [clearScheduled]);

  // Auto-run the "execution" once typing has finished (unless motion is reduced)
  useEffect(() => {
    if (isTyping || reducedMotion) return;
    if (charCount < totalLength) return;
    if (outputLines.length > 0) return;
    const id = window.setTimeout(runExecution, 600);
    timeoutsRef.current.push(id);
    return () => clearTimeout(id);
  }, [isTyping, reducedMotion, charCount, outputLines.length, runExecution]);

  // Cancel any pending timeouts on unmount
  useEffect(() => clearScheduled, [clearScheduled]);

  const handleReset = () => {
    clearScheduled();
    setCharCount(reducedMotion ? totalLength : 0);
    setIsTyping(!reducedMotion);
    setOutputLines([]);
  };

  const sliced = getSlicedTokens(tokens, charCount);
  const lines = getLinesFromTokens(sliced);

  return (
    <div className="mx-auto flex h-[340px] w-full max-w-[500px] flex-col overflow-hidden rounded-2xl border border-line bg-card/45 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-accent/40 lg:mx-0 lg:max-w-none lg:h-[380px]">
      {/* Title Bar */}
      <div className="flex items-center justify-between border-b border-line bg-card/65 px-4 py-3 select-none">
        <div className="flex items-center gap-1.5">
          <div className="size-3 rounded-full bg-[#ff5f56]" />
          <div className="size-3 rounded-full bg-[#ffbd2e]" />
          <div className="size-3 rounded-full bg-[#27c93f]" />
        </div>

        <div className="flex items-center gap-1.5 font-oswald text-xs font-medium tracking-[0.5px] text-muted">
          <Terminal size={12} className="text-accent" />
          <span>developer.ts</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex cursor-pointer items-center justify-center rounded p-1 text-muted transition-colors hover:bg-soft hover:text-fg"
            title="Reiniciar digitação"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div
        ref={scrollRef}
        className="terminal-scroll flex-1 overflow-y-auto p-4 font-mono text-[12.5px] leading-[1.65] select-text sm:text-[13px] sm:leading-[1.7]"
      >
        {/* Code Content */}
        <div className="min-w-fit">
          {lines.map((lineTokens, lineIdx) => {
            const isLastLine = lineIdx === lines.length - 1;
            return (
              <div key={lineIdx} className="flex">
                <span className="w-6 select-none pr-3.5 text-right font-mono text-[11.5px] text-muted/30">
                  {lineIdx + 1}
                </span>
                <span className="flex flex-wrap items-center whitespace-pre text-left">
                  {lineTokens.map((token, tokenIdx) => (
                    <span key={tokenIdx} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                  {isLastLine && isTyping && (
                    <span className="ml-[1px] inline-block h-3.5 w-1.5 animate-pulse align-middle bg-accent" />
                  )}
                </span>
              </div>
            );
          })}
        </div>

        {/* Terminal Output Console */}
        {outputLines.length > 0 && (
          <div className="mt-4 rounded-lg border border-black/40 bg-[#0c0c0f] p-3 font-mono text-xs select-none">
            {outputLines.map((line, idx) => {
              const isCommand = line === "node developer.ts";
              return (
                <div key={idx} className="flex items-start gap-2 py-0.5 leading-relaxed">
                  <span className={isCommand ? "text-accent font-bold" : "text-white/40"}>
                    {isCommand ? "$" : ">"}
                  </span>
                  <span
                    className={
                      isCommand
                        ? "text-white/90 font-semibold"
                        : line.startsWith("✔")
                        ? "text-emerald-400"
                        : "text-white/55"
                    }
                  >
                    {line}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
