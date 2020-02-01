import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <Container>
                        <ul className="help-links">
                            <h3>Ajuda</h3>
                            <li>
                                <a href="/faq">Perguntas frequentes</a>
                            </li>
                            <li>
                                <a href="/contact">Fale conosco</a>
                            </li>
                        </ul>
                        <ul className="payment-methods">
                            <h3>Formas de pagamento</h3>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <a href="https://twitter.com/RedeFocusMC"><i className="fa fa-twitter"></i></a>
                            </li>
                        </ul>
                    </Container>
                </footer>
            </>
        );
    }
}