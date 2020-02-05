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

import sha256 from 'sha256';
import md5 from 'md5';

import jwt from 'jsonwebtoken';

import './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            usernameErrorMessage: undefined,
            password: undefined,
            passwordErrorMessage: undefined,
            redirect: false,
            redirectMessage: undefined
        }

        this.handleDimiss = this.handleDimiss.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
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

        if (!user) {
            this.setState({
                username,
                usernameErrorMessage: 'Este usuário não existe'
            });
            return;
        }

        if (user.id === 1) {
            this.setState({
                username: user.display_name,
                usernameErrorMessage: 'Este usuário não é um jogador'
            });
            return;
        }

        if (!user.password) {
            this.setState({
                username: user.display_name,
                usernameErrorMessage: 'Usuário não cadastrado'
            });
            return;
        }

        this.setState({
            username: user.display_name,
            usernameErrorMessage: undefined
        });
    }

    handlePasswordChange(e) {
        let password = e.target.value;

        if (password.length < 6) {
            this.setState({
                password,
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
            password
        } = this.state;

        const response = await api.get(`/user?username=${username}`);

        const user = response.data;

        if (this.compare(password, user.password)) {
            const token = jwt.sign({
                id: user.id,
                username: user.display_name
            }, config.secret);

            sessionStorage.setItem('user', token);

            this.setState({
                redirectMessage: {
                    color: 'success',
                    message: 'Autenticado, redirecionando...'
                }
            });

            setTimeout(() => {
                this.setState({
                    redirect: true
                });
            }, 3000);
        } else {
            this.setState({
                redirectMessage: {
                    color: 'danger',
                    message: 'A senha inserida está incorreta'
                }
            });
        }
    }

    compare(password, hashedPassword) {
        if (!hashedPassword.includes("$")) return md5(password).toLowerCase() === hashedPassword.toLowerCase();

        const shaInfo = hashedPassword.split('$');

        const salt = shaInfo[2].split("@")[1];
        const hash = shaInfo[2].split("@")[0];

        const password1 = sha256(password) + salt;
        const password2 = sha256(password1);

        return password2 === hash;
    }

    inputsWithError() {
        let errors = '';

        if (this.state.usernameErrorMessage) {
            errors += "Nome de usuário";
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
                                            <h4>Entrando como {!this.state.username ? 'Ninguém' : this.state.username}...</h4>
                                        </div>
                                        <div className="login-body">
                                            <Form
                                                onSubmit={e => this.handleFormSubmit(e)}
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
                                                        maxLength={16}
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
                                                        !this.state.username || !this.state.password || this.state.usernameErrorMessage || this.state.passwordErrorMessage ?
                                                            <Button
                                                                disabled
                                                            >
                                                                {
                                                                    this.state.usernameErrorMessage || this.state.passwordErrorMessage ?
                                                                        `Resolva: ${this.inputsWithError()}`
                                                                        :
                                                                        `Preencha os campos à cima`
                                                                }
                                                            </Button>
                                                            :
                                                            <Button>
                                                                {`Entrar como ${this.state.username}`}
                                                            </Button>
                                                    }
                                                </FormGroup>
                                            </Form>
                                        </div>
                                        <div className="login-footer">
                                            <p>
                                                Não possui uma conta? Clique <Link to="/account/register">aqui</Link> para criar uma agora.
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