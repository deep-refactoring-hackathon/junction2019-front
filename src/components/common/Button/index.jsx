import React from "react"
import classnames from "classnames"

import css from "./styles.scss"

const getButtonColor = kind => classnames(css.button, css[`button-${kind}`])

export default ({ kind, children, ...props }) => (
  <button className={getButtonColor(kind)} {...props}>
    {children}
  </button>
)
