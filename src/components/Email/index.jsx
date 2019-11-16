import React, { useState } from "react"
import classnames from "classnames"

import css from "./styles.scss"
import Button from "../common/Button/index"

const getEmailClassName = spin =>
  classnames(css.email, {
    [css.spinClockwise]: spin === 1,
    [css.spinAntiClockwise]: spin !== 1,
  })

export default () => {
  const [spin, setSpin] = useState(false)

  const updateRotated = direction => () => setSpin(direction)

  return (
    <div>
      <div className={getEmailClassName(spin)}>
        <div className={css.row}>
          <span className={css.label}>from: </span>foo@ya.ru
        </div>
        <div className={css.row}>
          <span className={css.label}>subject: </span>New store!
        </div>
        <div>
          Hi Artem, Did you know our discount promotion is back and you
          automatically save on your next rides. Until 19.11 you get a 30%
          discount (max discount per ride 10€) for your trips in Berlin. What
          makes it even better: The discount is granted automatically in the
          Uber App. Grab your friends and try it out. Simply book a ride through
          the Uber App and enjoy the discount.
        </div>
      </div>
      <div className={css.actions}>
        <Button onClick={updateRotated(-1)} kind="danger">
          SPAM
        </Button>
        <Button onClick={updateRotated(1)} kind="success">
          FINE
        </Button>
      </div>
    </div>
  )
}
