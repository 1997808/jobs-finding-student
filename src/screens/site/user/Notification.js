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
    marginTop: "60px"
  },

  title: {
    padding: "15px 0",
  },

  noti: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderRadius: "5px",
    border: "1px solid #eee"
  },

  featuredNoti: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 3px 6px #bbb",
  },

  notiDetail: {
    padding: "2px 0",
    fontWeight: "300",
    // color: "#bbb"
  },

  date: {
    textAlign: "right",
    fontWeight: "300",
  },

  icon: {
    fontSize: "24px",
    marginRight: "15px",
    color: "#ddd"
  },
}