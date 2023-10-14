import 'styles/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Calculadora Contable</title>
        <meta name="description" content="Ejercicios y formulas contables aplicadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>

    </div>
  )
}

export default MyApp
