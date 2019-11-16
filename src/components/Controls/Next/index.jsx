import React from "react"

import Button from "~/components/common/Button"

import css from "./styles.scss"

export default ({ onAnswer }) => (
  <div className={css.laylout}>
    <div className={css.button} onClick={onAnswer()}>
      GO
    </div>
  </div>
)
