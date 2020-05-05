
//cada reducer tiene su propio state
const initialState = {
    user: {},
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case 'SET_AUTH':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}
