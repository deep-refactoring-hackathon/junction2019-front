import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { hot } from "react-hot-loader/root"

import Content from "../Content"

import css from "./styles.scss"
import TaskLayout from "../TaskLayout"

const loadTask = (id, callback) =>
  fetch(`https://peace-duck-awareness.herokuapp.com/api/v1/tasks/${id}`)
    .then(res => res.json())
    .then(callback)

const App = () => {
  const [taskIndex, setTaskIndex] = useState(1)
  const [task, setTask] = useState(null)

  useEffect(() => {
    loadTask(taskIndex, setTask)
  }, [taskIndex])

  const onAnswer = answer => () => {
    if (task.next_task_id) {
      setTaskIndex(task.next_task_id)
    }
  }

  if (task === null) {
    return null
  }

  return (
    <div className={css.app}>
      <Content>
        <TaskLayout task={task} onAnswer={onAnswer} />
      </Content>
    </div>
  )
}

const mapStateToProps = state => ({})

export default hot(connect(mapStateToProps)(App))
