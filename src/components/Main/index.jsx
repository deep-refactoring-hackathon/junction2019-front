import React from "react"

import Button from "~/components/common/Button"
import TextInput from "~/components/common/TextInput"

import css from "./styles.scss"

const Main = () => (
  <div>
    <h1>Main</h1>
    <div>
      <Button>Log Out</Button>
      <Button kind="primary">Log In</Button>
      <Button kind="success">Log In</Button>
      <Button kind="warning">Log In</Button>
      <Button kind="danger">Log In</Button>
    </div>
    <br />
    <div>
      <TextInput type="text" placeholder="Search" />
      <br />
      <TextInput type="text" kind="primary" placeholder="Search" />
      <br />
      <TextInput type="text" kind="success" placeholder="Search" />
      <br />
      <TextInput type="password" kind="warning" placeholder="Password" />
      <br />
      <TextInput type="email" kind="danger" placeholder="Email" />
      <br />
    </div>
  </div>
)

export default Main
