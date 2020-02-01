import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';

import './style.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <div className="notice shadow-sm">
                    <div className="notice-author">
                        <img src="http://cravatar.eu/helmavatar/Gutyerrez/98.png" />
                        <span className="username">{this.props.author}</span>
                        <br/><br/>
                        <span className="date"><i className="fa fa-calendar"></i> {this.props.date}</span>
                    </div>
                    <div className="notice-header" style={{
                        backgroundImage: this.props.background
                    }}>
                        <div className="notice-header-corner"></div>
                        <div className="notice-header-title">{this.props.title}</div>
                    </div>
                </div>
            </>
        );
    }
}