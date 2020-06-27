import React, { useState } from 'react'
import Title from '../../components/title'

export default function Filter() {
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
      {/* <input style={styles.input} type="radio" onChange={handleChange} /> */}

      <Title title="Địa điểm" />
      <select style={styles.input}>
        <option value="grapefruit">Grapefruit</option>
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
      <button style={styles.submitBtn} type="submit" >

      </button>
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