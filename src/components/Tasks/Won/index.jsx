import React from "react"

import css from "./styles.scss"

export default ({ onAnswer }) => (
  <div className={css.robert} onClick={onAnswer()}>
    <img src="https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573972719/iPhone_8_-_25.png" />
  </div>
)
