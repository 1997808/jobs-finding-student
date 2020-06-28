import React from 'react'
import MyGif from "../../../../assets/images/1_qdFdhbR00beEaIKDI_WDCw.gif"

export default function NoMatch() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={MyGif} alt="404" />
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "calc(100vh - 120px)",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "auto",
  }
}