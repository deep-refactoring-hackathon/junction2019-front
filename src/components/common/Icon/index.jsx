import React from "react"
import classnames from "classnames"

import css from "./styles.scss"
import iconsCss from "./icofont.css"

const getClassName = name => classnames(iconsCss[`icofont-${name}`])

export default ({ name }) => <i className={getClassName(name)}></i>

// export default ({ className, iconName, onClick }) => {
//   const iconClass = css[`icofont-${iconName}`]
//   return <i className={`${className} ${iconClass}`} onClick={onClick}></i>
// }
