import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

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
    <Avatar src="/images/profile.png" className={classes.avatar}/>
  )
}
