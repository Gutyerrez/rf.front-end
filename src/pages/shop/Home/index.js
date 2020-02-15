import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import { Link } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import render from '../../../assets/images/render.png';

import './style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [
                {
                    id: 1,
                    name: 'Factions Wizard',
                    icon: 'shopping-cart',
                    products: [

                    ]
                },
                {
                    id: 2,
                    name: 'Factions Radioativo',
                    icon: 'shopping-cart',
                    products: [

                    ]
                }
            ],
            donators: [
                {
                    id: 1,
                    display_name: 'Gutyerrez'
                },
                {
                    id: 1,
                    display_name: 'AlfaSoldiier'
                },
                {
                    id: 1,
                    display_name: 'oSrHyper_TM'
                },
                {
                    id: 1,
                    display_name: 'oSrGabriel_TM'
                },
                {
                    id: 1,
                    display_name: 'hunterz'
                },
                {
                    id: 1,
                    display_name: 'laghnet'
                },
                {
                    id: 1,
                    display_name: 'italu'
                }
            ]
        }
    }

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
                                <Card>
                                    <CardBody className="sidebar-buttons">
                                        <ul>
                                            {
                                                this.state.categories.map(category => (
                                                    <li
                                                        key={category.id}
                                                    >
                                                        <Link to={`/shop/${category.id}`}><i className={`fa fa-${category.icon}`}></i> {category.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </CardBody>
                                </Card>
                                <div className="last-purchases">
                                    <h3>Últimos compradores</h3>
                                    <ul>
                                        {
                                            this.state.donators.slice(0, 7).map(donator => (
                                                <li
                                                    key={donator.id}
                                                >
                                                    <img src={`https://cravatar.eu/helmhead/${donator.display_name}/40`} alt={donator.display_name} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}