import React from "react"

import css from "./styles.scss"

export default ({ text, onClose }) => (
  <div>
    <div className={css.gray}></div>
    <div className={css.modal}>
      <div className={css.title}>
        <img src="https://res.cloudinary.com/dzpmqwz0e/image/upload/c_scale,w_239/v1573957332/Untitled_Figma_2019-11-17_04-21-45.png" />
      </div>
      <img
        className={css.duck}
        src="https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573957761/25.png"
      />
      <div className={css.message}>{text}</div>
      <div className={css.bottom}>
        <div className={css.ok} onClick={onClose}></div>
      </div>
    </div>
  </div>
)
