import React from 'react'
import Title from './title'

export default function AlertConfirm(props) {
  let { title, detail, active } = props
  return (
    <div style={active ? styles.alertContainer : { display: "none" }}>
      <div style={styles.alert}>
        <Title title={title} />
        <p style={styles.alertDetail}>{detail}</p>
        <div style={styles.btnContainer}>
          <button style={styles.submitBtn} onClick={() => { }}>Có</button>
          <button style={styles.deniedBtn} onClick={() => { }}>Không</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  alertContainer: {
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    background: "rgba(238,238,238,0.5)",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100"
  },

  alert: {
    minWidth: "270px",
    width: "calc(100% - 120px)",
    padding: "0 15px 15px 15px",
    background: "#fff",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  alertDetail: {
    fontSize: "12px",
    fontWeight: "300",
  },

  btnContainer: {
    width: "100%",
    height: "40px",
    background: "#fff",
    marginTop: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  submitBtn: {
    minWidth: "80px",
    width: "45%",
    height: "40px",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    // backgroundImage: "linear-gradient(to top right, #FF6B6B , #FFD538)",
  },

  deniedBtn: {
    minWidth: "80px",
    width: "45%",
    height: "40px",
    border: "none",
    color: "#444",
    borderRadius: "5px",
    backgroundImage: "#eee",
  },
}