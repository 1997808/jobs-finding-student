import React, { useState } from 'react'

export default function Info() {
  const [email, setEmail] = useState("")

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + email);
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h4 style={styles.text}>Học vấn</h4>
        <input style={styles.input} type="text" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Kinh nghiệm làm việc</h4>
        <input style={styles.input} type="text" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Chứng chỉ</h4>
        <input style={styles.input} type="text" onChange={handleChangeEmail} />

        <h4 style={styles.text}>Kỹ năng khác</h4>
        <input style={styles.input} type="text" onChange={handleChangeEmail} />

        <button style={styles.submitBtn} type="submit" >
          Lưu
        </button>
      </form>
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

  submitBtn: {
    width: "100%",
    height: "40px",
    color: "#fff",
    display: "flex",
    border: "none",
    borderRadius: "5px",
    background: "#5160FF",
    justifyContent: "center",
    alignItems: "center"
  },
}