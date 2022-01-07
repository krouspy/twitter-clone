Twitter Clone built with [Next.js](https://nextjs.org/), [Chakra UI](https://chakra-ui.com/), [tRPC](https://trpc.io/) and [Prisma](https://www.prisma.io/)

## Getting started

Install dependencies

```sh
$ yarn
```

Generate Prisma artifacts

```sh
$ npx prisma generate
```

Push schemas to your database

```sh
$ npx prisma db push
```

MySQL is used in this project, be sure to set your connection string in your `.env`
