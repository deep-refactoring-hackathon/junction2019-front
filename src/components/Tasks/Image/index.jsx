import React, { useState } from "react"

import DuckChat from "../DuckChat"
import Help from "../Help"

import css from "./styles.scss"

export default ({ task }) => {
  const [DuckHelp, setDuckHelp] = useState(false)
  const [help, setHelp] = useState(false)

  return (
    <div className={css.frame}>
      {DuckHelp && <DuckChat onBack={() => setDuckHelp(false)} />}
      {help && <Help text={task.help} onBack={() => setHelp(false)} />}
      <div className={css.helpBar}>
        <div className={css.duck} onClick={() => setDuckHelp(true)}></div>
        <div className={css.help} onClick={() => setHelp(true)}></div>
      </div>
      <div className={css.window}>
        <div className={css.message}>{task.payload.text}</div>
        <img className={css.picture} src={task.payload.imageUrl} />
      </div>
    </div>
  )
}
