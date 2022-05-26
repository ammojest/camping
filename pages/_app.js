import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Camping and Walking</title>
        <meta name="description" content="Find your ideal Geek gifts including Pokemon, Disney, Star Wars & Marvel gfts. Whether you are looking for clothes, toys or homeware, we have lots of gifts whatever your budget" />
      </Head>
      <Component {...pageProps} />
    </ Layout>
  )
}

export default MyApp
