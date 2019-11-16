import React from "react"

import css from "./styles.scss"

const Message = ({ text }) => <div className={css.message}>{text}</div>

export default ({ task }) => (
  <div className={css.container}>
    <div className={css.window}>
      <div className={css.topBar}>
        <div className={css.name}>
          <div className={css.from}>{task.payload.from}</div>
          <div className={css.status}>online</div>
        </div>
        <div className={css.avatar}>
          <img src="https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573943639/%D0%BB%D0%B8%D1%86%D0%BE.png" />
        </div>
      </div>
      <div className={css.messages}>
        {task.payload.messages.map((message, index) => (
          <Message text={message} key={index} />
        ))}
      </div>
      <div className={css.input}>
        <div className={css.field}></div>
        <div className={css.submit}></div>
      </div>
    </div>
  </div>
)
