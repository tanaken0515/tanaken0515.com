import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {
  Code,
  Work,
} from '@material-ui/icons';

export default function BelongsList() {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link color='inherit' href='https://pepabo.com/' target='_blank' rel='noopener'>GMOペパボ株式会社</Link>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Code />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Link color='inherit' href='https://k-ruby.github.io/' target='_blank' rel='noopener'>K-Ruby</Link>
          }
        />
      </ListItem>
    </List>
  )
}
