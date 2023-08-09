import Head from "next/head";

import { useEffect, useState } from "react";

export async function getStaticProps() {
  // throw new Error("Server-side error occurred");
  return {
    props: {
      hello: "world",
    },
    revalidate: 10, // ISR
  };
}

export default function Home({ hello }: { hello: string }) {
  // throw new Error("Server-side error occurred");

  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    async function fetchCookie() {
      // NOTE there's some error with this
      const res = await fetch("/api/cookies");
      const data = await res.json();
      setCookie(data.cookie);
    }
    fetchCookie();
  }, []);

  return (
    <>
      <Head>
        <title>Next Playground</title>
        <meta name="description" content="Next Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>Home</div>
        <div>{hello}</div>
        <div>{cookie}</div>
      </>
    </>
  );
}
