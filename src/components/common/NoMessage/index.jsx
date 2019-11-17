import React from "react"

import css from "./styles.scss"

export default ({ text, onClose }) => (
  <div>
    <div className={css.gray}></div>
    <div className={css.modal}>
      <div className={css.title}>
        <img src="https://res.cloudinary.com/dzpmqwz0e/image/upload/c_scale,w_209/v1573957327/Untitled_Figma_2019-11-17_04-21-25.png" />
      </div>
      <img
        className={css.duck}
        src="https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573958353/26.png"
      />
      <div className={css.message}>{text}</div>
      <div className={css.bottom}>
        <img
          className={css.back}
          src="https://res.cloudinary.com/dzpmqwz0e/image/upload/c_scale,w_81/v1573957931/3bbb6bf175932d5e78df7f65b35908fd.png"
          onClick={onClose}
        />
      </div>
    </div>
  </div>
)
