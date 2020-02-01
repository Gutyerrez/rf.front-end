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

import Notice from '../../../components/Notice';

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

                <div className="main">
                    <Container>
                        <Row>
                            <Col md="8">
                                <Notice
                                    title="Testando..."
                                    author="Gutyerrez"
                                    content="
                                    Olá meus queridos,<br>
                    <br>
                    Durante a <a href='https://www.redesky.com/threads/natal-promo%C3%A7%C3%A3o-sorteio-mapas-e-mais.510217/' class='internalLink'>promoção de Natal da Rede Sky no ano de 2019</a>, anunciamos o sorteio de uma Cadeira Gamer Xperience Pro. Para participar, você deveria adquirir pelo menos <b>R$ 50,00</b> em produtos na loja Rede Sky, entre os dias <b>12 de dezembro de 2019</b> e <b>3 de janeiro de 2020</b>. Com o encerramento da promoção, chegou o dia de anunciar quem foi o sorteado!<br>
                    <br>
                    <img src='https://i.imgur.com/7yhM8kH.png' class='bbCodeImage LbImage' alt='[&#8203;IMG]' data-url='https://i.imgur.com/7yhM8kH.png' title='' data-original-title='Clique nesta imagem para vê-la em tamanho real.' style=''><br>
                    <br>
                    O grande vencedor do sorteio da Cadeira Gamer foi... <b><a href='https://www.redesky.com/members/sirpoower_ofc.415453/' class='internalLink'>sirpoower_ofc</a></b>! Parabéns! <img src='https://i.imgur.com/TFsiDHO.png' class='bbCodeImage LbImage' alt='[&#8203;IMG]' data-url='https://i.imgur.com/TFsiDHO.png' title='' data-original-title='Clique nesta imagem para vê-la em tamanho real.' style=''><br>
                    <br>
                    Entraremos em contato com o sirpoower_ofc ainda esta semana para combinar o envio da premiação. Pediremos a ele que envie-nos uma foto ao lado da cadeira assim que ele recebê-la. Caso ele envie e nos dê autorização, publicaremos em nosso <a href='https://www.twitter.com/ServidoresSky' target='_blank' class='externalLink ProxyLink' data-proxy-href='proxy.php?link=https%3A%2F%2Fwww.twitter.com%2FServidoresSky&amp;hash=94c1c43f8092da048297e3083302ed84' rel='nofollow'>Twitter</a>!<br>
                    <br>
                    O sorteio foi realizado usando a plataforma <b>random.org</b>, que disponibiliza um link público para que qualquer um possa visualizar a lista completa de participantes do sorteio e atestar que o resultado foi de fato aleatório. Clique <a href='https://www.random.org/draws/details/?draw=107308' target='_blank' class='externalLink ProxyLink' data-proxy-href='proxy.php?link=https%3A%2F%2Fwww.random.org%2Fdraws%2Fdetails%2F%3Fdraw%3D107308&amp;hash=dae5a8a79cf513c50713b5285600eab7' rel='nofollow'>aqui</a> para acessar.<br>
                    <br>
                    Até o próximo sorteio!
                    
                                    "
                                    background="https://i.imgur.com/t0jrKeT.png"
                                    date="00/00/0000"
                                />
                            </Col>
                            <Col md="4">
                                <div className="mb-4">
                                    <iframe src="https://discordapp.com/widget?id=487760654569177112&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
                                </div>
                                <div className="mb-4 shadow-sm">
                                <a class="twitter-timeline" data-theme="dark" href="https://twitter.com/RedeFocusMC?ref_src=twsrc%5Etfw">Tweets by RedeFocusMC</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}