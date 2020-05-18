import { INCREMENT, DECREMNT } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMNT:
            return { value: state.value - 1 }
        default:
            return state
    }
}