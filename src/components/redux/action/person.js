import axios from 'axios';

export const fetchPersonsRequest = () => {
    return {
        type: "FETCH_PERSONS_REQUEST"
    }
}

export const fetchPersonsSuccess = person => {
    return {
        type: "FETCH_PERSONS_SUCCESS",
        payload: person
    }
}

export const fetchPersonsFailure = error => {
    return {
        type: "FETCH_PERSONS_FAILURE",
        payload: error
    }
}

export const fetchPersons = () => {
    return (dispatch) => {
        dispatch(fetchPersonsRequest)
        axios.get('https://api.github.com/users')
            .then(response => {
                const person = response.data
                dispatch(fetchPersonsSuccess(person))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPersonsFailure(errorMsg))
            })
    }
}