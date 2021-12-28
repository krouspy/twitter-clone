import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@/trpc';

export const trpc = createReactQueryHooks<AppRouter>();
