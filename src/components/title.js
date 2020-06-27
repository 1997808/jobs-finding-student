import React from 'react'

export default function Title(props) {
  return (
    <h4 style={styles.title}>{props.title}</h4>
  )
}

const styles = {
  title: {
    fontWeight: 600,
    paddingTop: "15px",
    paddingBottom: "10px",
  },
}