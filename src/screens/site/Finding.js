import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";

export default function Finding() {
  const [textFind, setTextFind] = useState("")

  const handleChange = (event) => {
    setTextFind(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + textFind);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input style={styles.input} type="text" onChange={handleChange} />
      <Link to={"/findjob"}>
        <button style={styles.submitBtn} type="submit" >
          <i style={styles.icon} className={"fas fa-search"}></i>
        </button>
      </Link>
    </form>
  )
}


const styles = {
  form: {
    marginTop: "20px",
    marginBottom: "10px",
    width: "100%",
    height: "auto",
    display: "flex",
    padding: "0 15px",
    justifyContent: "space-between",
    alignItems: "center"
  },

  input: {
    width: "calc(100% - 40px)",
    height: "40px",
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: "5px 0 0 5px",
    padding: "0 10px",
  },

  submitBtn: {
    width: "40px",
    height: "40px",
    display: "flex",
    border: "none",
    borderRadius: "0 5px 5px 0",
    background: "#5160FF",
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {
    fontSize: "16px",
    color: "#fff"
  },
}