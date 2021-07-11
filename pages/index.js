import Head from 'next/head'
import Layout, { name, siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Avatar alt={name} src="/images/profile.png" className={classes.avatar} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </section>
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
