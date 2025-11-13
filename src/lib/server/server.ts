import { createTRPCSvelteServer } from 'trpc-svelte-query/server';

import { createContext } from './context';
import { appRouter } from './routes/_app';

import { resolve } from '$app/paths';

export const trpcServer = createTRPCSvelteServer({
  endpoint: resolve(`/api/trpc`),
  router: appRouter,
  createContext,
});
