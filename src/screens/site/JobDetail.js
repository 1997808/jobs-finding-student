import React, { useState, useRef } from 'react'
import myImage from "../../assets/images/715272_l.jpg"
import JobInfo from "../../components/jobInfo"
// import Title from "../../components/title"
import DetailJob from "./user/content/DetailJob"
import DetailCompany from "./user/content/DetailCompany"
import DetailComment from "./user/content/DetailComment"
import Snackbar from '../../components/snackbar'
import { Link } from 'react-router-dom'

const avatar = ["Google.png", "nikon.png", "PizzaPlanet.png", "pringle.png", "ShareX_Logo.png", "Valorant_icon.png"]
let avatarRandom = avatar[Math.floor(Math.random() * avatar.length)]

export default function JobDetail() {
  const snackbarRef = useRef();

  const HandleSnackbar = (e) => {
    e.preventDefault();
    snackbarRef.current.openSnackBar('Nộp đơn thành công');
  }

  const [content, setContent] = useState("detail")
  const handleContent = (page) => {
    setContent(page)
  }

  return (
    <React.Fragment>
      <div className="row" style={styles.container}>
        <img src={myImage} style={styles.banner} alt="ava"></img>
        <div style={styles.jobNormal}>
          <JobInfo avatarRandom={avatarRandom} />
        </div>
      </div>

      <div style={styles.navigateBar}>
        <h5 onClick={() => handleContent("detail")} style={content === "detail" ? styles.navTextActive : styles.navText}>Chi tiết công việc</h5>
        <h5 onClick={() => handleContent("company")} style={content === "company" ? styles.navTextActive : styles.navText}>Công ty</h5>
        <h5 onClick={() => handleContent("comment")} style={content === "comment" ? styles.navTextActive : styles.navText}>Đánh giá</h5>
      </div>

      <div style={styles.container2}>
        {content === "detail" ?
          <DetailJob />
          : content === "company" ?
            <DetailCompany />
            : <DetailComment />
        }
      </div>

      <div style={styles.btnContainer}>
        {content === "comment"
          ? <Link to={"/addcomment"}><button style={styles.submitBtn}>Viết đánh giá</button></Link>
          : <button style={styles.submitBtn} onClick={(e) => HandleSnackbar(e)}>Nộp đơn ứng tuyển</button>}
      </div>

      <Snackbar message={"Something went wrong..."} ref={snackbarRef} />
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
    marginBottom: "75px"
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
    color: "#eee",
    transition: "all 0.2s linear",
  },

  navTextActive: {
    padding: "5px 0",
    marginRight: "30px",
    borderBottom: "3px solid #45B6FF",
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

  btnContainer: {
    width: "100%",
    height: "60px",
    position: "fixed",
    bottom: "0",
    left: "0",
    background: "#fff",
    padding: "10px 30px",
    borderTop: "1px solid #eee"
  },

  submitBtn: {
    width: "100%",
    height: "40px",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    // background: "#5160FF",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px"
  },
}