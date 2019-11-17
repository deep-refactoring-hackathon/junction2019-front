import React, { useState } from "react"

import css from "./styles.scss"

const getMessageClass = kind =>
  `${css.message} ${kind === "in" ? css.in : css.out}`

const Message = ({ text, kind }) => (
  <div className={css.row}>
    <div className={getMessageClass(kind)}>{text}</div>
  </div>
)

export default ({ task }) => {
  const [messages, setMessages] = useState([
    { type: "in", text: task.payload.text },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const updateMessages = text =>
    setMessages([...messages, { type: "in", text }])
    
  const onSubmit = e => {
    e.preventDefault()
    setMessages([...messages, { type: "out", text: inputMessage }])
    fetch("https://peace-duck-awareness.herokuapp.com/api/v1/fishing_chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputMessage }),
    })
      .then(r => r.json())
      .then(data => updateMessages(data.text))
    setInputMessage("")
  }

  return (
    <div className={css.container}>
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
        <div className={css.input}>
          <form onSubmit={onSubmit}>
            <div className={css.field}>
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
              />
            </div>
            <button className={css.submit} />
          </form>
        </div>
      </div>
    </div>
  )
}
