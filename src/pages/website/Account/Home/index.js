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

import Sidebar from '../Sidebar';

import './style.css';

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
            <>
                <Header
                    active='/account'
                    motd_active={false}
                    onlyLoggedIn={true}
                    redirectURI='/'
                />

                <div className="main">
                    <Container>
                        <Row style={{
                            marginTop: "-250px"
                        }}>
                            <Col
                                md="4"
                            >
                                <Sidebar />
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