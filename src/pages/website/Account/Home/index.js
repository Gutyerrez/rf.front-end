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
                        <Row>
                            <Col
                                md="4"
                            >

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