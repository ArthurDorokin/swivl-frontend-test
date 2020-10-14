import axios from 'axios';

export const fetchUsersRequest = () => ({
    type: "FETCH_USERS_REQUEST"
})

export const fetchUsersSuccess = users => ({
    type: "FETCH_USERS_SUCCESS",
    payload: users
})

export const fetchUsersFailure = error => ({
    type: "FETCH_USERS_FAILURE",
    payload: error
})

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://api.github.com/users?per_page=100')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}