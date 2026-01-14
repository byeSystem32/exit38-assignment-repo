export function Hero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className="space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-foreground/80">Comparative Research Study</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              Evaluating Flagship LLMs
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              A comprehensive analysis of ChatGPT 5.2 Thinking, Claude Opus 4.5, and Gemini 3 Thinking 
              through complex biological simulation generation
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Models Tested</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">250+</div>
              <div className="text-sm text-muted-foreground">Generations Simulated</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Evaluation Metrics</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pt-12">
            <div className="inline-flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
