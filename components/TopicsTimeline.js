import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
}));

function TopicsTimelineItem(props) {
  const classes = useStyles();
  const { date, content, isLast } = props;

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography color="textSecondary">{date}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={2} className={classes.paper}>
          <Typography>{content}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}


export default function TopicsTimeline(props) {
  const { items } = props;

  return (
    <Timeline>
      { items.map(( {date, content}, index ) => (
        <TopicsTimelineItem key={index} date={date} content={content} isLast={index === items.length - 1} />
      )) }
    </Timeline>
  );
}
