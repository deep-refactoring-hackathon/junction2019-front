import React, { useState } from "react"
import { connect } from "react-redux"
import { hot } from "react-hot-loader/root"

import Content from "../Content"

import css from "./styles.scss"
import TaskLayout from "../TaskLayout"

const tasks = [
  {
    type: "chat",
    payload: {
      messages: [
        "Hello! Our favorite band do a concert this weekend ❤️. We must do 🙆‍♀️Hello! Our favorite band do a concert this weekend ❤️. We must do 🙆‍♀️Hello! Our favorite band do a concert this weekend ❤️. We must do 🙆‍♀️Hello! Our favorite band do a concert this weekend ❤️. We must do 🙆‍♀️Hello! Our favorite band do a concert this weekend ❤️. We must do 🙆‍♀️",
        "We should buy tickets 🎫💸",
      ],
      from: "Jane",
    },
  },
  {
    type: "choose-text",
    payload: {
      text: "Choose website to buy tickets",
      options: [
        "http://but-ticket.pw",
        "https://tickets.com",
        "http://bam.free-tickets.tk",
        "https://www.ticketmaster.com",
      ],
    },
    answer: 0,
  },
  {
    type: "chat",
    payload: {
      messages: ["Great!", "Damn, it requires registration."],
      from: "Jane",
    },
  },
  {
    type: "choose-text",
    payload: {
      text: "Choose password for the ticket website",
      options: [
        "chemicals-manned-recollect",
        "passw0rd",
        "Ihaveadream",
        "David",
      ],
    },
    answer: 0,
  },
  {
    type: "chat",
    payload: {
      messages: ["YAY! We have tickets!", "Have you posted it in instagram?"],
    },
    from: "Jane",
  },
  {
    type: "choose-picture",
    payload: {
      text: "What picture you want to post in instagram?",
      options: [
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket1.png",
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket2.png",
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket3.png",
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket4.png",
      ],
    },
    answer: [1, 2, 3],
  },
  {
    type: "chat",
    payload: {
      messages: [
        "Hi. I'm in trouble could you sent me $160. I really need it 😭",
        "Please sent to my card 4444 3321 4311 4403",
      ],
    },
    from: "Jane",
  },
  {
    type: "choose-text",
    payload: {
      text: "What are you gonna do?",
      options: [
        "Send money",
        "Call her and ask for details",
        "Ignore",
        "Ask something she only knows",
      ],
    },
    answer: 0,
  },
  {
    type: "chat",
    payload: {
      messages: [
        "Please ignore previous messages.",
        "It wasn't me",
        "Someone hacked my account.",
        "How do they know my password?",
      ],
    },
    from: "Jane",
  },
  {
    type: "chat",
    payload: {
      messages: [
        "New music video released!!! ",
        "OMG!!!",
        "Have you seen it?",
        "http://download-videos.fo/id?jurm=1fasda",
        "It's so awesome!",
      ],
    },
    from: "Jane",
  },
  {
    type: "single-image",
    payload: {
      text: "Will you download video from this website?",
      imageUrl:
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket2.png",
    },
    answer: false,
  },
  {
    type: "chat",
    payload: {
      messages: ["CHARITY PLASEHOLDER"],
    },
    from: "Jane",
  },
  {
    type: "choose-picture",
    payload: {
      text: "CHARITY PLASEHOLDER",
      options: [
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket1.png",
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket2.png",
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket3.png",
        "https://res.cloudinary.com/dzpmqwz0e/image/upload/v1573908665/ticket4.png",
      ],
    },
    answer: [1, 2, 3],
  },
  {
    type: "chat",
    payload: {
      messages: ["END MESSAGE"],
    },
    from: "Jane",
  }
]

const App = () => {
  const [taskIndex, setTaskIndex] = useState(0)

  const task = tasks[taskIndex]

  const onAnswer = answer => () => {
    setTaskIndex(taskIndex + 1)
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
