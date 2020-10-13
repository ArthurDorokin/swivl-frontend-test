const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                loading: true,
                users: action.payload,
                error: ''
            };
        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default: return state;
    }
};