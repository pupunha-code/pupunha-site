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

export async function getEventGalleryImages(eventId: string): Promise<{url: string, alt?: string}[]> {
  try {
    const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || import.meta.env.R2_ACCOUNT_ID;
    const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID || import.meta.env.R2_ACCESS_KEY_ID;
    const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY || import.meta.env.R2_SECRET_ACCESS_KEY;
    const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || import.meta.env.R2_BUCKET_NAME;

    if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
      console.warn(`R2 credentials not configured, returning empty gallery for ${eventId}`);
      return [];
    }

    const { S3Client, ListObjectsV2Command } = await import('@aws-sdk/client-s3');
    
    const s3Client = new S3Client({
      region: 'auto',
      endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
      },
    });

    const command = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
      Prefix: `${eventId}/gallery/`,
      MaxKeys: 1000,
    });

    const response = await s3Client.send(command);
    
    if (!response.Contents || response.Contents.length === 0) {
      return [];
    }

    const images = response.Contents
      .filter(obj => {
        const key = obj.Key || '';
        return key !== `${eventId}/gallery/` && /\.(jpg|jpeg|png|webp|gif)$/i.test(key);
      })
      .map(obj => ({
        url: `https://www.pupunhacode.com/${obj.Key}`,
        alt: `Foto do evento ${eventId}`
      }))
      .sort((a, b) => a.url.localeCompare(b.url));

    return images;
  } catch (error) {
    console.error(`Error fetching gallery for ${eventId}:`, error);
    return [];
  }
}

export function getEventGalleryUrl(eventId: string, imageIndex: number): string {
  return getR2ImageUrl(`${eventId}/gallery/image-${imageIndex}.jpg`);
}