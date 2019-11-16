import React, { useState } from "react"
import classnames from "classnames"

import Button from "~/components/common/Button"

import css from "./styles.scss"

const getCircleClassname = isActive =>
  classnames(css.circle, { [css.isActiveCircle]: isActive })

const Card = ({ text }) => <div className={css.card}>{text}</div>

export default ({ task }) => {
  const [selected, setSelected] = useState(0)

  const { options, text } = task.payload

  const onClickNext = () => {
    if (selected === options.length - 1) {
      return setSelected(0)
    }
    return setSelected(selected + 1)
  }
  const onClickPrev = () => {
    if (selected === 0) {
      return setSelected(options.length - 1)
    }
    return setSelected(selected - 1)
  }

  return (
    <div>
      <div className={css.taskText}>{text}</div>
      <div>
        <Card text={options[selected]} />
      </div>
      <div className={css.circles}>
        {options.map((_, index) => (
          <div key={index} className={getCircleClassname(index === selected)} />
        ))}
      </div>
      <div>
        <Button kind="primary" onClick={onClickPrev}>
          Prev
        </Button>
        <Button kind="primary" onClick={onClickNext}>
          Next
        </Button>
      </div>
    </div>
  )
}
