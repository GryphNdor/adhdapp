import React from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <main>
      {children}
    </main>
  )
}
