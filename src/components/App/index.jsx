import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { hot } from "react-hot-loader/root"

import Content from "../Content"

import css from "./styles.scss"
import TaskLayout from "../TaskLayout"
import YesMessage from "../common/YesMessage"
import NoMessage from "../common/NoMessage"

const loadTask = (id, callback) =>
  fetch(`https://peace-duck-awareness.herokuapp.com/api/v1/tasks/${id}`)
    .then(res => res.json())
    .then(callback)

const isCorrectAnswer = (answer, correctAnswers) =>
  correctAnswers.indexOf(answer) !== -1

const getText = (task, answer) => {
  if (task.type === "single-image") {
    if (isCorrectAnswer(answer, task.answers)) {
      return task.payload.info
    } else {
      return task.help || "task.help"
    }
  }

  if (task.type === "choose-text" || task.type === "choose-picture") {
    if (isCorrectAnswer(answer, task.answers)) {
      return task.payload.options[answer].info
    } else {
      return task.help || "task.help"
    }
  }
}

const App = () => {
  const [taskIndex, setTaskIndex] = useState(1)
  const [task, setTask] = useState(null)
  const [Modal, setModal] = useState(null)
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    loadTask(taskIndex, setTask)
  }, [taskIndex])

  const onAnswer = _answer => () => {
    setAnswer(_answer)
    if (_answer === null || _answer === undefined) {
      task.next_task_id && setTaskIndex(task.next_task_id)
      return
    }
    if (isCorrectAnswer(_answer, task.answers)) {
      setModal(() => YesMessage)
    } else {
      setModal(() => NoMessage)
    }
  }

  const onCloseModal = () => {
    setModal()
    if (isCorrectAnswer(answer, task.answers)) {
      task.next_task_id && setTaskIndex(task.next_task_id)
    }
  }

  if (task === null) {
    return null
  }
  return (
    <div className={css.app}>
      <Content>
        {Modal && <Modal onClose={onCloseModal} text={getText(task, answer)} />}
        <TaskLayout task={task} onAnswer={onAnswer} />
      </Content>
    </div>
  )
}

const mapStateToProps = state => ({})

export default hot(connect(mapStateToProps)(App))
