import React, { Component } from 'react';
import { Container } from './style';

class Table extends Component {
  render() {
    return (
      <Container>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          <h1>a</h1>
        </tbody>
      </Container>
    );
  }
}

export default Table;
