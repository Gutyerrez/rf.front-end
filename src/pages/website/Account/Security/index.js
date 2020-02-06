import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Alert
} from 'reactstrap';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

import { Link, Redirect } from 'react-router-dom';

import api from '../../../../services/api';
import config from '../../../../config/config.json';

import jwt from 'jsonwebtoken';

import Helper from '../../../../util/Helper';

import Sidebar from '../Sidebar';

import './style.css';

export default class Security extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: undefined,
            emailErrorMessage: undefined,
            newEmail: undefined,
            newEmailErrorMessage: undefined,
            password: undefined,
            passwordErrorMessage: undefined,
            newPassword: undefined,
            newPasswordErrorMessage: undefined,
            redirect: false,
            redirectMesssage: undefined
        };

        this.handleDimiss = this.handleDimiss.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleDimiss() {
        this.setState({
            redirectMessage: undefined
        });
    }

    async handleNewEmailChange(e) {
        const newEmail = e.target.value;

        const response = await api.get(`/user?email=${newEmail}`);
        
        const user = response.data;

        if (newEmail.toLowerCase() === this.email().toLowerCase()) {
            this.setState({
                newEmail,
                newEmailErrorMessage: 'Você já está usando esse email'
            });
            return;
        }

        if (user) {
            this.setState({
                newEmail,
                newEmailErrorMessage: 'Este email já está em uso'
            });
            return;
        }

        this.setState({
            newEmail,
            newEmailErrorMessage: undefined
        });
    }

    handlePasswordChange(e) {
        const password = e.target.value;

        if (Helper.compare(this.user().password, password)) {

            return;
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();

        
    }

    username() {
        return this.user().username;
    }

    email() {
        return this.user().email;
    }

    user() {
        const token = sessionStorage.getItem('user');

        if (!token) return null;

        const user = jwt.verify(token, config.secret);

        return user;
    }

    render() {
        return (
            <>
                <Header
                    active='/account/security'
                    motd_active={false}
                    onlyLoggedIn={true}
                    redirectURI='/'
                />

                <div className="main">
                    <Container>
                        <Row style={{
                            marginTop: "-250px"
                        }}>
                            <Col
                                md="4"
                            >
                                <Sidebar />
                            </Col>
                            <Col
                                md="8"
                            >
                                <Card>
                                    <CardBody className="login-content" style={{
                                        marginTop: '0'
                                    }}>
                                        <div className="login-header">
                                            <img src={`https://cravatar.eu/helmavatar/${this.username()}/100`} alt={this.state.username} />
                                            <h4>Alterar dados da sua conta</h4>
                                        </div>
                                        <div className="login-body">
                                            <Form
                                                onSubmit={this.handleFormSubmit}
                                            >
                                                {
                                                    this.state.redirectMesssage ?
                                                        <FormGroup>
                                                            <Alert
                                                                isOpen={true}
                                                                toggle={this.handleDimiss}
                                                                color={this.state.redirectMessage.color}
                                                                fade={true}
                                                            >
                                                                {this.state.redirectMessage.message}
                                                            </Alert>
                                                        </FormGroup>
                                                        :
                                                        null
                                                }
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-envelope"></i>
                                                    </Label>
                                                    <Input
                                                        type="email"
                                                        value={this.email()}
                                                        disabled
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-envelope"></i>
                                                    </Label>
                                                    <Input
                                                        type="email"
                                                        placeholder="Digite um novo email"
                                                        name="email"
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-lock"></i>
                                                    </Label>
                                                    <Input
                                                        type="password"
                                                        placeholder="Insira sua senha atual"
                                                        name="current_password"
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-lock"></i>
                                                    </Label>
                                                    <Input
                                                        type="password"
                                                        name="new_password"
                                                        placeholder="Insira uma nova senha"
                                                    />
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    <Button
                                                        color="danger"
                                                    >
                                                        Atualizar dados
                                                    </Button>
                                                </FormGroup>
                                            </Form>
                                        </div>
                                        <div className="login-footer"></div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </>
        )
    }
}