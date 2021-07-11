import Head from 'next/head'
import Image from 'next/image'
import Layout, { name, siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
        priority
        src="/images/profile.png"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
      <section className={utilStyles.headingMd}>
        <p>
          ソフトウェアエンジニアをやっています。Rubyと犬が好きです。<br/>
          <br/>
          東京在住ですが、鹿児島のRubyコミュニティである<a href="https://k-ruby.github.io/">K-Ruby</a>のメンバーです。
          興味のある分野はWebアプリケーションの開発とCRE(Customer Reliability Engineering)と自然言語処理で、飼っている犬はゴールデンレトリバーです。<br/>
          <br/>
          現在はGMOペパボ株式会社で<a href="https://suzuri.jp">SUZURI</a>の開発に携わっています。
        </p>
      </section>
    </Layout>
  )
}
