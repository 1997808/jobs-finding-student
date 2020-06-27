import React from 'react'
import FeaturedJob from '../../components/featuredJob'
import JobItem from '../../components/jobItem'
import Title from '../../components/title'

export default function Home() {
  return (
    <div style={styles.container}>
      {/* <div style={styles.jobList}> */}
      <Title title="NỔI BẬT TRONG TUẦN" />
      <FeaturedJob />
      <Title title="KHÁM PHÁ" />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      {/* </div> */}
    </div>
  )
}

const styles = {
  container: {
    marginTop: "60px"
  },
}