import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Header
                    content={
                        <>
                            <div className="welcome" style={{
                                float: 'left'
                            }}>
                                <h3>NOVO: Factions Radioativo</h3>
                                <br />
                                <p>
                                    Já garantiu sua vaga para jogar em nosso próximo servidor de factions!? Não? Então adquira já
                                    seu VIP e fique pronto!
                                </p>

                                <button>Comprar VIP</button>
                            </div>
                            <div className="page-links">
                                <div className="page-message" style={{
                                    float: 'right'
                                }}>
                                    <span className="player-count">
                                        <i className="fas fa-users"></i>
                                        <br />
                                        100
                                    </span>
                                    <p>
                                        jogar.redefocus.com
                                    </p>
                                    <span className="tooltip-message">Divirta-se aqui! 😊</span>
                                </div>
                            </div>
                        </>
                    }
                />

                <Container>
                    <div className="main" style={{ textAlign: 'center' }}>

                    </div>
                </Container>

                <Footer />
            </>
        );
    }
}