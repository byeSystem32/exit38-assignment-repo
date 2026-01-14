export function Header() {
  return (
    <header className="border-b border-border/40 backdrop-blur-sm bg-white/80 dark:bg-background/80 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h1 className="text-3xl font-semibold tracking-tight">
              Exit 38 Model Assignment
            </h1>
          </div>
          <p className="text-muted-foreground pl-11">
            Research by Darius Zafar
          </p>
        </div>
      </div>
    </header>
  );
}
