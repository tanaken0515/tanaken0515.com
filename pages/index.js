import Head from 'next/head'
import Layout, { name, siteTitle } from '../components/layout'
import TopicsTimeline from '../components/TopicsTimeline'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
  },
  topicsHeader: {
    marginTop: theme.spacing(2)
  }
}))

export default function Home() {
  const classes = useStyles()
  const topics = [
    { date: '2021-07-01', content: 'sample01' },
    { date: '2021-07-02', content: 'sample02' },
    { date: '2021-07-03', content: 'sample03' },
    { date: '2021-07-04', content: 'sample04' },
    { date: '2021-07-05', content: 'sample05' },
  ]

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Avatar alt={name} src="/images/profile.png" className={classes.avatar} />
        <Typography variant='h4' gutterBottom>{name}</Typography>
        <Typography variant='body1'>
          ソフトウェアエンジニアをやっています。Rubyと犬が好きです。<br/>
          <br/>
          東京在住ですが、鹿児島のRubyコミュニティである
          <Link href='https://k-ruby.github.io/' target='_blank' rel='noopener'>K-Ruby</Link>
          のメンバーです。
          興味のある分野はWebアプリケーションの開発とCRE(Customer Reliability Engineering)と自然言語処理で、飼っている犬はゴールデンレトリバーです。<br/>
          <br/>
          現在はGMOペパボ株式会社で
          <Link href='https://suzuri.jp' target='_blank' rel='noopener'>SUZURI</Link>
          の開発に携わっています。
        </Typography>
      </section>
      <section>
        <Typography variant='h5' className={classes.topicsHeader}>Topics</Typography>
        <TopicsTimeline items={topics}/>
      </section>
    </Layout>
  )
}
