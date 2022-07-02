import { ISADMIN } from "../actionTypes"
import { store } from "../store"

const { dispatch } = store

export const isadmin = (data) => {
    dispatch({ type: ISADMIN, payload: data })
}