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
          <li><Link href='/about'>About</Link></li>
          <li><a onClick={() => scroll.scrollTo(800)}>Goals</a></li>
          <li><a onClick={() => scroll.scrollTo(1500)}> Tech</a></li>
        </ul>
      </nav>

    </header >
  )
}
