import React, { useState } from 'react'
// import myAvatar from "../assets/images/Valorant_icon.png"
// import Alert from "./alert"

export default function JobInfo(props) {
  const { avatarRandom } = props
  const [bookmark, setBookmark] = useState(false)

  // const handleAlert = () => {
  //   if (bookmark) {
  //     return (
  //       <Alert />
  //     )
  //   }
  // }

  return (
    <React.Fragment>
      <img src={require("../assets/images/" + avatarRandom)} style={styles.avatar} alt="ava"></img>
      <div style={styles.jobOverview}>
        <h4 style={styles.jobName}>Thực tập sinh thiết kế đa phương tiện năm 3 năm 4</h4>
        <h6 style={styles.text}>Công ty Cổ phần Pete Ite</h6>
        <h6 style={styles.text}>Hà Nội</h6>
        <h6 style={styles.text2}>Bạn còn 9 ngày để ứng tuyển</h6>
      </div>
      <i
        onClick={() => {
          setBookmark(!bookmark)
          // handleAlert()
        }}
        style={bookmark ? styles.bookmarkActive : styles.bookmark}
        className={"fas fa-bookmark"}
      ></i>
    </React.Fragment >
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
    color: "#eee",
    transition: "all 0.2s linear",
  },

  bookmarkActive: {
    fontSize: "24px",
    padding: "18px 0",
    color: "#45B6FF",
    transition: "all 0.2s linear",
  },
}