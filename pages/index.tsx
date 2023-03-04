import Head from 'next/head'
import { Inter } from 'next/font/google'
import classnames from 'classnames'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Playground</title>
        <meta name="description" content="Next Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classnames(styles.main, inter.className)}>
        HOME
      </main>
    </>
  )
}
