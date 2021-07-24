import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Profile from '../components/Profile'
import TopicsList from '../components/TopicsList'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { getSortedTopics } from '../lib/topics'
import Tab from '@material-ui/core/Tab'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'

export async function getStaticProps() {
  const topics = getSortedTopics()
  return {
    props: {
      topics
    }
  }
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(2),
  },
  tabPanel: {
    padding: 'unset'
  },
}))

export default function Home({ topics }) {
  const classes = useStyles()
  const [value, setValue] = React.useState('topics')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <Head>
        <title>Home - {siteTitle}</title>
      </Head>
      <section>
        <Profile />
      </section>
      <section>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
            centered
          >
            <Tab label='Topics' value='topics' />
            <Tab label='About' value='about' />
          </TabList>
          <TabPanel value='topics' className={classes.tabPanel}>
            <TopicsList items={topics}/>
          </TabPanel>
          <TabPanel value='about' className={classes.tabPanel}>
            <Typography>about...</Typography>
          </TabPanel>
        </TabContext>
      </section>
    </Layout>
  )
}
