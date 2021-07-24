import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
  },
}))

export default function Profile() {
  const classes = useStyles()

  return (
    <>
      <Avatar src="/images/profile.png" className={classes.avatar}/>
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
    </>
  )
}
