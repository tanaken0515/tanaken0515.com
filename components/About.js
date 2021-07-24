import BasicTimeline from '../components/BasicTimeline'
import BelongsList from '../components/BelongsList'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    marginTop: theme.spacing(2)
  }
}))

export default function About({ careers }) {
  const classes = useStyles()

  return (
    <>
      <section>
        <Typography variant='h5' className={classes.sectionTitle}>所属</Typography>
        <BelongsList />
      </section>
      <section>
        <Typography variant='h5' className={classes.sectionTitle}>経歴</Typography>
        <BasicTimeline items={careers}/>
      </section>
    </>
  )
}
