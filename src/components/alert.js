import React from 'react'

export default function Alert(props) {
  let { good, detail, active } = props
  return (
    <div style={active ? good ? styles.alert : styles.alertBad : { display: "none" }}>
      <p>{detail}</p>
    </div >
  )
}

const styles = {
  alert: {
    position: "fixed",
    top: "100px",
    width: "calc(100% - 30px)",
    color: "#fff",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    padding: "10px",
  },

  alertBad: {
    backgroundImage: "linear-gradient(to top right, #FF6B6B , #FFD538)",
  }
}