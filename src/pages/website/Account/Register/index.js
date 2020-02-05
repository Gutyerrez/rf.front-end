import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

import { Link, Redirect } from 'react-router-dom';

import api from '../../../../services/api';
import config from '../../../../config/config.json';

import md5 from 'md5';

import jwt from 'jsonwebtoken';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            usernameErrorMessage: undefined,
            email: undefined,
            emailErrorMessage: undefined,
            password: undefined,
            passwordErrorMessage: undefined,
            redirect: false,
            redirectMessage: undefined
        }

        this.handleDimiss = this.handleDimiss.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleDimiss() {
        this.setState({
            redirectMessage: undefined
        });
    }

    async handleUsernameChange(e) {
        let username = e.target.value;

        const tester = /[^a-zA-Z0-9_]/;

        if (tester.test(username)) {
            this.setState({
                username: undefined,
                usernameErrorMessage: 'Nome de usuário inválido'
            });
            return;
        }

        const response = await api.get(`/user?username=${username}`);

        const user = response.data;

        if (user) {
            this.setState({
                usernameErrorMessage: 'Usuário já cadastrado'
            });
            return;
        }

        this.setState({
            username,
            usernameErrorMessage: undefined
        });
    }

    async handleEmailChange(e) {
        let email = e.target.value;

        const tester = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if (!tester.test(email)) {
            this.setState({
                email: undefined,
                emailErrorMessage: 'E-email com formato inválido'
            })
            return;
        }

        const response = await api.get(`/user?email=${email}`);

        const user = response.data;

        if (user) {
            this.setState({
                email: undefined,
                emailErrorMessage: 'E-mail já está em uso'
            });
            return;
        }

        this.setState({
            email,
            emailErrorMessage: undefined
        });
    }

    handlePasswordChange(e) {
        let password = e.target.value;

        if (password.length < 6) {
            this.setState({
                password: undefined,
                passwordErrorMessage: 'Senha fraca, inferior à 6 caracteres'
            })
            return;
        }

        this.setState({
            password,
            passwordErrorMessage: undefined
        });
    }

    async handleFormSubmit(e) {
        e.preventDefault();

        const {
            username,
            password,
            email
        } = this.state;

        const response = await api.post('/user', {
            username,
            password: md5(password),
            email
        });

        if (response.status !== 200) {
            this.setState({
                redirectMessage: {
                    color: 'danger',
                    message: 'Oops! Parece que algo saiu errado.'
                }
            });
            return;
        }

        const user = response.data;

        const token = jwt.sign({
            id: user.id,
            username: user.display_name,

        }, config.secret);

        sessionStorage.setItem('user', token);

        this.setState({
            redirectMessage: {
                color: 'success',
                message: 'Registrado com sucesso, redirecionando...'
            }
        });

        setTimeout(() => {
            this.setState({
                redirect: true
            });
        }, 3000);
    }

    inputsWithError() {
        let errors = '';

        if (this.state.usernameErrorMessage) {
            errors += "Nome de usuário";
        }

        if (this.state.emailErrorMessage) {
            errors += (errors !== '' ? ', ' : '') + "E-mail de recuperação";
        }

        if (this.state.passwordErrorMessage) {
            errors += (errors !== '' ? ' e ' : '') + "Senha";
        }

        return errors;
    }

    render() {
        return (
            <>
                {
                    this.state.redirect ?
                        <Redirect to="/" />
                        :
                        null
                }

                <Header
                    active="/account/login"
                    motd_active={false}
                />

                <div className="main">
                    <Container>
                        <Row className="justify-content-center">
                            <Col
                                md="6"
                            >
                                <Card>
                                    <CardBody className="login-content">
                                        <div className="login-header">
                                            <img src={`https://cravatar.eu/helmavatar/${this.state.username === '' ? 'Steve' : this.state.username}/100`} alt={this.state.username}/>
                                            <h4>Cadastrando um novo usuário</h4>
                                        </div>
                                        <div className="login-body">
                                            <Form
                                                onSubmit={this.handleFormSubmit}
                                            >
                                                {
                                                    this.state.redirectMessage ?
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
                                                        <i className="fa fa-user"></i>
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="username"
                                                        className="form-control"
                                                        placeholder="Nome de usuário..."
                                                        onChange={e => this.handleUsernameChange(e)}
                                                    />
                                                    {
                                                        this.state.usernameErrorMessage ?
                                                            <div className="error">
                                                                {this.state.usernameErrorMessage}
                                                            </div>
                                                            :
                                                            undefined
                                                    }
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-envelope"></i>
                                                    </Label>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="E-email de recuperação"
                                                        onChange={e => this.handleEmailChange(e)}
                                                    />
                                                    {
                                                        this.state.emailErrorMessage ?
                                                            <div className="error">
                                                                {this.state.emailErrorMessage}
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
                                                        name="password"
                                                        className="form-control"
                                                        placeholder="••••••••"
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
                                                <FormGroup className="text-center">
                                                    {
                                                        !this.state.username || !this.state.email || !this.state.password || this.state.password.length < 6 ?
                                                            <Button
                                                                disabled
                                                            >
                                                                {
                                                                    this.state.emailErrorMessage || this.state.usernameErrorMessage || this.state.passwordErrorMessage ?
                                                                        `Resolva: ${this.inputsWithError()}`
                                                                        :
                                                                        `Preencha os campos à cima`
                                                                }
                                                            </Button>
                                                            :
                                                            <Button>
                                                                {`Registrar-se como ${this.state.username}`}
                                                            </Button>
                                                    }
                                                </FormGroup>
                                            </Form>
                                        </div>
                                        <div className="login-footer">
                                            <p>
                                                Já possui uma conta? Clique <Link to="/account/login">aqui</Link> para entrar agora.
                                            </p>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}