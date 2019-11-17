export const postMessage = message => ({
  type: "API_ADD_DUCK_MESSAGE",
  payload: {
    method: "POST",
    url: "/api/v1/ask_duck",
    body: { message },
  },
})

export const addMessage = message => ({
  type: "ADD_DUCK_MESSAGE",
  payload: message,
})
