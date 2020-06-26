import React from 'react'
import JobItem from '../../../components/jobItem'

export default function Recruting() {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Đề xuất công việc</h3>
      <JobItem />
      <JobItem />
      <h3 style={styles.title}>Công việc đang ứng tuyển</h3>
      <JobItem />
      <JobItem />
      <JobItem />
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