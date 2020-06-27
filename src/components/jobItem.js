import React from 'react'
// import myAvatar from "../assets/images/Valorant_icon.png"
import JobInfo from "./jobInfo"

export default function JobItem() {
  return (
    <div style={styles.jobNormal}>
      <JobInfo />
    </div>
  )
}

const styles = {
  jobNormal: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
    borderRadius: "5px",
    background: "#fff",
    boxShadow: "0 2px 4px #bbb",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px"
  },
}