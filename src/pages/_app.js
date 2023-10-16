import 'styles/tailwind.css'
import Head from 'next/head'
import Header from '@containers/Header'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Calculadora Contable</title>
        <meta name="description" content="Ejercicios y formulas contables aplicadas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col'>
        <Header />
        <main className='w-full'>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}

export default MyApp
