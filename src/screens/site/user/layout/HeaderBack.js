import React from 'react'
import {
  Link
} from "react-router-dom";

export default function HeaderBack() {
  return (
    <div style={styles.header}>
      <Link to={"/"}>
        <i onClick={() => { }} style={styles.icon} className={"fas fa-angle-left"}></i>
      </Link>
    </div>
  )
}

const styles = {
  header: {
    width: "100%",
    height: "60px",
    padding: "0 15px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
  },

  icon: {
    fontSize: "24px",
    padding: "18px 15px",
    color: "#444"
  },
}