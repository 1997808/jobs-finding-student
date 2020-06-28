import React, { useState } from 'react'
import myImage from "../../assets/images/715272_l.jpg"
import JobInfo from "../../components/jobInfo"
import Title from "../../components/title"
import DetailJob from "./user/content/DetailJob"
import DetailCompany from "./user/content/DetailCompany"
import DetailComment from "./user/content/DetailComment"

export default function JobDetail() {
  const [content, setContent] = useState("comment")
  const handleContent = (page) => {
    setContent(page)
  }
  return (
    <React.Fragment>
      <div className="row" style={styles.container}>
        <img src={myImage} style={styles.banner} alt="ava"></img>
        <div style={styles.jobNormal}>
          <JobInfo />
        </div>
      </div>

      <div style={styles.navigateBar}>
        <h5 onClick={() => handleContent("detail")} style={styles.navTextActive}>Chi tiết công việc</h5>
        <h5 onClick={() => handleContent("company")} style={styles.navText}>Công ty</h5>
        <h5 onClick={() => handleContent("comment")} style={styles.navText}>Đánh giá</h5>
      </div>

      <div style={styles.container2}>
        {content === "detail" ?
          <DetailJob />
          : content === "company" ?
            <DetailCompany />
            : <DetailComment />
        }
      </div>
    </React.Fragment>
  )
}

const styles = {
  container: {
    boxShadow: "0 4px 8px #bbb",
    borderRadius: "0 0 5px 5px",
    overflow: "hidden"
  },

  container2: {
    marginTop: "15px",
    marginBottom: "15px"
  },

  banner: {
    width: "100%",
    height: "calc(100vw / 2)",
    objectFit: "cover",
  },

  jobNormal: {
    width: "100%",
    height: "auto",
    background: "#fff",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px"
  },

  navigateBar: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eee",
    marginTop: "15px"
  },

  navText: {
    padding: "5px 0",
    marginRight: "30px",
    color: "#eee"
  },

  navTextActive: {
    padding: "5px 0",
    marginRight: "30px",
    borderBottom: "3px solid #5160FF"
  },

  infoContainer: {
    boxShadow: "0 2px 4px #bbb",
    padding: "0 15px 15px 15px",
    borderRadius: "5px",
    marginTop: "15px",
    background: "#fff",
  },

  iconContainer: {
    width: "40px",
    marginRight: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  mainInfo: {
    display: "flex",
    alignItems: "center",
    paddingTop: "10px"
  },

  info: {
    fontWeight: 300,
    paddingTop: "5px"
  },

  icon: {
    fontSize: "24px",
    color: "#ddd"
  },
}