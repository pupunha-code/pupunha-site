import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface EventGalleryProps {
  eventId: string;
  eventTitle: string;
  images?: {
    url: string;
    alt?: string;
  }[];
}

export default function EventGallery({
  eventId,
  eventTitle,
  images = [],
}: EventGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openLightbox = (imageUrl: string) => {
    const index = images.findIndex((img) => img.url === imageUrl);
    setCurrentImageIndex(index);
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(images[nextIndex].url);
  };

  const goToPrevious = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(images[prevIndex].url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "Escape") {
      closeLightbox();
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center text-neutral-400 py-8">
        <p>Nenhuma imagem encontrada na galeria.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            onClick={() => openLightbox(image.url)}
          >
            <div className="aspect-video relative">
              <img
                src={image.url}
                alt={image.alt || `${eventTitle} - Foto ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver em tamanho completo
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={lightboxImage}
            alt={images[currentImageIndex].alt || "Imagem em tamanho completo"}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
