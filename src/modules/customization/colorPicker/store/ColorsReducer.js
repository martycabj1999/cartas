const colors = JSON.parse(localStorage.getItem("colors"));

const initialState = {
    colors: colors ? colors : {},
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SET_COLORS':
            return {
                ...state,
                colors: action.payload
            }
        default:
            return state;
    }
}