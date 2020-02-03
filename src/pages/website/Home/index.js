import React, { Component } from 'react';
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

import api from '../../../services/api';

import Paginate from 'react-js-pagination';

const perPage = 3;

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            notices: []
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const result = await api.get(`/notice`);

        this.setState({
            notices: result.data
        });
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        });
    }

    startPage() {
        return this.state.activePage == 1 ? 0 : this.state.activePage * perPage - perPage;
    }

    endPage() {
        return this.state.activePage == 1 ? perPage : this.state.activePage * perPage;
    }

    render() {
        return (
            <>
                <Header
                    active="/"
                    motd_title="Bem-vindo ao nosso site"
                    motd_message="...Descrição legal que alguém vai fazer..."
                    motd_render={render}
                />

                <div className="main">
                    <Container>
                        <Row>
                            <Col md="8">
                                {
                                    this.state.notices.slice(this.startPage(), this.endPage()).map(notice => (
                                        <Notice
                                            key={notice.id}
                                            id={notice.id}
                                            title={notice.title}
                                            author={notice.user.display_name}
                                            content={notice.content}
                                            background="https://i.imgur.com/t0jrKeT.png"
                                            date={notice.time}
                                        />
                                    ))
                                }
                                <Paginate
                                    hideFirstLastPages
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={perPage}
                                    totalItemsCount={this.state.notices.length}
                                    pageRangeDisplayed={5}
                                    prevPageText="« Página anterior"
                                    nextPageText="Próxima página »"
                                    innerClass="pagination justify-content-center"
                                    onChange={this.handlePageChange}
                                />
                            </Col>
                            <Col md="4">
                                <div className="mb-4">
                                    <iframe title="discord-widget" src="https://discordapp.com/widget?id=487760654569177112&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0"></iframe>
                                </div>
                                <div className="mb-4 shadow-sm">
                                    <a className="twitter-timeline" data-theme="dark" data-height="500" href="https://twitter.com/RedeFocusMC?ref_src=twsrc%5Etfw">Tweets by RedeFocusMC</a>
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