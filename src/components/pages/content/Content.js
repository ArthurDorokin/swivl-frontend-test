import React, {Component} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {fetchUsers} from "../../redux/action/users";
import {fetchLogin} from "../../redux/action/selectedUserLogin";

class Content extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const {users} = this.props

        return (
            <div className="content">
                <div className="main-person">
                    {users.users.map((item) =>
                        <div className="person-item" key={item.id}>
                            <NavLink to={`/users/:${item.login}`} onClick={() => this.props.fetchLogin(item.login)}>
                                <div className="preview">
                                    <img src={item.avatar_url} alt={item.login}/>
                                </div>
                                <div className="login">{item.login}</div>
                            </NavLink>
                            <div className="link-profile">
                                {item.html_url}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({users}) => ({users: users})

const mapDispatchToProps = dispatch => ({
    fetchLogin: login => dispatch(fetchLogin(login)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Content);