import React from 'react'
import myAvatar from "../assets/images/Valorant_icon.png"

export default function JobInfo() {
  return (
    <React.Fragment>
      <img src={myAvatar} style={styles.avatar}></img>
      <div style={styles.jobOverview}>
        <h4 style={styles.jobName}>Thực tập sinh thiết kế đa phương tiện năm 3 năm 4</h4>
        <h6 style={styles.text}>Công ty Cổ phần Pete Ite</h6>
        <h6 style={styles.text}>Hà Nội</h6>
        <h6 style={styles.text2}>Bạn còn 9 ngày để ứng tuyển</h6>
      </div>
      <i style={styles.bookmark} className={"fas fa-bookmark"}></i>
    </React.Fragment>
  )
}

const styles = {
  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "5px",
  },

  jobOverview: {
    padding: "0 15px",
  },

  jobName: {
    paddingBottom: "2px"
  },

  text: {
    fontWeight: 300
  },

  text2: {
    fontWeight: 400,
    color: "#bbb"
  },

  bookmark: {
    fontSize: "24px",
    padding: "18px 0",
    color: "#ddd"
  },
}