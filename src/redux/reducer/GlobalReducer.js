const globalState = {
    login: false,
    data: []
}

const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'ADD_SESSION':
            return {
                ...state,
                login: true
            }
            case 'GET DATA':
                return {
                    ...state,
                }
                default:
                    return state
    }
}

export default rootReducer