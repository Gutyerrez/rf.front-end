import React, { Component } from 'react';
import {
    Card,
    CardBody
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        sessionStorage.removeItem('user');
    }

    render() {
        return (
            <Card>
                <CardBody className="account-buttons">
                    <ul>
                        <li>
                            <Link to="/account"><i className="fa fa-home"></i> Sua conta</Link>
                        </li>
                        <li>
                            <Link to="/account/password"><i className="fa fa-lock"></i> Dados da sua conta</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={this.logout}><i className="fa fa-sign-out"></i> Sair</Link>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        );
    }
}