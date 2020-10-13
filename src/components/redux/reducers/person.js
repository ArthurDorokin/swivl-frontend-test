const initialState = {
    person: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PERSONS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_PERSONS_SUCCESS":
            console.log("FETCH_PERSONS_SUCCESS", action);
            return {
                ...state,
                loading: true,
                person: action.payload,
                error: ''
            };
        case "FETCH_PERSONS_FAILURE":
            return {
                ...state,
                loading: true,
                error: action.payload
            }
        default: return state;
    }
};