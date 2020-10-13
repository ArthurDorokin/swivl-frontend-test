import {combineReducers} from 'redux'
import users from "./users";
import selectedUserId from "./selectedUserId";

export default combineReducers({
    users,
    selectedUserId
})