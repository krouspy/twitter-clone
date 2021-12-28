import superjson from 'superjson';
import { createRouter } from '../create-router';
import { userRouter } from './users';

export const appRouter = createRouter().transformer(superjson).merge('users.', userRouter);

export type AppRouter = typeof appRouter;
