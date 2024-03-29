import React from 'react'

export default function HeaderBack() {
  const goBack = () => {
    window.history.back()
  }

  return (
    <div style={styles.header}>
      <i onClick={() => goBack()} style={styles.icon} className={"fas fa-angle-left"}></i>
    </div>
  )
}

const styles = {
  header: {
    width: "100%",
    height: "60px",
    padding: "0 15px",
    backgroundImage: "linear-gradient(to bottom right, #5160FF, #45B6FF)",
    display: "flex",
    alignItems: "center",
  },

  icon: {
    fontSize: "24px",
    padding: "18px 15px",
    color: "#fff"
  },
}