import type { APIRoute } from 'astro';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { eventos } from '../../../../eventos-data';

export async function getStaticPaths() {
  return eventos.map((event) => ({
    params: { eventId: event.id },
  }));
}

const R2_ACCOUNT_ID = import.meta.env.R2_ACCOUNT_ID
const R2_ACCESS_KEY_ID = import.meta.env.R2_ACCESS_KEY_ID
const R2_SECRET_ACCESS_KEY = import.meta.env.R2_SECRET_ACCESS_KEY
const R2_BUCKET_NAME = import.meta.env.R2_BUCKET_NAME

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

export const GET: APIRoute = async ({ params }) => {
  const { eventId } = params;
  
  if (!eventId) {
    return new Response(JSON.stringify({ error: 'Event ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const command = new ListObjectsV2Command({
      Bucket: R2_BUCKET_NAME,
      Prefix: `${eventId}/gallery/`,
      MaxKeys: 1000,
    });

    const response = await s3Client.send(command);
    
    if (!response.Contents || response.Contents.length === 0) {
      return new Response(JSON.stringify({ images: [] }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const images = response.Contents
      .filter(obj => {
        const key = obj.Key || '';
        return key !== `${eventId}/gallery/` && /\.(jpg|jpeg|png|webp|gif)$/i.test(key);
      })
      .map(obj => ({
        key: obj.Key,
        url: `https://www.pupunhacode.com/${obj.Key}`,
        lastModified: obj.LastModified,
        size: obj.Size
      }))
      .sort((a, b) => (a.key || '').localeCompare(b.key || ''));

    return new Response(JSON.stringify({ images }), {
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      }
    });

  } catch (error) {
    console.error('Error listing R2 objects:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to fetch gallery images',
      details: error instanceof Error ? error.message : 'Unknown error',
      images: [] 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};