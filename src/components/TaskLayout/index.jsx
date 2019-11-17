import React from "react"

import EmailTask from "../Tasks/Email"
import YesNo from "../Controls/YesNo"
import ChoosePicture from "../Tasks/ChoosePicture"
import ChooseText from "../Tasks/ChooseText"
import Chat from "../Tasks/Chat"
import Next from "../Controls/Next"
import Image from "../Tasks/Image"
import FishingChat from "../Tasks/FishingChat"
import DuckChat from "../Tasks/DuckChat"
import Won from "../Tasks/Won"

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

  if (task.type === "fishing-chat") {
    return DuckChat
  }
  if (task.type === "bonus") {
    return Won
  }
}

const getTaskControls = task => {
  if (task.type === "email") {
    return YesNo
  }

  if (task.type === "choose-text") {
    return null
  }

  if (task.type === "choose-picture") {
    return null
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
        <Task task={task} onAnswer={onAnswer} />
      </div>
      {Controls && <Controls onAnswer={onAnswer} />}
    </div>
  )
}
