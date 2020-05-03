import React, { Component } from 'react';
import {
    Row,
    Col,
    Table
} from 'reactstrap';

import moment from 'moment';

import 'moment/locale/pt-br';

import './styles.css';

export default class Punishment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    status() {
        const time = new Date().getTime();

        if (this.props.revoker !== null) return "Revogado";
        if (this.props.start_time === null) return "Pendente";

        return this.props.status && time < this.props.end_time ? "Ativo" : "Finalizado";
    }

    render() {
        return (
            <>
                <div className="punishment mb-2" onClick={this.toggle}>
                    <Row>
                        <Col md="2">
                            <i className="fa fa-clock-o mr-1"></i> <span>{moment(this.props.time).calendar()}</span>
                        </Col>
                        <Col md="6">
                            {this.props.user.display_name} foi punido por {this.props.staffer.display_name}
                        </Col>
                        <Col md="4">
                            {this.props.punish_reason.display_name}
                        </Col>
                    </Row>
                </div>
                {
                    this.state.showDetails
                        ?
                        (
                            <>
                                <div className={`punishment-arrow ${this.status()}`}></div>
                                <div className={`punishment punishment-details ${this.status()} mb-2`}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th width="25%">Motivo</th>
                                                <th width="40%">Término</th>
                                                <th width="15%">Status</th>
                                                <th width="20%">Prova</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{this.props.punish_reason.display_name}</td>
                                                <td>{this.props.end_time ? moment(this.props.end_time).format(`LLL`) : 'Permanente'}</td>
                                                <td>{this.status()}</td>
                                                <td>
                                                    {
                                                        this.props.proof || this.props.proof !== '' ? (
                                                            <a href={`${this.props.proof}`}>
                                                                Ver provas <i className="fa fa-external-link"></i>
                                                            </a>
                                                        ) : (
                                                                <p>Indisponível</p>
                                                            )
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    {
                                        this.props.revoker ?
                                            (
                                                <>
                                                    <Table>
                                                        <thead>
                                                            <tr>
                                                                <th width="25%">Revogado por</th>
                                                                <th width="40%">Revogado em</th>
                                                                <th width="35%">Motivo da revogação</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{this.props.revoker.display_name}</td>
                                                                <td>{moment(this.props.revoke_time).format(`LLL`)}</td>
                                                                <td>{this.props.revoke_reason.display_name}</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </>
                                            )
                                            :
                                            (
                                                null
                                            )
                                    }
                                </div>
                            </>
                        )
                        :
                        (
                            null
                        )
                }
            </>
        );
    }
}