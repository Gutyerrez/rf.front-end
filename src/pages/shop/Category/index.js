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

import Package from '../../../components/Package';

import FARMER from '../../../assets/images/FARMER.png';
import KNIGHT from '../../../assets/images/KNIGHT.png';
import NOBLE from '../../../assets/images/NOBLE.png';

import Sidebar from '../Sidebar';

import './style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: undefined,
            categories: [
                {
                    id: 1,
                    name: "CASH",
                    displayName: "Comprar CASH",
                    packages: [
                        {
                            id: 1,
                            bonus: 0,
                            amount: 500,
                            name: "500 CASH",
                            price: 9.00,
                            size: 4
                        },
                        {
                            id: 2,
                            bonus: 500,
                            amount: 2000,
                            name: "2.500 CASH",
                            price: 18.00,
                            size: 4
                        },
                        {
                            id: 3,
                            bonus: 1000,
                            amount: 4000,
                            name: "5.000 CASH",
                            price: 36.00,
                            size: 4
                        },
                        {
                            id: 4,
                            bonus: 3000,
                            amount: 7000,
                            name: "10.000 CASH",
                            price: 72.00,
                            size: 6
                        },
                        {
                            id: 5,
                            bonus: 5000,
                            amount: 10000,
                            name: "15.000 CASH",
                            price: 144.00,
                            size: 6
                        }
                    ]
                },
                {
                    id: 2,
                    name: "VIP",
                    displayName: "Comprar VIP",
                    packages: [
                        {
                            id: 10,
                            name: "Camponês",
                            img: FARMER,
                            price: 15.00
                        },
                        {
                            id: 11,
                            name: "Cavaleiro",
                            img: KNIGHT,
                            price: 30.00
                        },
                        {
                            id: 12,
                            name: "Nobre",
                            img: NOBLE,
                            price: 45.00
                        }
                    ]
                }
            ],
        };

        this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory(category) {
        this.setState({
            category
        });
    }

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
                            <Col
                                md="8"
                            >
                                <section className="package-category">
                                    <ul>
                                        {this.state.categories.map(category => (
                                            <li
                                                key={category.name}
                                            >
                                                <button onClick={e => this.changeCategory(category)}>
                                                    {category.displayName}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                                {
                                    this.state.category ?
                                        <section className="package-items">
                                            {
                                                <Package
                                                    categoryType={this.state.category.name}
                                                    items={this.state.category.packages}
                                                />
                                            }
                                        </section>
                                        :
                                        <Card>
                                            <CardBody className="non-category-selected">
                                                Selecione uma categoria para listar os pacotes disponíveis para compra.
                                            </CardBody>
                                        </Card>
                                }
                            </Col>
                            <Col
                                md="4"
                            >
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