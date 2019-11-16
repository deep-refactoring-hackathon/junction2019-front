import React from "react"
import { connect } from "react-redux"
import { hot } from "react-hot-loader/root"

import Content from "../Content"

import css from "./styles.scss"
import Email from "../Email"

const App = () => {
  return (
    <div className={css.app}>
      <Content>
        <Email />
      </Content>
    </div>
  )
}

const mapStateToProps = state => ({})

export default hot(connect(mapStateToProps)(App))
