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

import { Link } from 'react-router-dom';

import './style.css';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <>
                <header>
                    <div className="login-bar">
                        <Container>
                            <ul>
                                <li>
                                    <i className="fa fa-gamepad"></i> <span>jogar.redefocus.com</span> <p>Clique para copiar o ip</p>
                                </li>
                                <li>
                                    <a href="/account/login"><i className="fa fa-user"></i> Minha conta</a>
                                </li>
                            </ul>
                        </Container>
                    </div>
                    <div className="presentation">
                        <Container>
                            <a className="logo-container">Rede Focus</a>
                            <div className="cart-item-count">
                                <i className="fa fa-shopping-cart"></i>
                                <a href="/shop/cart">
                                     0 item por R$ 0,00
                                </a>
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
                        <div className="message-of-the-day-body">
                            <div className="message-of-the-day-content">
                                <h3>{reactHTMLParser(this.props.motd_title)}</h3>
                                <br />
                                <p>
                                    {reactHTMLParser(this.props.motd_message)}
                                </p>
                                <img src={this.props.motd_render} alt="render" width="450"/>
                            </div>
                        </div>
                    </Container>
                </div>
            </>
        );
    }
}