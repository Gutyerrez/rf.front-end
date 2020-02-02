import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

import { Link } from 'react-router-dom';

import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="logo">
                        <Container>
                            <a href="http://redefocus.com/" className="logo-link">
                                <img src="/favicon.ico" className="img-fluid mb-3" alt="..." style={{ width: '50px' }} />
                            </a>
                            <div className="footer-social">
                                <a href="http://www.twitter.com/RedeFocusMC"><i className="fa fa-twitter"></i></a>
                            </div>
                            <ul>
                                <li>
                                    <Link to="/shop">Loja</Link>
                                </li>
                                <li>
                                    <Link to="/changelog">Atualizações</Link>
                                </li>
                                <li>
                                    <Link to="/staff">Equipe</Link>
                                </li>
                                <li>
                                    <Link to="/rules">Regras</Link>
                                </li>
                            </ul>
                        </Container>
                    </div>
                    <div className="overlay">
                        <Container>
                            <div className="row">
                                <div className="col-md-8">
                                    &copy; <a href="http://redefocus.com/">Rede Focus</a>. Todos direitos reservados.
                        <br />
                                    <p className="text-muted">Este site não é de propriedade ou operado pela Mojang AB e/ou do Minecraft.</p>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}