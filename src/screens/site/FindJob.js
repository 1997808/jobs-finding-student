import React from 'react'
import FeaturedJob from '../../components/featuredJob'
import JobItem from '../../components/jobItem'
import LazyLoad from 'react-lazyload';
import {
  Link
} from "react-router-dom";


function Item(props) {
  const { iconName, text, url } = props
  return (
    <Link to={url}>
      <div style={styles.funcItem}>
        <i style={styles.icon} className={"fas " + iconName}></i>
        <h4 style={styles.text}>{text}</h4>
      </div>
    </Link>
  )
}

export default function findJob() {
  const data = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  return (
    <div style={styles.container}>
      <div className="row" style={styles.funcBarContainer}>
        <div style={styles.funcBar}>
          <Item iconName="fa-filter" text="Bộ lọc" url="filter" />
          <Item iconName="fa-sort-alpha-down" text="Sắp xếp" url="sort" />
        </div>
      </div>
      <div style={styles.jobList}>
        {data.map(() => {
          return (
            <LazyLoad
              height={100}
              placeholder={<p>Loading...</p>}
            >
              <FeaturedJob />
              <JobItem />
              <JobItem />
              <JobItem />
            </LazyLoad>
          )
        })}
      </div>
    </div>
  )
}

const styles = {
  container: {
    marginTop: "115px"
  },

  funcBarContainer: {
    width: "100%",
    height: "40px",
    position: "fixed",
    top: "60px"
  },

  funcBar: {
    width: "100%",
    height: "40px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    display: "flex",
    justifyContent: "space-around",
  },

  funcItem: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "12px",
    width: "100%",
    height: "auto",
  },

  icon: {
    fontSize: "16px",
    marginRight: "10px",
  },
}