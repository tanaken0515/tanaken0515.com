import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {
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
          primary='株式会社Leaner Technologies'
        />
        <ListItemSecondaryAction>
          <IconButton edge='end' href='https://leaner.co.jp/' target='_blank' rel='noopener'>
            <ExitToApp />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}
