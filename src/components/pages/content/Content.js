import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPersons} from "../../redux/action/person";

class Content extends Component {
    componentDidMount() {
        this.props.fetchPersons()
    }

    render() {
        const {person} = this.props.person
        console.log("person",person);
        return (
            <div className="content">
                <div className="main-person">
                    {person.map((item) =>
                        <div className="person-item" key={item.id}>
                            <div className="login">{item.login}</div>
                            <div className="link-profile">
                                <a href={item.html_url} target="_blank">{item.html_url}</a>
                            </div>
                            <div className="preview">
                                <img src={item.avatar_url} alt={item.login}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({person}) => ({person: person})

export default connect(mapStateToProps, {fetchPersons})(Content);