import { httpBatchLink } from '@trpc/client';
import { createTRPCProxyClient, createTRPCSvelte } from 'trpc-svelte-query';

import { transformer } from './transformer';

import { resolve } from '$app/paths';
import type { AppRouter } from '$lib/server/routes/_app';

export const trpc = createTRPCSvelte<AppRouter>({
  links: [
    httpBatchLink({
      url: resolve(`/api/trpc`),
    }),
  ],
  transformer,
});

export const api = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: resolve(`/api/trpc`),
    }),
  ],
  transformer,
});
