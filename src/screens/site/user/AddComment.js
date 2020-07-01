import React, { useState, useRef } from 'react'
import Snackbar from '../../../components/snackbar'

export default function AddComment() {
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleDetail = (event) => {
    setDetail(event.target.value);
  }

  // const handleSubmit = (event) => {
  //   alert('An essay was submitted: ');
  //   event.preventDefault();
  // }

  const snackbarRef = useRef();

  const HandleSnackbar = (e) => {
    e.preventDefault();
    snackbarRef.current.openSnackBar('Gửi đánh giá thành công');
  }

  return (
    <React.Fragment>
      <form style={styles.form}>
        <h4 style={styles.text}>Tên hiển thị</h4>
        <input style={styles.input} type="text" value={name} onChange={(e) => handleName(e)} />

        <h4 style={styles.text}>Đánh giá</h4>
        <input style={styles.input} type="number" />

        <h4 style={styles.text}>Nội dung đánh giá</h4>
        <textarea
          style={styles.textarea}
          rows={10}
          value={detail}
          onChange={(event) => {
            handleDetail(event)
          }} />

        <div style={styles.btnContainer}>
          <button style={styles.submitBtn} onClick={(e) => HandleSnackbar(e)}>Gửi đánh giá</button>
        </div>
      </form>
      <Snackbar ref={snackbarRef} />
    </React.Fragment>
  )
}


const styles = {
  text: {
    paddingBottom: "5px"
  },

  form: {
    marginTop: "20px",
    marginBottom: "10px",
    width: "100%",
    height: "auto",
    padding: "0 15px",
  },

  input: {
    width: "100%",
    height: "40px",
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "5px 0 0 5px",
    padding: "0 10px",
    marginBottom: "15px"
  },

  textarea: {
    width: "100%",
    resize: "none",
    minHeight: "40px",
    border: "1px solid #eee",
    borderRadius: "5px 0 0 5px",
    padding: "10px",
    marginBottom: "15px"
  },

  btnContainer: {
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "15px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #eee"
  },

  submitBtn: {
    width: "100%",
    height: "40px",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
  },
}