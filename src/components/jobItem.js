import React from 'react'
import JobInfo from "./jobInfo"
import {
  Link
} from "react-router-dom";

const avatar = ["Google.png", "nikon.png", "PizzaPlanet.png", "pringle.png", "ShareX_Logo.png", "Valorant_icon.png"]
let avatarRandom = avatar[Math.floor(Math.random() * avatar.length)]

export default function JobItem() {
  return (
    <Link to={"/jobdetail"}>
      <div style={styles.jobNormal}>
        <JobInfo avatarRandom={avatarRandom} />
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