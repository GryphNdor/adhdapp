import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar() {
  return (
    <header className={styles.header}>

      <nav className={styles.nav}>
        <ul className={styles.container}>
          <li><Link href='/'><h3>Home</h3></Link></li>
          <li><a onClick={() => scroll.scrollTo(800)}>About</a></li>
          <li><a onClick={() => scroll.scrollTo(1500)}> Tech</a></li>
          <li><Link href='/team'>Team</Link></li>
        </ul>
      </nav>

    </header >
  )
}
