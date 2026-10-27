import React from 'react'
import styles from '../button/Button.module.css'

const Button = () => {

    // function btnClicked(){
    //     alert("Button Clicked");
    // }

  return (
    // <button className={styles.btn} onClick={btnClicked}>Click Here</button>

    <button className={styles.btn} onDoubleClick={function onDoubleClick(){
        alert("Clicked changed")
    }}>Click Change</button>
  )
}

export default Button
