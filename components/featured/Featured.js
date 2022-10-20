import React from 'react'
import styles from '../../styles/featured.module.css'

const Featured = (props) => {
  return (
    <div className={styles.statHolder}>
      <div className={styles.statTitle}>{props.title}</div>
      <div className={styles.statValue}>{props.value}</div>
      <div className={styles.changeHolder}>
        <span className={styles.changeRank}>{props.rank}</span>
        <span className={styles.positive}>^</span>
        <span className={styles.changeValue}>
          {/* function + state which shows difference between old value and new value
          if positive - class, if negative - class, no change - nothing */}
          2
        </span>
      </div>

    </div>
  )
}

export default Featured