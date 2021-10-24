import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  const [results, setResults] = React.useState(false)
  const callPython = () => {
    axios.get(
      'http://localhost:8080'
    ).then((res) => {
      console.log(res.data)
      if (res.data === "success") {
        setResults(true);
      }
    });
  }

  return (
    <div>
      <Head>
        <title>irys</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.top}>
          <div className={styles.titleBox}>
            <h1>
              IRYS
            </h1>
            <p>
              Using eye tracking technology to combat ADHD
            </p>
            {results ?
              <Link href="/results">
                <button
                  className={styles.openAppButton}
                >
                  VIEW RESULTS
                </button>
              </Link>

              :

              <button
                onClick={() => callPython()}
                className={styles.openAppButton}
              >
                OPEN APP

              </button>}


          </div>
          <img className={styles.hero} src="/heroWaves.svg"></img>
        </div>


        <div id="middle" className={styles.middle}>
          <div>
            <img src="/laptop.svg" alt="" />
            <p>The app uses software combined with an eye tracker that is intuitive and simple. The software then detects any patterns and identifies distracted eye movements or zoning off and returns the results in easy to read format. The app will be free and accessible to anyone.</p>
          </div>
          <div className={styles.middleTitle}>
            <img src="/eye.svg" alt="" />
            <p>Multiple studies have shown that eye motion is correlated to ADHD. In this particular <Link href="https://www.sciencedirect.com/science/article/pii/S0042698914001187"> study </Link>, they found that the average eye movements and blinks were higher in the group with ADHD. Using eye tracking technology, we hope to identify or help identify symptomes of ADHD</p>
          </div>
          <div>
            <img src="/handshake.svg" alt="" />
            <p>Combining research on ADHD with technology makes diagnosing ADHD easier for doctors. Downloading the app can help patients beyond the hospital room.The app will be free to use and will help to close healthcare inequality and better healthcare overall.</p>
          </div>
        </div>

        <div id="bottom" className={styles.bottom}>
          <div className={styles.bottomText}>
            <h1>Technology</h1>
            <p>
              The underlying technology for this project used machine learning with OpenCV and Python to track eye movements and determine states of distractedness. The UI and webapp are both built on NextJS, a ReactJS framework with TypeScript integration.Behind the scenes the app communicates with CockroachDB to collect and store user data to be used for overall correlation. The entire app also communicates via Node APIs.
            </p>

            <img className={styles.first} src="/python.svg" alt='python' />
            <img className={styles.second} src="/nextjs.svg" alt='nextjs' />
            <img className={styles.third} src="/cockroachlabs.svg" alt='cockroachlabs' />
            <img className={styles.fourth} src="/opencv.svg" alt='opencv' />
          </div>

          <div className={styles.footer}></div>
        </div>

      </div>


    </div >
  )
}

export default Home
