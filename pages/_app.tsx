import { useState } from "react";
import type { AppProps, NextWebVitalsMetric } from "next/app";

import { SessionProvider, type SessionProviderProps } from "next-auth/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import {
  SessionContextProvider,
  type Session,
} from "@supabase/auth-helpers-react";

import "@/styles/globals.css";
import Layout from "@/components/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  initialSession: Session;
  session: SessionProviderProps["session"];
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </SessionContextProvider>
  );
}

// https://nextjs.org/docs/pages/building-your-application/optimizing/analytics
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
  // has multiple uses, e.g. set metrics to external sources, to google analytics, ...
}
