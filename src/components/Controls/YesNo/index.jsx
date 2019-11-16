import React from "react"

import Button from "~/components/common/Button"

import css from "./styles.scss"

export default ({ onAnswer }) => (
  <div>
    <Button kind="danger" onClick={onAnswer(false)}>NO</Button>
    <Button kind="warning">?</Button>
    <Button kind="success" onClick={onAnswer(true)}>YES</Button>
  </div>
)
