import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Copyright(props) {
  const { name } = props;

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={`https://twitter.com/${name}`}>
        {name}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6, 0),
  },
}))

export default function Footer(props) {
  const classes = useStyles();
  const { name, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth='md'>
        <Typography variant="subtitle1" align="center" gutterBottom>
          <Link color="inherit" href='/'>
            {title}
          </Link>
        </Typography>
        <Copyright name={name} />
      </Container>
    </footer>
  )
}
