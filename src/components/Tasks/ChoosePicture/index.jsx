import React, { useState } from "react"

import DuckChat from "../DuckChat"
import Help from "../Help"

import css from "./styles.scss"

const Card = ({ url }) => <img className={css.card} src={url} />

export default ({ task, onAnswer }) => {
  const [DuckHelp, setDuckHelp] = useState(false)
  const [help, setHelp] = useState(false)
  const [selected, setSelected] = useState(0)

  const nextSelected = () => {
    if (selected === task.payload.options.length - 1) {
      return setSelected(0)
    }
    return setSelected(selected + 1)
  }
  const prevSelected = () => {
    if (selected === 0) {
      return setSelected(task.payload.options.length - 1)
    }
    return setSelected(selected - 1)
  }

  return (
    <>
      <div className={css.frame}>
        {DuckHelp && <DuckChat onBack={() => setDuckHelp(false)} />}
        {help && <Help text={task.help} onBack={() => setHelp(false)} />}
        <div className={css.helpBar}>
          <div className={css.duck} onClick={() => setDuckHelp(true)}></div>
          <div className={css.help} onClick={() => setHelp(true)}></div>
        </div>

        <div className={css.window}>
          <div className={css.message}>{task.payload.text}</div>
          <div className={css.cardRow}>
            <div className={css.left} onClick={prevSelected}></div>
            <Card url={task.payload.options[selected].text} />
            <div className={css.right} onClick={nextSelected}></div>
          </div>
        </div>
      </div>
      <div className={css.bar}>
        <div className={css.ok} onClick={onAnswer(selected)}></div>
      </div>
    </>
  )
}
