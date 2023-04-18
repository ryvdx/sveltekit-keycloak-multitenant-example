import type { PageServerLoad } from './$types';

export const prerender = false;

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;