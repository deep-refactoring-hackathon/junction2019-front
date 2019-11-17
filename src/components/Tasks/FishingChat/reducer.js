const defaultState = {
  isWasted: false,
  isBusted: false,
  messages: [],
}

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, payload] }
    case "API_ADD_MESSAGE_SUCCESS":
      if (payload.wasted === true) {
        return {
          ...state,
          isWasted: true,
          messages: [...state.messages, { type: "in", text: payload.text }],
        }
      }

      if (payload.wasted === false) {
        return {
          ...state,
          isBusted: true,
          messages: [...state.messages, { type: "in", text: payload.text }],
        }
      }
      return {
        ...state,
        messages: [...state.messages, { type: "in", text: payload.text }],
      }
    default:
      return state
  }
}
