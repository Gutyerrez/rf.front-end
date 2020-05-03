import React, { Component } from 'react';
import {
    Card,
    CardBody
} from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);


        this.state = {
            servers: [
                {
                    id: 1,
                    name: 'Factions Caribe',
                    icon: 'shopping-cart'
                }
            ],
            donators: [
                {
                    id: 1,
                    display_name: 'Gutyerrez'
                },
                {
                    id: 2,
                    display_name: 'AlfaSoldiier'
                },
                {
                    id: 3,
                    display_name: 'oSrHyper_TM'
                },
                {
                    id: 4,
                    display_name: 'oSrGabriel_TM'
                },
                {
                    id: 5,
                    display_name: 'hunterz'
                },
                {
                    id: 6,
                    display_name: 'laghnet'
                },
                {
                    id: 7,
                    display_name: 'italu'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <Card>
                    <CardBody className="sidebar-buttons">
                        <ul>
                            {
                                this.state.servers.map(server => (
                                    <li
                                        key={server.id}
                                    >
                                        <Link to={`/shop/${server.id}`}><i className={`fa fa-${server.icon}`}></i> {server.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </CardBody>
                </Card>
                <div className="last-purchases">
                    <h3>Últimos compradores</h3>
                    <ul>
                        {
                            this.state.donators.slice(0, 7).map(donator => (
                                <li
                                    key={donator.id}
                                >
                                    <img src={`https://cravatar.eu/helmhead/${donator.display_name}/40`} alt={donator.display_name} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </>
        );
    }
}