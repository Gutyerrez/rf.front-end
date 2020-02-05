import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import ReactHtmlParser from 'react-html-parser';
import Paginate from 'react-js-pagination';
import * as qs from 'querystring';

import moment from 'moment';
import 'moment/locale/pt-br';

import render from '../../../assets/images/render-3.png';

import api from '../../../services/api';

import './style.css';

const perPage = 5;

export default class ChangelogPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 1,
            changelogs: []
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this._load();
    }

    _load = async () => {
        const parsed = qs.parse(this.props.location.search);

        console.log(parsed);

        const response = await api.get(`/changelog`);

        const changelogs = [];

        for (const changelog of response.data) {
            const time = changelog.time;

            var date = moment(time).format('L');

            if (date === moment(new Date()).format('L')) date = "Hoje";

            const finalDate = date;

            const title = changelog.title;
            const message = changelog.message;

            var validating1 = changelogs.find(changelog => changelog.date === finalDate);

            var changelog1 = !validating1 ? { id: changelog.id, date, changes: [{ title, messages: [] }] } : validating1;

            var changelog2 = changelog1.changes.find(changelog => changelog.title === title);

            const changes = !changelog2 ? { title, messages: [] } : changelog2;

            const regex = /@\S+/g;

            changes.messages.push(message.replace(regex, '<b>$&</b>'));

            if (!changelog2) changelog1.changes.push(changes);

            if (!validating1) changelogs.push(changelog1);
        }

        this.setState({
            changelogs
        });
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage: pageNumber
        });
    }

    startPage() {
        return this.state.activePage === 1 ? 0 : this.state.activePage * perPage - perPage;
    }

    endPage() {
        return this.state.activePage === 1 ? perPage : this.state.activePage * perPage;
    }

    render() {
        return (
            <>
                <Header
                    active="/changelog"
                    motd_title="Atualizações"
                    motd_message="Saiba de todas atualizações que são aplicadas dentro da nossa rede, tanto in-game quanto em outras de nossas plataformas. Aqui você poderá se manter atualizado de todas atualizações passdas desde o início até a data de hoje."
                    motd_render={render}
                />

                <div className="main">
                    <Container>
                        <Card className="changelogs">
                            <CardBody>
                                <div className="changelog" style={{ marginTop: '-50px' }}>
                                    {
                                        this.state.changelogs.slice(this.startPage(), this.endPage()).map(changelog => (
                                            <Row key={changelog.id}>
                                                <Col
                                                    md="2"
                                                    sm="2"
                                                    offset="1"
                                                >
                                                    <h3
                                                        className="changelog-date"
                                                    >
                                                        {changelog.date}
                                                    </h3>
                                                </Col>
                                                <Col
                                                    md="10"
                                                    sm="10"
                                                >
                                                    <div
                                                        className="changelog-group"
                                                    >
                                                        {
                                                            changelog.changes.map(changes => (
                                                                <h4
                                                                    key={`${changes.title}`}
                                                                    className="changelog-category"
                                                                >
                                                                    <b>{changes.title}</b>
                                                                    <ul
                                                                        className="changelog-list"
                                                                    >
                                                                        {changes.messages.map(message => (<li key={`${message}`}>{ReactHtmlParser(message)}</li>))}
                                                                    </ul>
                                                                </h4>
                                                            ))
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                    {
                                        this.state.changelogs.length > perPage ?
                                            (
                                                <Paginate
                                                    hideFirstLastPages
                                                    activePage={this.state.activePage}
                                                    itemsCountPerPage={perPage}
                                                    totalItemsCount={this.state.changelogs.length}
                                                    pageRangeDisplayed={5}
                                                    prevPageText="« Página anterior"
                                                    nextPageText="Próxima página »"
                                                    innerClass="pagination mt-4 justify-content-center"
                                                    onChange={this.handlePageChange}
                                                />
                                            )
                                            :
                                            (
                                                null
                                            )
                                    }
                                </div>
                            </CardBody>
                        </Card>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}