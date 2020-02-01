import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import './style.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import render from '../../../assets/images/render.png';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header
                    active="/"
                />

                <div className="message-of-the-day">
                    <Container>
                        <div className="message-of-the-day-body">
                            <div className="message-of-the-day-content">
                                <h3>Bem-vindo ao site do <b>Focus</b></h3>
                                <br />
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum molestie ultricies. Donec dignissim venenatis hendrerit. Donec elit turpis, posuere sed enim blandit, aliquet placerat orci. Vivamus venenatis ultricies mauris, non blandit nunc. Fusce faucibus sem quis arcu sagittis, ut semper erat posuere.
                                </p>
                                <img src={render} alt="render" width="450"/>
                            </div>
                        </div>
                    </Container>
                </div>

                <Container>
                    <Row>
                        <Col md="8">
                            
                        </Col>
                        <Col md="4">
                            
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </>
        );
    }
}