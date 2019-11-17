import React from "react"

import css from "./styles.scss"

export default ({ task }) => (
  <div className={css.frame}>
    {/* <div className={css.helpBar}>
      <div className={css.duck}></div>
      <div className={css.help}></div>
    </div> */}
    <div className={css.window}>
      <div className={css.message}>{task.payload.text}</div>
      <img className={css.picture} src={task.payload.imageUrl} />
    </div>
  </div>
)
