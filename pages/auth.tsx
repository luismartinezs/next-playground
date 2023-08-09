import { useSession, signIn, signOut } from "next-auth/react";

import styles from "@/styles/Auth.module.css";

export default function CamperVanPage() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  const content =
    status === "loading" ? (
      <p>Hang on there...</p>
    ) : status === "authenticated" ? (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()} className="button">
          Sign out
        </button>
        <img
          className={styles.img}
          src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png"
          alt=""
        />
      </>
    ) : (
      <>
        <p>Not signed in.</p>
        <button onClick={() => signIn("github")} className="button">
          Sign in
        </button>
      </>
    );

  return (
    <>
      <p>
        This page is protected by{" "}
        <a href="https://next-auth.js.org" className="link">
          NextAuth.js
        </a>
        .
      </p>
      {content}
    </>
  );
}
