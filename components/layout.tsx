import classnames from "classnames";
import { Inter } from "next/font/google";

import styles from "@/styles/Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={classnames(styles.main, inter.className)}>{children}</main>
  );
}
