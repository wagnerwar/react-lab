import { TOKEN_VALIDATED, USER_FETCHED } from "../actions/actionTypes"
const userKey = 'usuario'
const INITIAL_STATE = {
    user: "",
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOKEN_VALIDATED:
            if (action.payload) {
                return { ...state, validToken: true }
            } else {
                localStorage.removeItem(userKey)
                return { ...state, validToken: false, user: null }
            }
        case USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return { ...state, user: action.payload, validToken: true }                
        default:
            return state
    }
}