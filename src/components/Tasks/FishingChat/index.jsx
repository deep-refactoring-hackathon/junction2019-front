import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { postMessage, addMessage } from "./actions"

import css from "./styles.scss"
import DirectedBy from "../DirectedBy"
import Busted from "../Busted"

const getRowClass = kind => `${css.row} ${kind === "in" ? css.in : css.out}`

const Message = ({ text, kind }) => (
  <div className={getRowClass(kind)}>
    <div className={css.message}>{text}</div>
  </div>
)

const FishingChat = ({
  isWasted,
  isBusted,
  messages,
  postMessage,
  addMessage,
  task,
}) => {
  const [showWasted, setShowWasted] = useState(false)
  const [showBusted, setShowBusted] = useState(false)
  useEffect(() => {
    addMessage({ type: "in", text: task.payload.text })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (isWasted) {
        setShowWasted(true)
      }
    }, 3000)
  }, [isWasted])

  useEffect(() => {
    setTimeout(() => {
      if (isBusted) {
        setShowBusted(true)
      }
    }, 3000)
  }, [isBusted])

  const [inputMessage, setInputMessage] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    if (inputMessage.length === 0) {
      return
    }

    addMessage({ type: "out", text: inputMessage })
    postMessage(inputMessage)
    setInputMessage("")
  }

  return (
    <div className={css.container}>
      {showWasted && <DirectedBy />}
      {showBusted && <Busted />}
      <div className={css.window}>
        <div className={css.topBar}>
          <div className={css.name}>
            <div className={css.from}>{task.payload.from}</div>
            <div className={css.status}>online</div>
          </div>
          <div className={css.avatar}>
            <img src="https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573943639/%D0%BB%D0%B8%D1%86%D0%BE.png" />
          </div>
        </div>
        <div className={css.messages}>
          {messages.map((message, index) => (
            <Message kind={message.type} text={message.text} key={index} />
          ))}
        </div>
        <form onSubmit={onSubmit}>
          <div className={css.input}>
            <input
              type="text"
              value={inputMessage}
              onChange={e => setInputMessage(e.target.value)}
              className={css.field}
            />
            <div className={css.submit} onClick={onSubmit} />
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = ({ messages }) => ({
  messages: messages.messages,
  isWasted: messages.isWasted,
  isBusted: messages.isBusted,
})

const mapDispatchToProps = {
  postMessage,
  addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(FishingChat)
