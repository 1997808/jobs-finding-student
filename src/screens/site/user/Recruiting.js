import React from 'react'
import JobItem from '../../../components/jobItem'
import Title from '../../../components/title'

export default function Recruting() {
  return (
    <div style={styles.container}>
      <Title title="ĐỀ XUẤT CÔNG VIỆC" />
      <JobItem />
      <JobItem />
      <Title title="CÔNG VIỆC ĐANG ỨNG TUYỂN" />
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
}