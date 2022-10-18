import React from 'react'
import styles from '../styles/widget.module.css'

const Widget = () => {
  return (
    <div className={styles.widget}>
        <div className={styles.left}>
            <span className={styles.title}>FOLLOWERS</span>
            <span className={styles.counter}>234</span>
            <span className={styles.link}>See all flollowers</span>
        </div>
        <div className={styles.right}>
            <div className={styles.percentage}>
                <p>^</p>
                20%
            </div>
            <span className={styles.icon}></span>
        </div>
    </div>
  )
}

export default Widget