import { useSession, signIn, signOut } from "next-auth/react";

import Layout from "@/components/layout";

export default function CamperVanPage() {
  const { data: session, status } = useSession();
  const userEmail = session?.user.email;

  if (status === "loading") {
    return <p>Hang on there...</p>;
  }

  if (status === "authenticated") {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    );
  }

  return (
    <Layout>
      <div>
        <p>Not signed in.</p>
        <button onClick={() => signIn("github")}>Sign in</button>
      </div>
    </Layout>
  );
}
