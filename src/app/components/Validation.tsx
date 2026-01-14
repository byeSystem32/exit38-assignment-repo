export function Validation() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-tight">Validation Criteria</h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          Each simulation was evaluated through a comprehensive two-phase validation process to assess 
          both biological accuracy and data quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              1
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Biological Accuracy</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Interaction patterns between organisms were carefully examined to verify they accurately 
                reflected realistic biological behaviors. This included assessment of reproduction mechanics, 
                environmental responses, survival strategies, and population dynamics under various selection pressures.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              2
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Data Integrity</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Generated data was validated for consistency with established evolutionary principles. 
                This included verifying appropriate fitness distributions, genetic drift patterns, mutation 
                accumulation rates, and the expected dynamics of allele frequency changes over generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20 backdrop-blur-sm">
        <div className="flex gap-3">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
            <span className="font-medium">Evaluation Note:</span> All simulations were run to approximately 
            250 generations to ensure sufficient evolutionary time for meaningful patterns to emerge while 
            maintaining reasonable computational requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
