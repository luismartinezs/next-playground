import Head from "next/head";

import Layout from "@/components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Playground</title>
        <meta name="description" content="Next Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>HOME</Layout>
    </>
  );
}
