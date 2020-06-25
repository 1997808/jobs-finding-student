import React from 'react'

export default function Header() {
  return (
    <div style={styles.header}>
      <i onClick={() => { }} style={styles.icon} className={"fas fa-bars"}></i>
      <h2 style={styles.logo}>Header</h2>
      <i onClick={() => { }} style={styles.icon} className={"fas fa-search"}></i>
    </div>
  )
}

const styles = {
  header: {
    width: "100%",
    height: "60px",
    padding: "0 15px",
    top: 0,
    background: "#5160FF",
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#ffffff"
  },

  icon: {
    fontSize: "24px",
    padding: "18px",
    color: "#ffffff"
  },
}