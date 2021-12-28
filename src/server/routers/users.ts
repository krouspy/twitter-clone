import { createRouter } from '../create-router';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

export const userRouter = createRouter()
  .query('all', {
    async resolve({ ctx }) {
      return await ctx.prisma.users.findMany();
    },
  })
  .mutation('create', {
    input: z.object({
      name: z.string().min(1).max(50),
      username: z.string().min(1).max(50),
    }),
    async resolve({ ctx, input }) {
      const user = await ctx.prisma.users.create({
        data: input,
      });
      return user;
    },
  });
