import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import superjson from 'superjson';
import { AppRouter } from '@/server/routers/_app';
import { __is_prod__ } from '@/constants';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config() {
    const url = 'http://localhost:3000/api/trpc';
    return {
      links: [
        loggerLink({
          enabled: opts =>
            !__is_prod__ || (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url,
        }),
      ],
      transformer: superjson,
    };
  },
  ssr: true,
  responseMeta({ clientErrors }) {
    if (clientErrors.length) {
      return {
        status: clientErrors[0].data?.httpStatus ?? 500,
      };
    }
    return {};
  },
})(App);
