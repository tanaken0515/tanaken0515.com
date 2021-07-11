import React from 'react'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export const name = 'tanaken0515'
export const siteTitle = 'tanaken0515.com'

export default function Layout({ children }) {
  return (
    <Container maxWidth='lg'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${name}'s official website.`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header title={siteTitle} />
      <main>{children}</main>
      <Footer title={siteTitle} name={name} />
    </Container>
  )
}
