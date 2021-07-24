import Head from 'next/head'
import { getSortedCareers } from '../lib/careers'
import Layout, { siteTitle } from '../components/layout'
import BasicTimeline from '../components/BasicTimeline'
import BelongsList from '../components/BelongsList'
import Profile from '../components/Profile'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

export async function getStaticProps() {
  const careers = getSortedCareers()
  return {
    props: {
      careers
    }
  }
}

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    marginTop: theme.spacing(2)
  }
}))

export default function About({ careers }) {
  const classes = useStyles()

  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <section>
        <Typography variant='h5' className={classes.sectionTitle}>プロフィール</Typography>
        <Profile />
      </section>
      <section>
        <Typography variant='h5' className={classes.sectionTitle}>所属</Typography>
        <BelongsList />
      </section>
      <section>
        <Typography variant='h5' className={classes.sectionTitle}>経歴</Typography>
        <BasicTimeline items={careers}/>
      </section>
    </Layout>
  )
}
