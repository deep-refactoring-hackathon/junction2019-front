import React from "react"

import EmailTask from "../Tasks/Email"
import ChooseOne from "../Controls/ChooseOne"
import YesNo from "../Controls/YesNo"
import ChoosePicture from "../Tasks/ChoosePicture"
import ChooseText from "../Tasks/ChooseText"
import Chat from "../Tasks/Chat"
import Next from "../Controls/Next"
import Image from "../Tasks/Image"

import css from "./styles.scss"

const getTaskComponent = task => {
  if (task.type === "email") {
    return EmailTask
  }

  if (task.type === "choose-text") {
    return ChooseText
  }

  if (task.type === "choose-picture") {
    return ChoosePicture
  }

  if (task.type === "chat") {
    return Chat
  }

  if (task.type === "single-image") {
    return Image
  }
}

const getTaskControls = task => {
  if (task.type === "email") {
    return YesNo
  }

  if (task.type === "choose-text") {
    return ChooseOne
  }

  if (task.type === "choose-picture") {
    return ChooseOne
  }

  if (task.type === "single-image") {
    return YesNo
  }

  if (task.type === "chat") {
    return Next
  }
}

export default ({ task, onAnswer }) => {
  const Task = getTaskComponent(task)
  const Controls = getTaskControls(task)

  return (
    <div>
      <div className={css.task}>
        <Task task={task} />
      </div>
      <Controls onAnswer={onAnswer} />
    </div>
  )
}
