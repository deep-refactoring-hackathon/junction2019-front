import React from "react"

import css from "./styles.scss"

const Message = ({ text }) => <div className={css.message}>{text}</div>

export default ({ task }) => (
  <div>
    <div className={css.topBar}>
      <img src="http://womenmag.ru/forpics-plus2/72311-01.jpg" />
      {task.payload.from}
    </div>
    {task.payload.messages.map((message, index) => (
      <Message text={message} key={index} />
    ))}
  </div>
)
