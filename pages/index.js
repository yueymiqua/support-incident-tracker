import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Incident Support Tracker</title>
        <meta name="description" content="Online tracking system to create and update issues statuses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span style={{color: 'purple', fontWeight: 'bold'}}>Incident Support Tracker</span>
        </h1>

        <p className={styles.description}>
          Easily track all ongoing IT issues in the office!
        </p>

        <div className={styles.grid}>
          <Link href="/new-user">
            <a className={styles.card}>
              <h2 style={{color: 'purple'}}>New User &rarr;</h2>
              <p>Create an account first if you are not registered</p>
            </a>
          </Link>
          <Link href="/login" >
            <a className={styles.card}>
              <h2 style={{color: 'purple'}}>Existing User Login &rarr;</h2>
              <p>Login to your existing account</p>
            </a>
          </Link>
          <Link href="/new-incident">
            <a className={styles.card}>
              <h2 style={{color: 'purple'}}>New Incident &rarr;</h2>
              <p>Create an incident relating to your problem</p>
            </a>
          </Link>
          <Link href="/incidents"className={styles.card}>
            <a className={styles.card}>
              <h2 style={{color: 'purple'}}>All Incidents &rarr;</h2>
              <p>Go to a list of all existing incidents</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/radian-digital/radian-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Radian Technology Challenge{' '}
        </a>
      </footer>
    </div>
  )
}
