const defaultState = {
  messages: [],
}

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_DUCK_MESSAGE":
      return { ...state, messages: [...state.messages, payload] }
    case "API_ADD_DUCK_MESSAGE_SUCCESS":
      return {
        ...state,
        messages: [...state.messages, { type: "in", text: payload.text }],
      }
    default:
      return state
  }
}
