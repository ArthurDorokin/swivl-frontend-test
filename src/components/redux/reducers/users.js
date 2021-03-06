const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state
            }
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload,
                error: ''
            };
        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
};