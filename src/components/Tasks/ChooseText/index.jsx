import React from "react"

import css from "./styles.scss"

export default ({ task, onAnswer }) => {
  return (
    <div className={css.frame}>
      {/* <div className={css.helpBar}>
        <div className={css.duck}></div>
        <div className={css.help}></div>
      </div> */}

      <div className={css.window}>
        <div className={css.message}>{task.payload.text}</div>
        {task.payload.options.map((option, index) => (
          <div className={css.option} onClick={onAnswer(index)} key={index}>
            {option.text}
          </div>
        ))}
      </div>
    </div>
  )
}
