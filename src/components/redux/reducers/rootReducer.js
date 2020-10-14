import {combineReducers} from 'redux'
import users from "./users";
import selectedUserLogin from "./selectedUserLogin";

export default combineReducers({
    users,
    selectedUserLogin
})