import React from 'react'
import myAvatar from "../assets/images/Valorant_icon.png"

export default function JobItem() {
  return (
    <div style={styles.jobNormal}>
      <img src={myAvatar} style={styles.avatar}></img>
      <div style={styles.jobOverview}>
        <h4>Thực tập sinh thiết kế đa phương tiện năm 3 năm 4</h4>
        <h6 style={styles.text2}>Công ty Cổ phần Pete Ite</h6>
        <h6 style={styles.text2}>Hà Nội</h6>
        <h6 style={styles.text2}>Bạn còn 9 ngày để ứng tuyển</h6>
      </div>
      <i style={styles.bookmark} className={"fas fa-bookmark"}></i>
    </div>
  )
}

const styles = {
  jobNormal: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #eee",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px"
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "5px",
  },

  jobOverview: {
    padding: "0 15px",
  },

  text2: {
    color: "#bbb"
  },

  bookmark: {
    fontSize: "24px",
    padding: "18px 0",
    color: "#ddd"
  },
}