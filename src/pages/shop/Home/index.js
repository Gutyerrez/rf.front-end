import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './style.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import render from '../../../assets/images/render.png';

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