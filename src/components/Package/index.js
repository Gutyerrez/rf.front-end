import React, { Component } from 'react';
import {
  Row,
  Col
} from 'reactstrap';

import './style.css';

export default class Package extends Component {
  constructor(props) {
    super(props);
  }

  format(number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);
  }

  render() {
    return (
      <div className="category-items">
        {
          this.props.categoryType === "VIP" ?
            <div className="product-table">
              <table>
                <tbody>
                  <tr className="product-title">
                    <td style={{ backgroundColor: "unset" }}></td>
                    {this.props.items.map(vip => (
                      <td
                        key={vip.id}
                        className={`package-item`}
                      >
                        <h1>{vip.name}</h1>
                        <p>
                          {this.format(vip.price)}
                        </p>
                        <button>
                          Comprar
                    </button>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td colspan="4" class="category-title bordered">
                      Geral
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Tag exclusiva
                    </td>
                    <td>
                      <img src={this.props.items[0].img} />
                    </td>
                    <td>
                      <img src={this.props.items[1].img} />
                    </td>
                    <td>
                      <img src={this.props.items[2].img} />
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Teletransportes instantâneos
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Acesso à loja VIP
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Acesso ao uso de cores no chat e em placas
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      XP mantida ao morrer
                    </td>
                    <td>
                      <i className="fa fa-close"></i>
                    </td>
                    <td>
                      <i className="fa fa-close"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Recebe um baú virtual grátis
                    </td>
                    <td>
                      <i className="fa fa-close"></i>
                    </td>
                    <td>
                      <i className="fa fa-close"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Multiplicador de habilidades
                    </td>
                    <td>
                      1.3x
                    </td>
                    <td>
                      1.6x
                    </td>
                    <td>
                      2.0x
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Slots no Enderchest
                    </td>
                    <td>
                      36
                    </td>
                    <td>
                      45
                    </td>
                    <td>
                      54
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Limite de homes definidas
                    </td>
                    <td>
                      20
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      60
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="category-title">
                      Comandos
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      /endhecest
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      /craft
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      /back
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                    <td>
                      <i className="fa fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Intervalo de uso do comando /compactar
                    </td>
                    <td>
                      1 minuto
                    </td>
                    <td>
                      30 segundos
                    </td>
                    <td>
                      15 segundos
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Intervalo de uso do comando /derreter
                    </td>
                    <td>
                      10 minutos
                    </td>
                    <td>
                      5 minutos
                    </td>
                    <td>
                      Ilimitado
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Intervalo de uso do comando /vender
                    </td>
                    <td>
                      1 minuto e 30 segundos
                    </td>
                    <td>
                      1 minuto
                    </td>
                    <td>
                      30 segundos
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4" class="category-title">
                      Kits exclusivos
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Básico
                    </td>
                    <td>
                      Kit Camponês
                    </td>
                    <td>
                      Kit Cavaleiro
                    </td>
                    <td>
                      Kit Nobre
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Diário
                    </td>
                    <td>
                      Kit Camponês
                    </td>
                    <td>
                      Kit Cavaleiro
                    </td>
                    <td>
                      Kit Nobre
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Semanal
                    </td>
                    <td>
                      Kit Camponês
                    </td>
                    <td>
                      Kit Cavaleiro
                    </td>
                    <td>
                      Kit Nobre
                    </td>
                  </tr>
                  <tr>
                    <td className="attribute-info">
                      Mensal
                    </td>
                    <td>
                      Kit Camponês
                    </td>
                    <td>
                      Kit Cavaleiro
                    </td>
                    <td>
                      Kit Nobre
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            :
            <Row>
              {this.props.items.map(item => (
                <Col
                  key={item.id}
                  md={item.size}
                >
                  <div className={`package-item ${this.props.categoryType}`}>
                    <small>{item.amount} + {item.bonus} Bônus</small>
                    <h3>{item.name}</h3>
                    <p>{this.format(item.price)}</p>
                    <button onClick={e => console.log('u.u')}>Comprar</button>
                  </div>
                </Col>
              ))}
            </Row>
        }
      </div>
    );
  }
}