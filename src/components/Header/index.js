import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

import logo from '../../assets/images/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header>
                    <Container>
                        <div className="logo">
                            <img src={logo} />
                        </div>
                        <nav class="nav navbar-default">
                            <div className="corner-left"></div>
                            <ul className="nav">
                                <li>
                                    <a href="/">Início</a>
                                </li>
                                <li>
                                    <a href="/loja">Loja</a>
                                </li>
                                <li>
                                    <a href="/equipe">Equipe</a>
                                </li>
                                <li>
                                    <a href="/atualizacoes">Atualizações</a>
                                </li>
                                <li>
                                    <a href="/punicoes">Punições</a>
                                </li>
                                <li>
                                    <a href="/discord">Discord</a>
                                </li>
                                <li>
                                    <a href="/minha-conta">Minha conta</a>
                                </li>
                            </ul>
                            <div className="corner-right"></div>
                        </nav>
                        <div className="main">
                            {this.props.content}
                        </div>
                    </Container>
                </header>
            </>
        );
    }
}