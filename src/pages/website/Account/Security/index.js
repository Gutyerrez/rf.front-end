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

import api from '../../../../services/api';
import config from '../../../../config/config.json';

import md5 from 'md5';

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
            responseMessage: undefined,
            user: undefined
        };

        this.handleDimiss = this.handleDimiss.bind(this);
        this.handleNewEmailChange = this.handleNewEmailChange.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleDimiss() {
        this.setState({
            responseMessage: undefined
        });
    }

    async handleNewEmailChange(e) {
        const newEmail = e.target.value;

        if (newEmail === '') {
            this.setState({
                newEmail,
                newEmailErrorMessage: undefined
            });
            return;
        }

        const response = await api.get(`/user?email=${newEmail}`);

        const user = response.data;

        const tester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!tester.test(newEmail)) {
            this.setState({
                newEmail: undefined,
                newEmailErrorMessage: 'E-email com formato inválido'
            });
            return;
        }

        if (newEmail.toLowerCase() === this.state.user.email.toLowerCase()) {
            this.setState({
                newEmail,
                newEmailErrorMessage: 'Você já está usando esse e-mail'
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

        if (!Helper.compare(password, this.state.user.password)) {
            this.setState({
                password,
                passwordErrorMessage: 'As senhas não coincidem'
            });
            return;
        }

        this.setState({
            password,
            passwordErrorMessage: undefined
        });
    }

    handleNewPasswordChange(e) {
        const newPassword = e.target.value;

        if (newPassword === '') {
            this.setState({
                newPassword,
                newPasswordErrorMessage: undefined
            });
            return;
        }

        if (newPassword.length < 6) {
            this.setState({
                newPassword: undefined,
                newPasswordErrorMessage: 'Senha fraca, inferior à 6 caracteres'
            })
            return;
        }

        if (Helper.compare(newPassword, this.state.user.password)) {
            this.setState({
                newPassword,
                newPasswordErrorMessage: 'As senha não pode ser similar a anterior'
            });
            return;
        }

        this.setState({
            newPassword,
            newPasswordErrorMessage: undefined
        });
    }

    async handleFormSubmit(e) {
        e.preventDefault();

        const {
            newEmail,
            newPassword
        } = this.state;

        const response = await api.put('/user', {
            id: this.state.user.id,
            password: md5(newPassword),
            email: newEmail
        });

        if (response.status !== 200) {
            this.setState({
                responseMessage: {
                    color: 'danger',
                    message: 'Oops! Parece que algo saiu errado.'
                }
            });
            return;
        }

        this.setState({
            responseMessage: {
                color: 'success',
                message: 'Dados cadastrais atualizados com sucesso!'
            }
        });

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

    inputsWithError() {
        let errors = '';

        if (this.state.newEmailErrorMessage) {
            errors += "E-mail";
        }

        if (this.state.passwordErrorMessage) {
            errors += (errors !== '' ? ', ' : '') + "Senha atual";
        }

        if (this.state.newPasswordErrorMessage) {
            errors += (errors !== '' ? ' e ' : '') + "Nova senha";
        }

        return errors;
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const token = sessionStorage.getItem('user');

        if (!token) return null;

        const payload = jwt.verify(token, config.secret);

        const user = await api.get(`/user?id=${payload.id}`);

        this.setState({
            user: user.data
        });
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
                                md="8"
                            >
                                <Card>
                                    <CardBody className="login-content" style={{
                                        marginTop: '30px'
                                    }}>
                                        <div className="login-header">
                                            <img src={`https://cravatar.eu/helmavatar/${this.state.user ? this.state.user.display_name : undefined}/100`} alt={this.state.user ? this.state.user.display_name : undefined} />
                                            <h4>Alterar dados da sua conta</h4>
                                        </div>
                                        <div className="login-body">
                                            <Form
                                                onSubmit={e => this.handleFormSubmit(e)}
                                            >
                                                {
                                                    this.state.responseMessage ?
                                                        <FormGroup>
                                                            <Alert
                                                                isOpen={true}
                                                                toggle={this.handleDimiss}
                                                                color={this.state.responseMessage.color}
                                                                fade={true}
                                                            >
                                                                {this.state.responseMessage.message}
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
                                                        value={this.state.user ? this.state.user.email : undefined}
                                                        disabled
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-envelope"></i>
                                                    </Label>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Digite um novo email"
                                                        onChange={e => this.handleNewEmailChange(e)}
                                                    />
                                                    {
                                                        this.state.newEmailErrorMessage ?
                                                            <div className="error" style={{
                                                                marginLeft: '95%'
                                                            }}>
                                                                {this.state.newEmailErrorMessage}
                                                            </div>
                                                            :
                                                            undefined
                                                    }
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-lock"></i>
                                                    </Label>
                                                    <Input
                                                        type="password"
                                                        name="current_password"
                                                        placeholder="Insira sua senha atual"
                                                        onChange={e => this.handlePasswordChange(e)}
                                                    />
                                                    {
                                                        this.state.passwordErrorMessage ?
                                                            <div className="error">
                                                                {this.state.passwordErrorMessage}
                                                            </div>
                                                            :
                                                            undefined
                                                    }
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-lock"></i>
                                                    </Label>
                                                    <Input
                                                        type="password"
                                                        name="new_password"
                                                        placeholder="Insira uma nova senha"
                                                        onChange={e => this.handleNewPasswordChange(e)}
                                                    />
                                                    {
                                                        this.state.newPasswordErrorMessage ?
                                                            <div className="error" style={{
                                                                width: '320px'
                                                            }}>
                                                                {this.state.newPasswordErrorMessage}
                                                            </div>
                                                            :
                                                            undefined
                                                    }
                                                </FormGroup>
                                                <FormGroup className="text-center">
                                                    {
                                                        this.state.newEmailErrorMessage || !this.state.password || this.state.passwordErrorMessage || this.state.newPasswordErrorMessage ?
                                                            <Button
                                                                disabled
                                                            >
                                                                {
                                                                    this.state.newEmailErrorMessage || this.state.passwordErrorMessage || this.state.newPasswordErrorMessage ?
                                                                        `Resolva: ${this.inputsWithError()}`
                                                                        :
                                                                        `Preencha os campos à cima`
                                                                }
                                                            </Button>
                                                            :
                                                            <Button>
                                                                Atualizar dados
                                                            </Button>
                                                    }
                                                </FormGroup>
                                            </Form>
                                        </div>
                                        <div className="login-footer"></div>
                                    </CardBody>
                                </Card>
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
        )
    }
}