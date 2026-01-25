import type { APIRoute, GetStaticPaths } from 'astro';
import { pupunhaCode2025 } from '@/data/events/pupunha-code-2025';
import { pupunhaCode2026SideProjects } from '@/data/events/pupunha-code-2026-side-projects';

const events = [pupunhaCode2025, pupunhaCode2026SideProjects];

export const getStaticPaths: GetStaticPaths = () => {
  return events.map((event) => ({
    params: { id: event.id },
    props: { event },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const { event } = props;

  return new Response(JSON.stringify(event), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};