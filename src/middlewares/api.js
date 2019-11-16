import axios from "axios"

const API_REGEX = /^API_(?:(?!_SUCCESS|_FAILURE|_PENDING).)+$/

const notApiAction = type => !API_REGEX.test(type)

const host = "http://localhost:3000"

const onSuccess = (dispatch, type) => response => {
  dispatch({
    type: `${type}_SUCCESS`,
    payload: response.data,
  })
}

const onError = (dispatch, type) => error => {
  return dispatch({
    type: `${type}_FAILURE`,
    payload: error.response.data,
  })
}

export default ({ dispatch }) => next => action => {
  next(action)

  const { type, payload } = action
  if (notApiAction(type)) {
    return
  }

  const url = `${host}${payload.url}`
  const { method, body } = payload

  axios({
    method: method || "GET",
    url: url,
    data: body && body,
    headers: { Accept: "application/json" },
  })
    .then(onSuccess(dispatch, type))
    .catch(onError(dispatch, type))

  dispatch({ type: `${type}_PENDING` })
}
