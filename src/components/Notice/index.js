import React, { Component } from 'react';

import reactHtmlParser from 'react-html-parser';

import moment from 'moment';

import 'moment/locale/pt-br';

import './style.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="notice">
                    <a href={`/notices/${this.props.id}`}>
                        <div className="notice-header" style={{
                            backgroundImage: `url('${this.props.background}')`
                        }}>
                        </div>
                    </a>
                    <div className="notice-author">
                        <img src={`https://cravatar.eu/helmavatar/${this.props.author}/96`} />
                        <span>{this.props.author}</span>
                    </div>
                    <div className="notice-title">
                        <p>{this.props.title}</p>
                        <span>{moment(this.props.date).calendar()}</span>
                    </div>
                    <div className="notice-body">
                        {reactHtmlParser(this.props.content)}
                    </div>
                    <div className="notice-footer">
                        <a href={`/notices/${this.props.id}`}>Continuar lendo...</a>
                    </div>
                </div>
            </>
        );
    }
}