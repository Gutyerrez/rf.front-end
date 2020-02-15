import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import render from '../../../assets/images/render.png';

import Sidebar from '../Sidebar';

import './style.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <Header
                    active="/shop"
                    motd_title="Bem-vindo a loja do <b>Focus</b>!"
                    motd_message="Manter um servidor de qualidade não é barato, muito menos uma equipe capacitada e empenhada. Adquirindo <b>VIPs</b> e <b>Cash</b> em nossa loja, você contribui para a evolução da nossa rede e nos ajuda a trazer uma experiência de jogo cada vez melhor."
                    motd_render={render}
                />

                <div className="main">
                    <Container>
                        <Row>
                            <Col
                                className="benefits"
                                md="8"
                            >
                                <Card>
                                    <div className="card-icon">
                                        <i className="fa fa-info"></i>
                                    </div>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor blandit est, sed tincidunt sem ultricies eget. Fusce faucibus porta semper. Donec pellentesque, sem quis congue dictum, libero ante hendrerit lectus.
                                    </CardBody>
                                </Card>
                                <Card>
                                    <div className="card-icon">
                                        <i className="fa fa-shield"></i>
                                    </div>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor blandit est, sed tincidunt sem ultricies eget. Fusce faucibus porta semper. Donec pellentesque, sem quis congue dictum, libero ante hendrerit lectus.
                                    </CardBody>
                                </Card>
                                <Card>
                                    <div className="card-icon">
                                        <i className="fa fa-users"></i>
                                    </div>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor blandit est, sed tincidunt sem ultricies eget. Fusce faucibus porta semper. Donec pellentesque, sem quis congue dictum, libero ante hendrerit lectus.
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Sidebar />
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}