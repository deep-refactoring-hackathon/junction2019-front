import React from "react"

import css from "./styles.scss"

export default ({ task }) => (
  <div>
    <img src={task.payload.imageUrl} />
  </div>
)
