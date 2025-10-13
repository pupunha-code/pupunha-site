const R2_BUCKET_URL = 'https://www.pupunhacode.com';

export interface R2Config {
  bucketUrl: string;
  bucketName?: string;
}

export const r2Config: R2Config = {
  bucketUrl: R2_BUCKET_URL,
  bucketName: 'pupunhacode-assets'
};

export function getR2ImageUrl(path: string, config: R2Config = r2Config): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${config.bucketUrl}/${cleanPath}`;
}

export function getEventThumbnail(eventId: string): string {
  return getR2ImageUrl(`${eventId}/thumbnail.png`);
}

export async function getEventGalleryUrls(eventId: string): Promise<string[]> {
  try {
    // Use our API route to fetch gallery images via S3 API
    const response = await fetch(`/api/gallery/${eventId}`);
    
    if (!response.ok) {
      console.warn(`Failed to fetch gallery list for ${eventId}`);
      return [];
    }
    
    const data = await response.json();
    
    // Extract URLs from the API response
    return data.images?.map((img: any) => img.url) || [];
  } catch (error) {
    console.error(`Error fetching gallery for ${eventId}:`, error);
    return [];
  }
}

export function getEventGalleryUrl(eventId: string, imageIndex: number): string {
  return getR2ImageUrl(`${eventId}/gallery/image-${imageIndex}.jpg`);
}