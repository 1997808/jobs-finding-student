import React from 'react'
import myImage from "../assets/images/715272_l.jpg"
import myAvatar from "../assets/images/Valorant_icon.png"

export default function FeaturedJob() {
  return (
    <div style={styles.featuredJob}>
      <img src={myImage} style={styles.banner}></img>
      <div style={styles.jobInfo}>
        <img src={myAvatar} style={styles.avatar}></img>
        <div style={styles.jobOverview}>
          <h4>Thực tập sinh thiết kế đa phương tiện năm 3 năm 4</h4>
          <h6 style={styles.text2}>Công ty Cổ phần Pete Ite</h6>
          <h6 style={styles.text2}>Hà Nội</h6>
        </div>
        <i style={styles.bookmark} className={"fas fa-bookmark"}></i>
      </div>
    </div>
  )
}

const styles = {
  featuredJob: {
    width: "100%",
    height: "auto",
    marginBottom: "15px",
    borderRadius: "5px",
    boxShadow: "0 3px 6px #bbb",
    overflow: "hidden",
  },

  banner: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px"
  },

  jobInfo: {
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