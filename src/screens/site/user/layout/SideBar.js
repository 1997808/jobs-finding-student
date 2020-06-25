import React from 'react'

export default function SideBar() {
  return (
    <div style={styles.drawer}>
      <div style={styles.avatar}>
        <img></img>
        <img></img>
      </div>
      <div style={styles.funcItem}></div>
    </div>
  )
}

const styles = {
  drawer: {
    width: "70vw",
    height: "100vh",
    padding: "0 15px",
    left: "-70vw",
    background: "#ffffff",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #eeeeee",
    zIndex: 10,
  },

  icon: {
    fontSize: "24px",
    padding: "18px",
    color: "#dddddd"
  },
}