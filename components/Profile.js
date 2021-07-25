import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { GitHub, Pets, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
  },
  avatar: {
    width: '100%',
    height: 'auto',
  },
  profileBody: {
    paddingTop: theme.spacing(2),
  }
}))

export default function Profile() {
  const name = 'tanaken0515'
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={4}>
          <Avatar alt={name} src="/images/profile.png" variant='square' className={classes.avatar}/>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='h6' component='h2'>
            {name}
          </Typography>
          <Typography variant='caption'>
            田中 健太郎 Kentaro TANAKA
          </Typography>
          <Typography variant='body2' className={classes.profileBody}>
            ソフトウェアエンジニアをやっています。<br/>
            Rubyと犬が好きです。
          </Typography>
          <IconButton href={`https://github.com/${name}`} target='_blank' rel='noopener'>
            <GitHub />
          </IconButton>
          <IconButton href={`https://twitter.com/${name}`} target='_blank' rel='noopener'>
            <Twitter />
          </IconButton>
          <IconButton href='https://twitter.com/latte20200623' target='_blank' rel='noopener'>
            <Pets />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}
