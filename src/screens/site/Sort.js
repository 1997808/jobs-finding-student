import React, { useState } from 'react'
import Title from '../../components/title'
import {
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { resetSort, changeSort } from '../../actions/index'

export default function Sort() {
  const sortValue = useSelector(state => state.sort)
  const dispatch = useDispatch()

  // const [sort, setSort] = useState("default")

  const handleSort = (e) => {
    dispatch(changeSort(e.target.value))
    // setSort(e.target.value)
  }

  const handleResetSort = () => {
    dispatch(resetSort())
    // setSort("default")
  }

  // const handleSubmit = (event) => {
  //   alert('An essay was submitted: ');
  //   event.preventDefault();
  // }

  return (
    <form style={styles.form}> {/* onSubmit={handleSubmit} */}
      {/* <input style={styles.input} type="radio" onChange={handleChange} /> */}

      <Title title="Sắp xếp theo" />
      <select style={styles.input} value={sortValue} onChange={(e) => handleSort(e)}>
        {/* <select style={styles.input} value={sort} onChange={(e) => handleSort(e)}> */}
        <option value="default">Mặc định</option>
        <option value="dateOld">Ngày đăng (cũ nhất)</option>
        <option value="salaryHigh">Lương (cao - thấp)</option>
        <option value="salaryLow">Lương (thấp - cao)</option>
        <option value="ratingHigh">Đánh giá (cao - thấp)</option>
        <option value="ratingLow">Đánh giá (thấp - cao)</option>
      </select>
      <div style={styles.btnContainer}>
        <Link to={"/findjob"} style={styles.container}>
          <button style={styles.submitBtn} type="submit" >Áp dụng</button>
        </Link>
        <button
          style={styles.btn}
          onClick={() => handleResetSort()}
        // onClick={() => handleResetSort()}
        >Làm lại</button>
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

  container: {
    width: "100%",
    height: "auto",
  },

  submitBtn: {
    width: "100%",
    height: "40px",
    border: "none",
    color: "#fff",
    borderRadius: "5px",
    backgroundImage: "linear-gradient(to top left, #5160FF, #45B6FF)",
    marginBottom: "10px",
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