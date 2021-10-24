import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../component/Layout'
import '../styles/pureStyles.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
