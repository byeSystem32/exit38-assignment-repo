export function Methodology() {
  const models = [
    { name: "ChatGPT 5.2 Thinking", type: "Flagship" },
    { name: "Claude Opus 4.5", type: "Flagship" },
    { name: "Gemini 3 Thinking", type: "Flagship" }
  ];

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-tight">Methodology</h2>
        <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
          This comparative analysis evaluates three flagship large language models through a standardized 
          biological evolution simulation task. The objective was to assess each model's ability to generate 
          complex, production-ready scientific software with realistic biological modeling and visualization capabilities.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-medium mb-4">Models Evaluated</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {models.map((model, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-border/50"
              >
                <div className="font-medium mb-1">{model.name}</div>
                <div className="text-sm text-muted-foreground">{model.type}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
          <h3 className="text-lg font-medium mb-4">Test Protocol</h3>
          <div className="space-y-3 text-foreground/80">
            <p>
              <span className="font-medium text-foreground">Simulation Type:</span> Biological evolution modeling 
              was selected as the test domain due to its ability to reveal multiple model attributes through a 
              single comprehensive prompt.
            </p>
            <p>
              <span className="font-medium text-foreground">Prompt Generation:</span> A base simulator prompt was 
              refined using Grok Thinking 4.1 to generate highly specific requirements for each simulation type.
            </p>
            <p>
              <span className="font-medium text-foreground">Consistency:</span> An identical prompt was provided to 
              each model to ensure fair comparison.
            </p>
            <p>
              <span className="font-medium text-foreground">Execution:</span> Each generated ZIP package was extracted 
              and executed following the included documentation to run the simulation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
