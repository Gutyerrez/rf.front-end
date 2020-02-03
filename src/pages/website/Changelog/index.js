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

import ReactHtmlParser from 'react-html-parser';

import render from '../../../assets/images/render-2.png';

import './style.css';

export default class ChangelogPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            changelogs: [
                {
                    date: 'Hoje',
                    changes: [
                        {
                            title: "Equipe:",
                            messages: [
                                "Gutyerrez fodeu com seu cu",
                                "Sla mano outra mensagem"
                            ]
                        }
                    ]
                },
                {
                    date: '01/02/2020',
                    changes: [
                        {
                            title: "Rankup Over Power:",
                            messages: [
                                "Servidor lançado com sucesso!",
                                "Sla mano outra mensagem"
                            ]
                        }
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <>
                <Header
                    active="/changelog"
                    motd_title="Atualizações"
                    motd_message="Saiba de todas atualizações que são aplicadas dentro da nossa rede, tanto in-game quanto em outras de nossas plataformas. Aqui você poderá se manter atualizado de todas atualizações passdas desde o início até a data de hoje."
                    motd_render={render}
                />

                <div className="main">
                    <Container>
                        <Card className="changelogs">
                            <CardBody>
                                <div className="changelog" style={{ marginTop: '-50px' }}>
                                    {
                                        this.state.changelogs.map(changelog => (
                                            <Row>
                                                <Col
                                                    key={`${changelog.id}`}
                                                    md="2"
                                                    sm="2"
                                                    offset="1"
                                                >
                                                    <h3
                                                        className="changelog-date"
                                                    >
                                                        {changelog.date}
                                                    </h3>
                                                </Col>
                                                <Col
                                                    md="10"
                                                    sm="10"
                                                >
                                                    <div
                                                        className="changelog-group"
                                                    >
                                                        {
                                                            changelog.changes.map(changes => (
                                                                <h4
                                                                    key={`${changes.title}`}
                                                                    className="changelog-category"
                                                                >
                                                                    <b>{changes.title}</b>
                                                                    <ul
                                                                        className="changelog-list"
                                                                    >
                                                                        {changes.messages.map(message => (<li key={`${message}`}>{ReactHtmlParser(message)}</li>))}
                                                                    </ul>
                                                                </h4>
                                                            ))
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}