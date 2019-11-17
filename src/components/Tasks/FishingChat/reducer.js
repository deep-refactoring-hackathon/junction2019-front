const defaultState = []

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_MESSAGE":
      return [...state, payload]
    case "API_ADD_MESSAGE_SUCCESS":
      return [...state, { type: "in", text: payload.text }]
    default:
      return state
  }
}
