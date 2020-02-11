import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './style.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import api from '../../../services/api';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            punishments: []
        }
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const result = await api.get(`/punishment`);

        this.setState({
            punishments: result.data
        });
    }

    render() {
        return (
            <>
                <Header
                    active="/punishments"
                    motd_active={false}
                />

                <div className="main">
                    <Container>
                        <Row>
                            <Col md="8">
                            </Col>
                            <Col md="4">
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}