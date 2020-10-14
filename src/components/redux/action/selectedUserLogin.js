import axios from "axios";

export const fetchUsersRequest = () => ({
    type: "TAKE_USERS_REQUEST"
})

export const fetchUserLogin = login => ({
    type: 'TAKE_USER_SUCCESS',
    payload: login
});

export const fetchUsersFailure = error => ({
    type: "TAKE_USERS_FAILURE",
    payload: error
})

export function fetchLogin(login) {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get(`https://api.github.com/users/${login}`)
            .then(response => {
                const login = response.data
                dispatch(fetchUserLogin(login))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}