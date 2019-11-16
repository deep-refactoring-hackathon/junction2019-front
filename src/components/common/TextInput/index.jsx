import React from "react"

import classnames from "classnames"

import css from "./styles.scss"

const getClassName = kind => classnames(css.input, css[`input-${kind}`])

const supportedKinds = ["text", "password", "email"]

export default ({ type, kind, ...props }) => {
  if (supportedKinds.indexOf(type) === -1) {
    return <input {...props} />
  }
  return <input type={type} className={getClassName(kind)} {...props} />
}
