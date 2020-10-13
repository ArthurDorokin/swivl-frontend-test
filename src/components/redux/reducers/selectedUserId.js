const initialState = {
    selectedUserId: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_USER":
            return {
                ...state,
                selectedUserId: action.payload
            }
        default:
            return state;
    }
};
