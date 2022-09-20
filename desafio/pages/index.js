import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Desafio Curso Next</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className="desafio">Desafio</span> do curso Tour pelo Next.js
        </h1>

        <p className={styles.description}>
          Mergulhe no framework e aprenda como as <code>props</code> chegam na
          página e sobre a ordem de execução de uma aplicação Next.js
        </p>

        <div className={styles.grid}>
          <Link href="/ssr" prefetch={false}>
            <a className={styles.card}>
              <h2>SSR &rarr;</h2>
              <p>Server Side Rendering</p>
            </a>
          </Link>
          <Link href="/ssg" prefetch={false}>
            <a className={styles.card}>
              <h2>SSG &rarr;</h2>
              <p>Static Site Generation</p>
            </a>
          </Link>
          <Link href="/isr" prefetch={false}>
            <a className={styles.card}>
              <h2>ISR &rarr;</h2>
              <p>Incremental Static Regeneration</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
