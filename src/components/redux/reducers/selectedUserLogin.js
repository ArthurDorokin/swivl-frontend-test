const initialState = {
    selectedUserLogin: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_USERS_REQUEST":
            return {
                ...state
            }
        case "TAKE_USER_SUCCESS":
            return {
                ...state,
                selectedUserLogin: action.payload,
                error: ''
            };
        case "TAKE_USERS_FAILURE":
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
};