import React, { Component } from 'react';
import {
    Container,
    Nav,
    Navbar,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import reactHTMLParser from 'react-html-parser';

import copy from 'copy-to-clipboard';

import { Link, Redirect } from 'react-router-dom';

import config from '../../config/config.json';

import jwt from 'jsonwebtoken';

import './style.css';

const defaultIpAddress = 'jogar.redefocus.com';

export default class Header extends Component {
    static defaultProps = {
        motd_active: true
    };

    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen: false,
            address: defaultIpAddress
        };

        this.copy = this.copy.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    copy() {
        copy(defaultIpAddress);

        this.setState({
            address: 'Copiado com sucesso!'
        });

        setTimeout(() => {
            this.setState({
                address: defaultIpAddress
            });
        }, 1000);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    isLogged() {
        return sessionStorage.getItem('user');
    }

    username() {
        const token = sessionStorage.getItem('user');

        const user = jwt.verify(token, config.secret);

        return user.username;
    }

    render() {
        return (
            <>
                {
                    this.props.onlyLoggedIn && !this.isLogged() ?
                        <Redirect to={this.props.redirectURI} />
                        :
                        null
                }
                <header>
                    <div className="login-bar">
                        <Container>
                            <ul>
                                <li>
                                    <i className="fa fa-gamepad"></i> <span onClick={this.copy}>{this.state.address}</span> <p>Clique para copiar o ip</p>
                                </li>
                                <li>
                                    {
                                        this.isLogged() ?
                                            <Link to="/account"><img src={`https://cravatar.eu/helmavatar/${this.username()}/32`} alt="..." /> {this.username()}</Link>
                                            :
                                            <Link to="/account/login"><i className="fa fa-user"></i> Minha conta</Link>
                                    }
                                </li>
                            </ul>
                        </Container>
                    </div>
                    <div className="presentation">
                        <Container>
                            <Link to="/" className="logo-container">Rede Focus</Link>
                            <div className="cart-item-count">
                                <i className="fa fa-shopping-cart"></i>
                                <Link to="/shop/cart">
                                    0 item por R$ 0,00
                                </Link>
                            </div>
                        </Container>
                    </div>
                    <Navbar>
                        <Container>
                            <Nav>
                                <NavItem className={(this.props.active === "/" && !this.state.dropdownOpen ? 'active' : null)}>
                                    <NavLink tag={Link} to="/">Início</NavLink>
                                </NavItem>
                                <NavItem className={(this.props.active === "/shop" && !this.state.dropdownOpen ? 'active' : null)}>
                                    <NavLink tag={Link} to="/shop">Loja</NavLink>
                                </NavItem>
                                <NavItem className={(this.props.active === "/staff" && !this.state.dropdownOpen ? 'active' : null)}>
                                    <NavLink tag={Link} to="/staff">Equipe</NavLink>
                                </NavItem>
                                <NavItem className={(this.state.dropdownOpen ? 'active' : null)}>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle style={{
                                            background: 'transparent',
                                            border: 'none',
                                            boxShadow: 'none',
                                            paddingLeft: '5px',
                                            textAlign: 'center'
                                        }}>
                                            <NavLink>Mais</NavLink>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            aria-labelledby="dropdown-more"
                                        >
                                            <ul>
                                                <li>
                                                    <NavLink tag={Link} to="/changelog">Atualizações</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink tag={Link} to="/punishments">Punições</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink tag={Link} to="/discord">Discord</NavLink>
                                                </li>
                                            </ul>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <div className="message-of-the-day">
                    <Container>

                        {
                            this.props.motd_active ?
                                <div className="message-of-the-day-body">
                                    <div className="message-of-the-day-content">
                                        <h3>{reactHTMLParser(this.props.motd_title)}</h3>
                                        <br />
                                        <p>
                                            {reactHTMLParser(this.props.motd_message)}
                                        </p>
                                        <img src={this.props.motd_render} alt="render" width="450" />
                                    </div>
                                </div>
                                :
                                (
                                    null
                                )
                        }
                    </Container>
                </div>
            </>
        );
    }
}