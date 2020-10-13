import React, {Component} from 'react';
import {connect} from "react-redux";

class Details extends Component {

    render() {
        return (
            <div>
                Details
            </div>
        );
    }
}


const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Details);