import React, { useState } from 'react'
import Title from '../../components/title'

export default function Filter() {
  const [textFind, setTextFind] = useState("")

  // const handleChange = (event) => {
  //   setTextFind(event.target.value);
  // }

  const handleSubmit = (event) => {
    alert('An essay was submitted: ' + textFind);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {/* <input style={styles.input} type="radio" onChange={handleChange} /> */}

      <Title title="Địa điểm" />
      <select style={styles.input}>
        <option style={styles.input} value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <Title title="Thời gian làm" />
      <select style={styles.input}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <Title title="Lương" />
      <select style={styles.input}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <Title title="Mức đánh giá" />
      <select style={styles.input}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <div style={styles.btnContainer}>
        <button style={styles.submitBtn} type="submit" >Áp dụng</button>
        <button style={styles.btn} type="submit" >Làm lại</button>
      </div>
    </form>
  )
}


const styles = {
  form: {
    marginBottom: "10px",
    width: "100%",
    height: "auto",
    padding: "0 15px",
    alignItems: "center"
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
    background: "#5160FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px"
  },

  btn: {
    width: "100%",
    height: "30px",
    border: "none",
    color: "#444",
    borderRadius: "5px",
    background: "#eee",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}