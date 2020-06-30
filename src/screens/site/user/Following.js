import React from 'react'
import JobItem from '../../../components/jobItem'

export default function Following() {
  return (
    <div style={styles.container}>
      <JobItem />
      <JobItem />
      <JobItem />
    </div>
  )
}

const styles = {
  container: {
    marginTop: "80px"
  },
}