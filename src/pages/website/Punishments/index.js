import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Card,
    CardBody
} from 'reactstrap';

import './style.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import Punishment from '../../../components/Punishment';

import api from '../../../services/api';

import './style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            hasMore: true,
            moreButtonText: 'Carregar mais',
            loading: false,
            index: 0,
            username: undefined,
            home: true,
            punishments: []
        };

        setInterval(() => {
            let {
                index,
                loading
            } = this.state;

            if (loading) {
                index++;

                if (index >= 3) index = 0;

                const text = index === 0 ? '.' : index === 1 ? '..' : '...';

                this.setState({
                    moreButtonText: `Carregando${text}`,
                    index
                });
            }
        }, 500);

        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const result = await api.get(`/punishment?page=${this.state.page}`);

        this.setState({
            punishments: result.data
        });
    }

    async handlePageChange() {
        this.setState({
            loading: true
        });

        const {
            page,
            punishments
        } = this.state;

        const next = page + 1;

        const result = await api.get(`/punishment?page=${next}`);

        const punishments1 = result.data;

        if (punishments1.length === 0) {
            this.setState({
                hasMore: false
            });
            return;
        }

        const punishments2 = punishments.concat(punishments1);

        this.setState({
            moreButtonText: 'Carregar mais',
            page: next,
            punishments: punishments2,
            loading: false
        });
    }

    async handleFormSubmit(e) {
        e.preventDefault();

        const response = await api.get(`/user?username=${this.state.username}`);

        const user = response.data;

        if (!user) {
            this.setState({
                punishments: []
            });
        }

        const response1 = await api.get(`/punishment?user_id=${user.id}`);

        this.setState({
            punishments: response1.data,
            hasMore: false,
            home: false
        });
    }

    handleUsernameChange(e) {
        const username = e.target.value;

        this.setState({
            username
        });
    }
    
    toggle() {
        this.setState({
            page: 0,
            home: true,
            hasMore: true
        });

        this._load();
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
                        <Row style={{
                            marginTop: "-250px"
                        }}>
                            <Col
                                md="8"
                                className="punishments"
                            >
                                {
                                    !this.state.home ?
                                        <Button
                                            color="danger"
                                            onClick={this.toggle}
                                            className="back-button"
                                            style={{
                                                position: 'absolute',
                                                marginLeft: '92.6%',
                                                marginTop: '-20px'
                                            }}
                                        >
                                            <i className="fa fa-times"></i>
                                            <span className="button-message">Visualizar todas punições</span>
                                        </Button>
                                        :
                                        undefined
                                }
                                {
                                    this.state.punishments.length <= 0 && !this.state.home ?
                                        <Card>
                                            <CardBody style={{
                                                background: '#FFF',
                                                borderRadius: '8px'
                                            }}>
                                                <div
                                                    className="text-center"
                                                >
                                                    <img src="https://i.imgur.com/A8JVjIl.png" alt="no-punishments" />
                                                    <p
                                                        style={{
                                                            fontSize: '60px',
                                                            fontWeight: 'bold'
                                                        }}
                                                    >
                                                        YEAH!
                                            </p>
                                                    <p
                                                        style={{
                                                            fontSize: '18px'
                                                        }}
                                                    >
                                                        "{this.state.username}" é um jogador exemplar e nunca foi punido!
                                            </p>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        :
                                        this.state.punishments.map(punishment => (
                                            <Punishment
                                                key={punishment.id}
                                                id={punishment.id}
                                                user={punishment.user}
                                                punish_reason={punishment.punish_reason}
                                                status={punishment.status}
                                                proof={punishment.proof}
                                                staffer={punishment.staffer}
                                                time={parseInt(punishment.time)}
                                                start_time={parseInt(punishment.start_time)}
                                                end_time={parseInt(punishment.end_time)}
                                                revoker={punishment.revoker}
                                                revoke_reason={punishment.revoke_reason}
                                                revoke_time={parseInt(punishment.revoke_time)}
                                            />
                                        ))
                                }
                                {
                                    this.state.hasMore ?
                                        <div
                                            className="text-center pt-2"
                                        >
                                            <Button
                                                color="danger"
                                                className="btn-rounded shadow-sm text-white button-more"
                                                onClick={this.handlePageChange}
                                            >
                                                {this.state.moreButtonText}
                                            </Button>
                                        </div>
                                        :
                                        undefined
                                }
                            </Col>
                            <Col
                                className="punishments-sidebar"
                                md="4"
                            >
                                <Form onSubmit={this.handleFormSubmit}>
                                    <FormGroup>
                                        <InputGroup>
                                            <Input
                                                type="text"
                                                placeholder="Buscar usuário..."
                                                id="username"
                                                onChange={e => this.handleUsernameChange(e)}
                                            />
                                            <Button>
                                                <i className="fa fa-search"></i>
                                            </Button>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                                {/* <Card
                                    className="mb-4"
                                >
                                    <div
                                        className="h4 text-center"
                                    >
                                        Estatísticas
                                    </div>
                                    <CardBody
                                        className="p-4 focus-content"
                                    >
                                        <Row style={{
                                            marginTop: '0'
                                        }}>
                                            <Col
                                                md="10"
                                                sm="10"
                                            >
                                                Total
                                            </Col>
                                            <Col
                                                md="2"
                                                sm="2"
                                            >
                                                0
                                            </Col>
                                            <Col
                                                md="10"
                                                sm="10"
                                            >
                                                Ano
                                            </Col>
                                            <Col
                                                md="2"
                                                sm="2"
                                            >
                                                0
                                            </Col>
                                            <Col
                                                md="10"
                                                sm="10"
                                            >
                                                Mês
                                            </Col>
                                            <Col
                                                md="2"
                                                sm="2"
                                            >
                                                0
                                            </Col>
                                            <Col
                                                md="10"
                                                sm="10"
                                            >
                                                Semana
                                            </Col>
                                            <Col
                                                md="2"
                                                sm="2"
                                            >
                                                0
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card> */}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}