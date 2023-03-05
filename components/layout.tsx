import { useRef } from "react";

import classnames from "classnames";
import { Inter } from "next/font/google";

import styles from "@/styles/Layout.module.css";
import Header from "@/components/header";
import SkipToContent from "@/components/SkipToContent";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const mainContentRef = useRef<HTMLElement>(null);

  return (
    <div className={classnames(inter.className, "container mx-auto")}>
      <SkipToContent mainContentRef={mainContentRef} />
      <Header />
      <main
        ref={mainContentRef}
        tabIndex={-1}
        className={classnames(styles.main, inter.className)}
      >
        {children}
      </main>
    </div>
  );
}
