export function TestSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-tight">Simulation Requirements</h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          A comprehensive biological evolution simulation based on nematode populations, 
          suitable for graduate-level research and education.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900 p-8 space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Biological Evolution Simulation</h3>
          <p className="text-foreground/80 leading-relaxed">
            Create a complete, ready-to-run Python package simulating realistic biological evolution 
            at a graduate or advanced undergraduate level, featuring interactive real-time visualization 
            using Pygame as the primary display method.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Model Specifications
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80 pl-4">
                <li>• Population based on virtual nematodes (C. elegans analog)</li>
                <li>• Genome: 100 biallelic loci (0 or 1) per individual</li>
                <li>• Three trait influences: fecundity, longevity, thermal tolerance</li>
                <li>• Wright-Fisher population model (N = 1000 default)</li>
                <li>• Sexual reproduction with single-point crossover (~1% rate)</li>
                <li>• Realistic mutation rate (~10⁻⁸ per site per generation)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Evolutionary Dynamics
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80 pl-4">
                <li>• Natural selection through realistic fitness landscapes</li>
                <li>• Gene interaction modeling (epistasis)</li>
                <li>• Environmental challenges (limited food, heat stress)</li>
                <li>• Tracking of genetic diversity and heterozygosity</li>
                <li>• Analysis of genetic drift and beneficial mutations</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Visualization Requirements
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80 pl-4">
                <li>• Pygame window (minimum 800×800 pixels)</li>
                <li>• 2D environmental grid with color-coded organisms</li>
                <li>• Real-time animations (foraging, reproduction, death)</li>
                <li>• Environmental effects visualization</li>
                <li>• Live metrics overlay</li>
                <li>• Interactive controls (pause, speed, zoom, parameter adjustment)</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Code Quality Standards
              </h4>
              <ul className="space-y-2 text-sm text-foreground/80 pl-4">
                <li>• Modular architecture with clear separation of concerns</li>
                <li>• Comprehensive documentation and comments</li>
                <li>• Configurable via YAML or command-line interface</li>
                <li>• Complete README with biological concepts and controls</li>
                <li>• Research-grade accuracy for PhD-level work</li>
                <li>• Out-of-the-box functionality with minimal dependencies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <h4 className="font-medium mb-3">Data Analysis & Output</h4>
          <p className="text-sm text-foreground/80 leading-relaxed">
            Post-simulation analysis including time-series plots of trait evolution over 500 generations, 
            distribution histograms captured every 50 generations, and comprehensive tracking of evolutionary 
            metrics including average fitness, heterozygosity, and population dynamics. All outputs should be 
            suitable for scientific publication.
          </p>
        </div>
      </div>
    </section>
  );
}
