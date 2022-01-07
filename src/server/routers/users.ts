import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { createRouter } from '../create-router';
import { getUsernameFromName } from '@/lib/helpers';
import { __jwt__ } from '@/constants';

export const userRouter = createRouter()
  .query('all', {
    async resolve({ ctx }) {
      return await ctx.prisma.users.findMany();
    },
  })
  .query('getByJWT', {
    async resolve({ ctx }) {
      const jwt = ctx.req.cookies[__jwt__.name];

      if (!jwt) return null;

      return await ctx.prisma.users.findFirst({
        where: {
          jwt,
        },
      });
    },
  })
  .mutation('create', {
    input: z.object({
      name: z.string().min(1).max(50),
      password: z.string().min(1).max(255),
      jwt: z.string().min(1).max(255),
    }),
    async resolve({ ctx, input }) {
      const username = getUsernameFromName(input.name);
      return await ctx.prisma.users.create({
        data: {
          username,
          ...input,
        },
      });
    },
  });
