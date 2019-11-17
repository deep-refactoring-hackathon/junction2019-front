import React from "react"

import css from "./styles.scss"

export default ({ text, onBack }) => (
  <div className={css.container}>
    <div className={css.box}>
      <div className={css.text}>{text}</div>
      <div className={css.controls}>
        <img
          className={css.back}
          src="https://res.cloudinary.com/dzpmqwz0e/image/upload/c_scale,w_81/v1573957931/3bbb6bf175932d5e78df7f65b35908fd.png"
          onClick={onBack}
        />
      </div>
    </div>
  </div>
)
