import type { APIRoute } from 'astro';
import { pupunhaCode2025 } from '@/data/events/pupunha-code-2025';
import { pupunhaCode2026SideProjects } from '@/data/events/pupunha-code-2026-side-projects';

export const GET: APIRoute = () => {
  const events = [pupunhaCode2025, pupunhaCode2026SideProjects];

  return new Response(JSON.stringify(events), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};