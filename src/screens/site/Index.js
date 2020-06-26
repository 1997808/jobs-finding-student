import React from 'react'
import FeaturedJob from '../../components/featuredJob'
import JobItem from '../../components/jobItem'

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.jobList}>
        <h3 style={styles.title}>Nổi bật trong tuần</h3>
        <FeaturedJob />
        <h3 style={styles.title}>Khám phá</h3>
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </div>
  )
}

const styles = {
  container: {
    marginTop: "60px"
  },

  title: {
    fontWeight: 400,
    padding: "15px 0",
  },
}