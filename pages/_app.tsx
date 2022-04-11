import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component,pageProps: { session, ...pageProps }}: AppProps) {
  return(
    <>
      <Head>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  ) 
}

export default MyApp
