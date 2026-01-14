export function ComparisonSummary() {
  const metrics = [
    {
      metric: "Completion Time",
      models: [
        { name: "Gemini 3", value: "Fastest", rank: 1 },
        { name: "ChatGPT 5.2", value: "Second", rank: 2 },
        { name: "Claude Opus 4.5", value: "Slowest", rank: 3 }
      ]
    },
    {
      metric: "Code Quality",
      models: [
        { name: "Claude Opus 4.5", value: "Excellent", rank: 1 },
        { name: "ChatGPT 5.2", value: "Good", rank: 2 },
        { name: "Gemini 3", value: "Good", rank: 3 }
      ]
    },
    {
      metric: "Visual Quality",
      models: [
        { name: "Claude Opus 4.5", value: "Outstanding", rank: 1 },
        { name: "ChatGPT 5.2", value: "Good", rank: 2 },
        { name: "Gemini 3", value: "Basic", rank: 3 }
      ]
    },
    {
      metric: "Interaction Accuracy",
      models: [
        { name: "Claude Opus 4.5", value: "Highly Accurate", rank: 1 },
        { name: "ChatGPT 5.2", value: "Accurate", rank: 2 },
        { name: "Gemini 3", value: "Simplified", rank: 3 }
      ]
    },
    {
      metric: "Ease of Use",
      models: [
        { name: "ChatGPT 5.2", value: "Excellent", rank: 1 },
        { name: "Claude Opus 4.5", value: "Excellent", rank: 1 },
        { name: "Gemini 3", value: "Manual Setup", rank: 3 }
      ]
    },
    {
      metric: "Resource Efficiency",
      models: [
        { name: "Gemini 3", value: "Efficient", rank: 1 },
        { name: "ChatGPT 5.2", value: "Moderate", rank: 2 },
        { name: "Claude Opus 4.5", value: "Intensive", rank: 3 }
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-tight">Comparative Analysis</h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          A detailed comparison across key performance metrics reveals distinct strengths and trade-offs 
          for each model in the biological simulation task.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left p-4 font-medium text-sm">Metric</th>
                <th className="text-left p-4 font-medium text-sm min-w-[200px]">Claude Opus 4.5</th>
                <th className="text-left p-4 font-medium text-sm min-w-[200px]">ChatGPT 5.2 Thinking</th>
                <th className="text-left p-4 font-medium text-sm min-w-[200px]">Gemini 3 Thinking</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, index) => (
                <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium text-sm">{metric.metric}</td>
                  {["Claude Opus 4.5", "ChatGPT 5.2 Thinking", "Gemini 3 Thinking"].map((modelName) => {
                    const modelData = metric.models.find(m => 
                      modelName.includes(m.name.replace(/\s+/g, ' '))
                    );
                    return (
                      <td key={modelName} className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-foreground/80">{modelData?.value}</span>
                          {modelData?.rank === 1 && (
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border border-yellow-200 dark:border-yellow-900 bg-yellow-50/50 dark:bg-yellow-950/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white font-semibold text-sm">
              1
            </div>
            <h3 className="font-medium">Best Overall</h3>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            <span className="font-medium">Claude Opus 4.5</span> delivered superior visualization quality, 
            biological accuracy, and comprehensive documentation, justifying its longer processing time.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white font-semibold text-sm">
              2
            </div>
            <h3 className="font-medium">Best Balanced</h3>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            <span className="font-medium">ChatGPT 5.2 Thinking</span> offered the best balance between 
            speed, usability, and output quality, making it ideal for rapid prototyping.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-orange-200 dark:border-orange-900 bg-orange-50/50 dark:bg-orange-950/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-semibold text-sm">
              3
            </div>
            <h3 className="font-medium">Best Speed</h3>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            <span className="font-medium">Gemini 3 Thinking</span> excelled in completion speed and resource 
            efficiency, though requiring more manual setup and producing simpler interactions.
          </p>
        </div>
      </div>
    </section>
  );
}
