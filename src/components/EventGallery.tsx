import  { useState } from 'react';

interface EventGalleryProps {
  eventId: string;
  eventTitle: string;
  images?: {
    key: string;
    url: string;
    lastModified?: string;
    size?: number;
  }[];
}

export default function EventGallery({ eventId, eventTitle, images = [] }: EventGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
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
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group"
            onClick={() => openLightbox(imageUrl.url)}
          >
            <div className="aspect-video relative">
              <img
                src={imageUrl.url }
                alt={`${eventTitle} - Foto ${index + 1}`}
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
        >
          <img
            src={lightboxImage}
            alt="Imagem em tamanho completo"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}