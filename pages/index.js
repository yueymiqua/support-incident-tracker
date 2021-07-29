import Head from 'next/head'
import Image from 'next/image'
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
          <a href="http://localhost:3000/newuser" className={styles.card}>
            <h2 style={{color: 'purple'}}>New User &rarr;</h2>
            <p>Create an account first if you are not registered</p>
          </a>

          <a href="http://localhost:3000/login" className={styles.card}>
            <h2 style={{color: 'purple'}}>Existing User Login &rarr;</h2>
            <p>Login to your existing account</p>
          </a>

          <a href="http://localhost:3000/newincident" className={styles.card}>
            <h2 style={{color: 'purple'}}>New Incident &rarr;</h2>
            <p>Create an incident relating to your problem</p>
          </a>

          <a href="http://localhost:3000/allincidents"className={styles.card}>
            <h2 style={{color: 'purple'}}>All Incidents &rarr;</h2>
            <p>Go to a list of all existing incidents</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/radian-digital/radian-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Radian Technology Challenge{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
