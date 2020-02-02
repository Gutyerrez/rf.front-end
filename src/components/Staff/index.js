import React, { Component } from 'react';

import './style.css';

export default class Staff extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="staff" aria-labelledby={this.props.group}>
                    <div className="avatar-frame"></div>
                    <img src={`https://cravatar.eu/helmavatar/${this.props.username}/100`} className="staff-helm"/>
                    <span className="staff-nick">{this.props.username}</span>
                    {
                        this.props.twitter ?
                            (
                                <div className="staff-hover" aria-labelledby={this.props.color}>
                                    <a href={`https://twitter.com/itent/user?user_id=2865434747`} target="_blank">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div>
                            )
                            :
                            (
                                null
                            )
                    }
                </div>
            </>
        );
    }
}