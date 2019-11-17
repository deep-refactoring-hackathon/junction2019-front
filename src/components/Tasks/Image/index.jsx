import React, { useState } from "react"

import DuckChat from "../DuckChat"

import css from "./styles.scss"

export default ({ task }) => {
  const [DuckHelp, setDuckHelp] = useState(false)

  return (
    <div className={css.frame}>
      {DuckHelp && <DuckChat onBack={() => setDuckHelp(false)} />}
      <div className={css.helpBar}>
        <div className={css.duck} onClick={() =>setDuckHelp(true) }></div>
        {/* <div className={css.help}></div> */}
      </div>
      <div className={css.window}>
        <div className={css.message}>{task.payload.text}</div>
        <img className={css.picture} src={task.payload.imageUrl} />
      </div>
    </div>
  )
}
