import React from 'react'
import myImage from "../assets/images/715272_l.jpg"
import JobInfo from "./jobInfo"
import {
  Link
} from "react-router-dom";

export default function FeaturedJob() {
  return (
    <Link to={"/jobdetail"}>
      <div style={styles.featuredJob}>
        <img src={myImage} style={styles.banner} alt="banner"></img>
        <div style={styles.jobInfo}>
          <JobInfo />
        </div>
      </div>
    </Link>
  )
}

const styles = {
  featuredJob: {
    width: "100%",
    height: "auto",
    background: "#fff",
    marginBottom: "15px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px #bbb",
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
}