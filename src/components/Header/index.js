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
                                    <i className="fa fa-gamepad"></i> <span>jogar.redefocus.com</span> Clique para copiar o ip
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
                                <NavItem className={(this.props.active === "/" ? 'active' : null)}>
                                    <NavLink tag={Link} to="/">Início</NavLink>
                                </NavItem>
                                <NavItem className={(this.props.active === "/shop" ? 'active' : null)}>
                                    <NavLink tag={Link} to="/shop">Loja</NavLink>
                                </NavItem>
                                <NavItem className={(this.props.active === "/staff" ? 'active' : null)}>
                                    <NavLink tag={Link} to="/shop">Equipe</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle style={{
                                            background: 'transparent',
                                            border: 'none',
                                            boxShadow: 'none'
                                        }}>
                                            <NavLink>Mais</NavLink>
                                        </DropdownToggle>
                                        <DropdownMenu
                                            aria-labelledby="dropdown-more"
                                        >
                                            <ul>
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
            </>
        );
    }
}