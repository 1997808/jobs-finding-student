import React from 'react'
import Noti from '../../../components/noti'
import FeaturedNoti from '../../../components/featuredNoti'

export default function Notification() {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Mới nhất</h3>
      <FeaturedNoti iconName="fa-search" time="3 tiếng trước" url="/recruiting" />
      <h3 style={styles.title}>Tuần này</h3>
      <Noti iconName="fa-briefcase" time="2 ngày trước" url="/recruiting" />
      <Noti iconName="fa-search" time="4 ngày trước" url="/recruiting" />
      <Noti iconName="fa-briefcase" time="5 ngày trước" url="/recruiting" />
      <Noti iconName="fa-briefcase" time="6 ngày trước" url="/recruiting" />
      <Noti iconName="fa-search" time="7 ngày trước" url="/recruiting" />
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