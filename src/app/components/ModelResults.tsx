import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ImagePlaceholder {
  label: string;
  placeholder: string;
  imageUrl?: string;
}

interface ModelResultsProps {
  rank: number;
  modelName: string;
  title: string;
  description: string;
  highlights: string[];
  images: ImagePlaceholder[];
}

export function ModelResults({ rank, modelName, title, description, highlights, images }: ModelResultsProps) {
  const [lightboxImage, setLightboxImage] = useState<{ url: string; label: string } | null>(null);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const rankColors = {
    1: {
      badge: "from-yellow-400 to-amber-500",
      border: "border-yellow-200 dark:border-yellow-900",
      bg: "bg-yellow-50/50 dark:bg-yellow-950/20",
      text: "text-yellow-900 dark:text-yellow-100"
    },
    2: {
      badge: "from-slate-400 to-slate-500",
      border: "border-slate-200 dark:border-slate-800",
      bg: "bg-slate-50/50 dark:bg-slate-950/20",
      text: "text-slate-900 dark:text-slate-100"
    },
    3: {
      badge: "from-orange-400 to-orange-600",
      border: "border-orange-200 dark:border-orange-900",
      bg: "bg-orange-50/50 dark:bg-orange-950/20",
      text: "text-orange-900 dark:text-orange-100"
    }
  };

  const colors = rankColors[rank as keyof typeof rankColors];

  return (
    <>
      <div className={`rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm p-8 space-y-8`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${colors.badge} flex items-center justify-center text-white font-semibold shadow-lg`}>
                {rank}
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{modelName}</h3>
                <p className={`text-sm font-medium ${colors.text}`}>{title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-sm max-w-none">
          <p className="text-foreground/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Key Highlights */}
        <div className="space-y-3">
          <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Key Highlights</h4>
          <div className="grid gap-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-foreground/80">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="space-y-4">
          <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">Visual Documentation</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="space-y-3">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-border overflow-hidden relative group">
                  {image.imageUrl ? (
                    // Real image
                    <>
                      <img 
                        src={image.imageUrl} 
                        alt={image.label}
                        className="w-full h-full object-cover cursor-pointer"
                        onClick={() => setLightboxImage({ url: image.imageUrl!, label: image.label })}
                      />
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </>
                  ) : (
                    // Placeholder styling
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center space-y-2 p-6">
                          <div className="w-12 h-12 mx-auto rounded-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <svg className="w-6 h-6 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {image.placeholder}
                          </div>
                        </div>
                      </div>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </div>
                <p className="text-sm font-medium text-center text-foreground/70">
                  {image.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox using Portal */}
        {lightboxImage && createPortal(
          <div 
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm cursor-pointer flex items-center justify-center p-8"
            onClick={() => setLightboxImage(null)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, margin: 0 }}
          >
            <img 
              src={lightboxImage.url} 
              alt={lightboxImage.label}
              className="cursor-default shadow-2xl max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {/* Image label */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg pointer-events-none">
              <p className="text-white text-sm font-medium">{lightboxImage.label}</p>
            </div>
            {/* Close button */}
            <button 
              className="fixed top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full p-2 transition-colors z-10"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* ESC hint */}
            <div className="fixed top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg pointer-events-none">
              <p className="text-white text-xs font-medium">Press ESC to close</p>
            </div>
          </div>,
          document.body
        )}
      </div>
    </>
  );
}