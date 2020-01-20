const globalState = {
    login: false
}

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'ADD_SESSION':
            return {
                ...state,
                login: true
            }
            default:
                return state
    }
}

export default rootReducer