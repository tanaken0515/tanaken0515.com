import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {
  Create,
  ExitToApp,
  RecordVoiceOver,
  Star,
  WbSunny,
  Work,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  content: {
    whiteSpace: 'pre-wrap',
  }
}));

function TopicAvatarIcon(props) {
  const { category } = props;

  const icon = () => {
    switch(category) {
      case 'write':
        return <Create />
      case 'work':
        return <Work />
      case 'talk':
        return <RecordVoiceOver />
      case 'output':
        return <Star />
      default:
        return <WbSunny />
    }
  }

  return (
    <>
      {icon()}
    </>
  )
}

function TopicsListItem(props) {
  const classes = useStyles();
  const { date, content, category, link, isLast } = props;

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TopicAvatarIcon category={category} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography className={classes.content}>{content}</Typography>
          }
          secondary={date}
        />
        {link &&
          <ListItemSecondaryAction>
            <IconButton edge='end' href={link} target='_blank' rel='noopener'>
              <ExitToApp />
            </IconButton>
          </ListItemSecondaryAction>
        }
      </ListItem>
      {!isLast && <Divider variant="inset" component="li" />}
    </>
  );
}


export default function TopicsList(props) {
  const { items } = props;

  return (
    <List>
      { items.map(( {date, content, category, link}, index ) => (
        <TopicsListItem key={index} date={date} content={content} category={category} link={link} isLast={index === items.length - 1} />
      )) }
    </List>
  );
}
