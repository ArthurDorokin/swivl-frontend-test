import React, {Component} from 'react';
import {connect} from "react-redux";

class Details extends Component {
    render() {
        const {selectedUserId, users} = this.props

        return (
            <div className="details">
                <div className="container">
                    {users.users.filter((item) => item.id === selectedUserId.selectedUserId).map((item) =>
                        <div className="details-item" key={item.id}>
                            <div className="person-details">
                                <div className="img">
                                    <img src={item.avatar_url} alt={item.login}/>
                                </div>
                            </div>
                            <div className="person-details-info">
                                <div className="name"><span>name</span>: <p>-</p></div>
                                <div className="followers"><span>followers</span>: <p>{item.followers_url}</p></div>
                                <div className="following"><span>following</span>: <p>{item.following_url}</p></div>
                                <div className="created_at"><span>created_at</span>: <p>-</p></div>
                                <div className="company"><span>company</span>: <p>-</p></div>
                                <div className="email"><span>email</span>: <p>-</p></div>
                                <div className="location"><span>location</span>: <p>-</p></div>
                                <div className="blog"><span>blog</span>: <p>-</p></div>
                                <div className="bio"><span>bio</span>: <p>-</p></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({selectedUserId, users}) => ({
    selectedUserId: selectedUserId,
    users: users
})

export default connect(mapStateToProps, null)(Details);