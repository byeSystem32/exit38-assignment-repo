import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Methodology } from "@/app/components/Methodology";
import { TestSection } from "@/app/components/TestSection";
import { Validation } from "@/app/components/Validation";
import { ModelResults } from "@/app/components/ModelResults";
import { ComparisonSummary } from "@/app/components/ComparisonSummary";
import { Conclusions } from "@/app/components/Conclusions";

// ChatGPT simulation images
import chatgptGen0 from "@/assets/images/chatgpt-image-before-sim.png";
import chatgptGen272 from "@/assets/images/chatgpt-image-250-gen.png";
import chatgptCharts from "@/assets/images/chatgpt-image-after-sim.png";

// Gemini simulation images
import geminiGen0 from "@/assets/images/gemini-image-before-sim.png";
import geminiGen250 from "@/assets/images/gemini-image-250-gen.png";
import geminiOutput from "@/assets/images/gemini-image-after-sim.png";

// Claude simulation images
import claudeGen2 from "@/assets/images/claude-image-before-sim.png";
import claudeGen262 from "@/assets/images/claude-image-250-gen.png";
import claudeOutput from "@/assets/images/claude-image-after-sim.png";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-background dark:to-gray-900 -z-10" />
      
      <div className="relative">
        <Header />
        <Hero />
        
        <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
          <Methodology />
          <TestSection />
          <Validation />
          <ComparisonSummary />
          
          {/* Model Results */}
          <section className="space-y-16">
            <h2 className="text-4xl font-semibold tracking-tight">Results</h2>
            
            <ModelResults
              rank={3}
              modelName="Gemini 3 Thinking"
              title="Third Place"
              description="Gemini 3 Thinking demonstrated the fastest completion time among all tested models. However, it was unable to provide a direct ZIP file download, requiring manual file creation and organization in VSCode. The simulation accurately modeled organism behavior, though the interactions between organisms were notably simplified compared to other models. A particularly useful feature was the integrated data visualization panel that appeared post-execution, providing immediate insights into the evolutionary trends."
              highlights={[
                "Fastest completion time",
                "Required manual file assembly (no ZIP export)",
                "Simplified organism interactions",
                "Built-in data analysis panel at completion"
              ]}
              images={[
                { label: "Before Running", placeholder: "simulation-setup", imageUrl: geminiGen0 },
                { label: "~250 Generations", placeholder: "evolution-progress", imageUrl: geminiGen250 },
                { label: "Data Analysis", placeholder: "data-visualization", imageUrl: geminiOutput }
              ]}
            />
            
            <ModelResults
              rank={2}
              modelName="ChatGPT 5.2 Thinking"
              title="Second Place"
              description="ChatGPT 5.2 Thinking achieved the second-fastest completion time and successfully generated a complete, downloadable ZIP package. The extraction and setup process was seamless, requiring only a single extraction step. During compilation, one minor error occurred but was resolved with a single follow-up prompt. The simulation featured accurate organism modeling with straightforward interactions, presenting biological information in a clear, accessible format. Upon completion, a comprehensive summary was displayed in the command line interface."
              highlights={[
                "Second-fastest completion",
                "Complete ZIP package with easy extraction",
                "Single compilation error, quickly resolved",
                "Accurate but simplified interactions",
                "Command-line summary output"
              ]}
              images={[
                { label: "Before Running", placeholder: "simulation-interface", imageUrl: chatgptGen0 },
                { label: "~250 Generations", placeholder: "population-evolution", imageUrl: chatgptGen272 },
                { label: "After Running", placeholder: "summary-output", imageUrl: chatgptCharts }
              ]}
            />
            
            <ModelResults
              rank={1}
              modelName="Claude Opus 4.5"
              title="First Place"
              description="Claude Opus 4.5 required the longest processing time, but utilized this time to thoroughly review, test, and optimize the code before delivery. Evidence suggests the model actually executed test runs internally, adjusting parameters and validating outputs to ensure optimal performance. The resource intensity was significant—consuming nearly 90% of usage limits in a single prompt, requiring a $5 credit reload. However, the results justified the investment: stunning visualizations, highly accurate organism interaction modeling, and a sophisticated side panel displaying real-time data analytics. Post-simulation, the program delivered both a command-line summary and the most comprehensive, professionally-formatted data visualizations of all tested models."
              highlights={[
                "Longest processing time with internal testing",
                "High resource consumption (90% usage limit)",
                "Outstanding visual quality and design",
                "Most accurate organism interaction modeling",
                "Real-time analytics side panel",
                "Professional-grade data visualization output"
              ]}
              images={[
                { label: "Before Running", placeholder: "advanced-interface", imageUrl: claudeGen2 },
                { label: "~250 Generations", placeholder: "detailed-evolution", imageUrl: claudeGen262 },
                { label: "After Running", placeholder: "comprehensive-analysis", imageUrl: claudeOutput }
              ]}
            />
          </section>
          
          {/* Conclusions */}
          <Conclusions />
        </main>
        
        {/* Footer */}
        <footer className="border-t border-border mt-32">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <p className="text-sm text-muted-foreground text-center">
              Exit 38 Model Assignment • Research by Darius Zafar
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}