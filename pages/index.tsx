import Head from "next/head";

import Layout from "@/components/layout";

export async function getStaticProps() {
  // throw new Error("Server-side error occurred");
  return {
    props: {
      hello: "world",
    },
  };
}

export default function Home({ hello }) {
  // throw new Error("Server-side error occurred");
  return (
    <>
      <Head>
        <title>Next Playground</title>
        <meta name="description" content="Next Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Home</div>
        <div>{hello}</div>
      </Layout>
    </>
  );
}
