import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Menubar from '../components/menubar';

export default function Home() {

  return (
    <div className={styles.container}>
      <Menubar />
      <Head>
        <title>Incident Support Tracker</title>
        <meta name="description" content="Online tracking system to create and update issues statuses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{color: '#002984', fontWeight: 'bold'}}>Incident Support Tracker</span>
        </h1>

        <p className={styles.description} style={{ color: 'black'}}>
          Easily track all ongoing IT issues in the office!
        </p>

        <div className={styles.grid}>
          <Link href="/new-incident">
            <a className={styles.card}>
              <h2 style={{color: '#3f50b5'}}>Create New Incident &rarr;</h2>
              <p>Submit new incident report to IT team</p>
            </a>
          </Link>
          <Link href="/incidents"className={styles.card}>
            <a className={styles.card}>
              <h2 style={{color: '#3f50b5'}}>Go To All Incidents &rarr;</h2>
              <p>Show list of existing incidents</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
