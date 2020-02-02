import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import Staff from '../../../components/Staff';

import render from '../../../assets/images/render-2.png';

import './style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            groups: [
                {
                    name: "Focus",
                    color: "darkorange",
                    members: [
                        "oSrHyper_TM"
                    ]
                },
                {
                    name: "Diretor",
                    color: "darkaqua",
                    members: [
                        "Gutyerrez",
                        "oSrGabriel_TM",
                        "iResett"
                    ]
                },
                {
                    name: "Gerente",
                    color: "darkred",
                    members: [
                        "AlfaSoldiier",
                        "Hunterzz"
                    ]
                },
                {
                    name: "Admin",
                    color: "red",
                    members: [
                        "Poort",
                        "TurfIsBack",
                        "FuscaoAzul"
                    ]
                },
                {
                    name: "Mod",
                    color: "darkgreen",
                    members: []
                },
                {
                    name: "Ajudante",
                    color: "yellow",
                    members: []
                }
            ],
            showStaffList: false,
            currentStaffGroup: null
        }

        this.toggleStaffList = this.toggleStaffList.bind(this);
    }

    toggleStaffList(group) {
        this.setState({
            showStaffList: true,
            currentStaffGroup: group
        });
    }

    render() {
        return (
            <>
                <Header
                    active="/staff"
                    motd_title="Equipe"
                    motd_message="Conheça os membros da equipe por trás da Rede Focus e saibam que são eles que fazem com que as engrenagens girarem de forma correta e deixam o servidor perfeitinho para você disfrutar das funcionalidades que nele há e jogar tranquilamente."
                    motd_render={render}
                />

                <div className="main">
                    <Container>
                        <Row>
                            <Col md="8">
                                <ul>
                                    {
                                        this.state.groups.map(group =>
                                            <li>
                                                <Button
                                                    key={group.name}
                                                    aria-labelledby={group.color}
                                                    onClick={e => this.toggleStaffList(group)}
                                                >
                                                    {group.name}
                                                </Button>
                                            </li>
                                        )
                                    }
                                </ul>
                                {
                                    this.state.showStaffList ?
                                        (
                                            <>
                                                <div className="staff-header" aria-labelledby={this.state.currentStaffGroup.color}>{this.state.currentStaffGroup.name} ({this.state.currentStaffGroup.members.length})</div>
                                                <div className="staff-list shadow-sm">
                                                    <Row>
                                                        {
                                                            this.state.currentStaffGroup.members.length !== 0 ?
                                                                this.state.currentStaffGroup.members.map(member =>
                                                                    <Col
                                                                        md="3"
                                                                    >
                                                                        <Staff
                                                                            username={member}
                                                                            twitter={member}
                                                                            color={this.state.currentStaffGroup.color}
                                                                            group={this.state.currentStaffGroup.name}
                                                                        />
                                                                    </Col>
                                                                )
                                                                :
                                                                (
                                                                    <>
                                                                        <h3>Não há ninguém nesse grupo.</h3>
                                                                    </>
                                                                )
                                                        }
                                                    </Row>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                            null
                                        )
                                }
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