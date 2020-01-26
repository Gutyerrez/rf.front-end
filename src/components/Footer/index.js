import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Container>
                <div className="main" style={{ textAlign: 'center' }}>
                <div className="footer-links">
                    <ul>

                        <li>
                            <a className="about" href="/about">
                                Sobre nós
                            </a>
                        </li>

                        <li>
                            <a className="helpUsImprove" href="/help">
                                Ajude-nos a Melhorar
                            </a>
                        </li>

                        <li>
                            <a className="link-serverStatus" href="/discord">
                                Discord
                            </a>
                        </li>

                        <li>
                            <a className="link-support" href="/support">
                                Suporte
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
                </Container>
            </footer>
        );
    }
}