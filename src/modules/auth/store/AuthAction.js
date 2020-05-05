export function setAuthAction(user){
    return (dispatch) => {
        dispatch({
            type: 'SET_AUTH',
            payload: user
        })
    }
}
