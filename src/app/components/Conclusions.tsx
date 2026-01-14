export function Conclusions() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-tight">Conclusions</h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          This comparative analysis reveals distinct performance profiles that align with different use cases 
          and priorities in scientific software development.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
          <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
          <div className="space-y-4 text-foreground/80">
            <p className="leading-relaxed">
              <span className="font-medium text-foreground">Quality vs. Speed Trade-off:</span> The evaluation 
              demonstrates a clear inverse relationship between processing time and output quality. Claude Opus 4.5's 
              extended processing time, including what appears to be internal testing and validation, produced 
              demonstrably superior results across all quality metrics.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-foreground">User Experience Considerations:</span> While Gemini 3 
              Thinking achieved the fastest completion time, the lack of automated packaging significantly impacted 
              user experience, requiring manual file organization that partially negated the speed advantage.
            </p>
            <p className="leading-relaxed">
              <span className="font-medium text-foreground">Practical Balance:</span> ChatGPT 5.2 Thinking emerged 
              as a practical middle ground, offering production-ready code with minimal friction in a reasonable 
              timeframe, making it well-suited for iterative development workflows.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recommendations for Research Use
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span><span className="font-medium">Publication-quality work:</span> Claude Opus 4.5 for its superior visualization and accuracy</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span><span className="font-medium">Teaching materials:</span> ChatGPT 5.2 for balanced quality and ease of use</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span><span className="font-medium">Rapid prototyping:</span> Gemini 3 when speed is critical and manual setup is acceptable</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20">
            <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Future Considerations
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Evaluate models on additional simulation types (physics, chemistry, social systems)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Assess long-term code maintainability and documentation quality</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 dark:text-blue-400">•</span>
                <span>Test ability to incorporate user feedback and iterate on generated code</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl border-2 border-primary/10 bg-primary/5">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-2">Final Verdict</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                For this specific task—generating a complex, graduate-level biological simulation—
                <span className="font-medium text-foreground"> Claude Opus 4.5 demonstrated the highest overall 
                capability</span>, producing code that approaches the quality expected from an experienced scientific 
                programmer. The model's apparent internal testing and validation process, while resource-intensive, 
                represents a significant advancement in AI-assisted scientific software development. However, the choice 
                between models should ultimately be guided by specific project requirements, timeline constraints, and 
                resource availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
