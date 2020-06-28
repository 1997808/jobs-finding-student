import React from 'react'
import JobInfo from "./jobInfo"
import {
  Link
} from "react-router-dom";

export default function JobItem() {
  return (
    <Link to={"/jobdetail"}>
      <div style={styles.jobNormal}>
        <JobInfo />
      </div>
    </Link>
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