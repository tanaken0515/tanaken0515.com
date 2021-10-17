import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {
  Code,
  ExitToApp,
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
          primary='GMOペパボ株式会社'
        />
        <ListItemSecondaryAction>
          <IconButton edge='end' href='https://pepabo.com/' target='_blank' rel='noopener'>
            <ExitToApp />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Code />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary='K-Ruby'
        />
        <ListItemSecondaryAction>
          <IconButton edge='end' href='https://k-ruby.github.io/' target='_blank' rel='noopener'>
            <ExitToApp />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}
