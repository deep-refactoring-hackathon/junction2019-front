export const postMessage = message => ({
  type: "API_ADD_MESSAGE",
  payload: {
    method: "POST",
    url: "/api/v1/fishing_chat",
    body: { message },
  },
})

export const addMessage = message => ({
  type: "ADD_MESSAGE",
  payload: message,
})
