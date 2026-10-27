import React from 'react'
import styles from '../Card/Card.module.css'

const Card = (props) => {
  return (
    <>
      <div className={styles.card}>
        <img src={props.img} alt="images" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    </>
  )
}

export default Card
