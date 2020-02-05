import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

import { Link, Redirect } from 'react-router-dom';

import api from '../../../../services/api';
import config from '../../../../config/config.json';

import './style.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <Header
                    active="/account"
                    motd_active={false}
                />

                <div className="main">
                    <Container>
                        <Row style={{
                            marginTop: "-250px"
                        }}>
                            <Col
                                md="4"
                            >
                                <Card>
                                    <CardBody className="account-buttons">
                                        <ul>
                                            <li>
                                                <i className="fa fa-home"></i>
                                                <Link to="/account">Sua conta</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <Link to="/account/password">Dados da sua conta</Link>
                                            </li>
                                            <li>
                                                <i className="fa fa-sign-out"></i>
                                                <Link to="#">Sair</Link>
                                            </li>
                                        </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col
                                md="8"
                            >

                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
        )
    }
}