import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import propTypes from 'prop-types';
import { Container } from './style';
import { handleExpense, editExpense } from '../../redux/actions';

class Table extends Component {
  handleDelete = (_, id) => {
    const { expenses, dispatch } = this.props;
    const filteredExpenses = expenses.filter((expense) => expense.id !== id);
    dispatch(handleExpense(filteredExpenses));
  };

  handleEdit = (_, id) => {
    const { dispatch } = this.props;
    dispatch(editExpense(id));
  };

  render() {
    const { expenses } = this.props;
    const showExpenses = expenses.map(({
      id,
      description,
      currency,
      tag,
      method,
      value,
      exchangeRates,
    }) => (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{Number(value).toFixed(2)}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td className="buttonContainer">
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ (event) => this.handleEdit(event, id) }
            className="edit"
          >
            <FaEdit size={ 20 } />

          </button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ (event) => this.handleDelete(event, id) }
            className="delete"
          >
            <MdDelete size={ 20 } />

          </button>
        </td>
      </tr>
    ));
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
          {showExpenses}
        </tbody>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: propTypes.arrayOf({}).isRequired,
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(Table);
