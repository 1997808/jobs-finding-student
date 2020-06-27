import React, { useState } from 'react'
import { login } from '../../utils/index';

function TextForm(props) {
  const [data, setData] = useState("")

  const handleChange = (event) => {
    setData(event.target.value);
  }

  return (
    <React.Fragment>
      <h4 style={styles.text}>{text}</h4>
      <input style={styles.input} type="text" onChange={handleChange} />
    </React.Fragment>
  )
}