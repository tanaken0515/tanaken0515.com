import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
