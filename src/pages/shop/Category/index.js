import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import Sidebar from '../Sidebar';

import './style.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <Header
                    active="/shop"
                    motd_active={false}
                />

                <div className="main">
                    <Container>
                        <Row style={{
                            marginTop: "-250px"
                        }}>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}