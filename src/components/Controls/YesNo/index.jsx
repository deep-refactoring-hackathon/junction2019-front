import React from "react"

import css from "./styles.scss"

export default ({ onAnswer }) => (
  <div className={css.bar}>
    <div className={css.no} onClick={onAnswer(false)}></div>
    <div className={css.yes} onClick={onAnswer(true)}></div>
  </div>
)
