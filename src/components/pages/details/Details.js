import React, {Component} from 'react';
import {connect} from "react-redux";

class Details extends Component {
    render() {
        const {selectedUserLogin} = this.props

        return (
            <div className="details">
                <div className="container">
                    <div className="details-item">
                        <div className="person-details">
                            <div className="img">
                                <img src={selectedUserLogin.selectedUserLogin.avatar_url}
                                     alt={selectedUserLogin.selectedUserLogin.login}/>
                            </div>
                        </div>
                        <div className="person-details-info">
                            <div className="name"><span>name</span>: <p>{selectedUserLogin.selectedUserLogin.name}</p>
                            </div>
                            <div className="followers">
                                <span>followers</span>: <p>{selectedUserLogin.selectedUserLogin.followers === null ? "-" : selectedUserLogin.selectedUserLogin.followers}</p>
                            </div>
                            <div className="following">
                                <span>following</span>: <p>{selectedUserLogin.selectedUserLogin.following === null ? "-" : selectedUserLogin.selectedUserLogin.following}</p>
                            </div>
                            <div className="created_at">
                                <span>created_at</span>: <p>{selectedUserLogin.selectedUserLogin.created_at === null ? "-" : selectedUserLogin.selectedUserLogin.created_at}</p>
                            </div>
                            <div className="company">
                                <span>company</span>: <p>{selectedUserLogin.selectedUserLogin.company === null ? "-" : selectedUserLogin.selectedUserLogin.company}</p>
                            </div>
                            <div className="email">
                                <span>email</span>: <p>{selectedUserLogin.selectedUserLogin.email === null ? "-" : selectedUserLogin.selectedUserLogin.email}</p>
                            </div>
                            <div className="location">
                                <span>location</span>: <p>{selectedUserLogin.selectedUserLogin.location === null ? "-" : selectedUserLogin.selectedUserLogin.location}</p>
                            </div>
                            <div className="blog">
                                <span>blog</span>: <p>{selectedUserLogin.selectedUserLogin.blog === null ? "-" : selectedUserLogin.selectedUserLogin.blog}</p>
                            </div>
                            <div className="bio">
                                <span>bio</span>: <p>{selectedUserLogin.selectedUserLogin.bio === null ? "-" : selectedUserLogin.selectedUserLogin.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({selectedUserLogin}) => ({
    selectedUserLogin: selectedUserLogin
})

export default connect(mapStateToProps, null)(Details);