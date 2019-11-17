import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { postMessage, addMessage } from "./actions"

import css from "./styles.scss"

const getRowClass = kind => `${css.row} ${kind === "in" ? css.in : css.out}`

const Message = ({ text, kind }) => (
  <div className={getRowClass(kind)}>
    <div className={css.message}>{text}</div>
  </div>
)

const DuckChat = ({ messages, postMessage, addMessage, onBack }) => {
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
    <div className={css.backdrop}>
      <div className={css.container}>
        <div className={css.window}>
          <div className={css.topBar}>
            <div className={css.name}>
              <div className={css.from}>Mr. Duck</div>
              <div className={css.status}>online</div>
            </div>
            <div className={css.avatar}>
              <img src="https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573951018/11a2d1874f8861f27b7cb8d61f360ddf.png" />
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
      <div className={css.controls}>
        <img
          className={css.back}
          src="https://res.cloudinary.com/dzpmqwz0e/image/upload/c_scale,w_81/v1573957931/3bbb6bf175932d5e78df7f65b35908fd.png"
          onClick={onBack}
        />
      </div>
    </div>
  )
}

const mapStateToProps = ({ duckChat }) => ({
  messages: duckChat.messages,
})

const mapDispatchToProps = {
  postMessage,
  addMessage,
}

export default connect(mapStateToProps, mapDispatchToProps)(DuckChat)
