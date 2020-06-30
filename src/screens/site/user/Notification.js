import React from 'react'
import Noti from '../../../components/noti'
import FeaturedNoti from '../../../components/featuredNoti'
import Title from '../../../components/title'

export default function Notification() {
  return (
    <div style={styles.container}>
      <Title title="MỚI NHẤT" />
      <FeaturedNoti iconName="fa-search" time="1 tiếng trước" url="/findjob" />
      <FeaturedNoti iconName="fa-briefcase" time="5 tiếng trước" url="/recruiting" />

      <Title title="TUẦN NÀY" />
      <Noti iconName="fa-briefcase" time="2 ngày trước" url="/recruiting" />
      <Noti iconName="fa-search" time="4 ngày trước" url="/findjob" />
      <Noti iconName="fa-briefcase" time="6 ngày trước" url="/recruiting" />
      <Noti iconName="fa-search" time="7 ngày trước" url="/findjob" />
      <Noti iconName="fa-briefcase" time="7 ngày trước" url="/recruiting" />
    </div>
  )
}

const styles = {
  container: {
    marginTop: "60px",
  },

  title: {
    fontWeight: 400,
    padding: "15px 0",
  },
}