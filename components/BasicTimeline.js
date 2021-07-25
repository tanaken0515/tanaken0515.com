import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 'unset',
  },
  content: {
    whiteSpace: 'pre-wrap',
  },
  oppositeContent: {
    flex: 'inherit'
  },
}));

function Item(props) {
  const classes = useStyles();
  const { date, content, isLast } = props;

  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
        <Typography color="textSecondary">{date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography className={classes.content}>{content}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}


export default function BasicTimeline(props) {
  const classes = useStyles();
  const { items } = props;

  return (
    <Timeline className={classes.root}>
      { items.map(( {date, content}, index ) => (
        <Item key={index} date={date} content={content} isLast={index === items.length - 1} />
      )) }
    </Timeline>
  );
}
