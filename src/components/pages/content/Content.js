import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {fetchUsers} from "../../redux/action/users";
import {selectedUserId} from "../../redux/action/selectedUserId";

class Content extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const {users} = this.props
        return (
            <div className="content">
                <div className="main-person">
                    {users.users.length && users.users.map((item) =>
                        <div className="person-item" key={item.id}>
                            <NavLink to={`/users/:${item.login}`} onClick={() => this.props.selectedUserId(item.id)}>
                                <div className="preview">
                                    <img src={item.avatar_url} alt={item.login}/>
                                </div>
                                <div className="login">{item.login}</div>
                                <div className="link-profile">
                                    {item.html_url}
                                </div>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => ({users: users})

const mapDispatchToProps = dispatch => ({
    selectedUserId: (id) => dispatch(selectedUserId(id))
})

export default connect(mapStateToProps, {selectedUserId, fetchUsers})(Content);