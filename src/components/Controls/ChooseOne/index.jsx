import React from "react"

import Button from "~/components/common/Button"

import css from "./styles.scss"

export default ({ onAnswer }) => (
  <div>
    <div>
      <Button kind="primary" onClick={onAnswer()}>
        Choose
      </Button>
    </div>
  </div>
)
