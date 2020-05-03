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
                                        Aqui você tem total liberdade para pagar como quiser e tem todo suporte necessário para efetuar seus pagamentos e caso tenha algum problema, você pode entrar em contato com nosos suporte através do e-mail <a href="mailto:ajuda@redefocus.com">ajuda@redefocus.com</a>.
                                    </CardBody>
                                </Card>
                                <Card>
                                    <div className="card-icon">
                                        <i className="fa fa-shield"></i>
                                    </div>
                                    <CardBody>
                                        Sinta-se seguro para pagar como quiser, aceitamos os meios de pagamento mais populares do mercado, são eles <b>Mercado Pago</b> e <b>PayPal</b>, assim proporcionando a você total segurança em suas compras dentro de nosso servidor.
                                    </CardBody>
                                </Card>
                                <Card>
                                    <div className="card-icon">
                                        <i className="fa fa-users"></i>
                                    </div>
                                    <CardBody>
                                        Caso você tenha alguma dúvida, problema e afins ao efetuar sua compra, você pode entrar em contato conosco através do nosso e-mail de ajuda e estaremos sempre disponíveis para ajudá-lo em quaisquer tipos de problemas relacionados a compras.
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