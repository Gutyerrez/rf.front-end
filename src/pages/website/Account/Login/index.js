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
    Button
} from 'reactstrap';

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';

import render from '../../../../assets/images/render.png';

import api from '../../../../services/api';

import './style.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            password: undefined,
            usernameErrors: 0
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(e) {
        let username = e.target.value;

        this.setState({
            username: username.replace(/[^a-zA-Z0-9-]/g, "")
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <>
                <Header
                    active="/account/login"
                    motd_active={false}
                    motd_title="Acessando sua conta..."
                    motd_message="...Descrição legal que alguém vai fazer..."
                    motd_render={render}
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
                                            <img src={`https://cravatar.eu/helmavatar/${this.state.username === '' ? 'Steve' : this.state.username}/100`} />
                                        </div>
                                        <div className="login-body">
                                            <Form>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-user"></i>
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="username"
                                                        className={`form-control ${this.state.usernameErrors !== 0 ? 'error' : ''}`}
                                                        onChange={e => this.handleUsernameChange(e)}
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label>
                                                        <i className="fa fa-lock"></i>
                                                    </Label>
                                                    <Input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                    />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Button>
                                                        Autenticar
                                                    </Button>
                                                </FormGroup>
                                            </Form>
                                        </div>
                                        <div className="login-fotter"></div>
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