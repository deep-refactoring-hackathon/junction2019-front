export const increment = () => ({
  type: "INCREMENT",
})

export const decrement = () => ({
  type: "DECREMENT",
})

export const fetchFilm = id => ({
  type: "API_FILM",
  payload: {
    url: `/films/${id}`,
  },
})
