import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { AppRouter } from './api/trpc/[trpc]';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config() {
    const url = 'http://localhost:3000/api/trpc';
    return {
      url,
    };
  },
  ssr: true,
})(App);
