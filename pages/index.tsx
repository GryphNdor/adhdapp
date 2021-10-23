import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.top}>
          <h1 className={styles.h1}>
            ADHD Tracker
          </h1>
        </div>

        <div className={styles.middle}>

        </div>
        <img className={styles.hero} src="/heroWaves.svg" alt="" />

        <div className={styles.bottom}>
          <h1>Technology</h1>
        </div>

      </div>

    </div >
  )
}

export default Home
