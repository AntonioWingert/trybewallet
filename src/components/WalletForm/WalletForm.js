import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ButtonContainer,
  Container, DescriptionContainer, PaymentContainer } from './style';
import currenciesApi from '../../api/currenciesApi';
import { closeEdit, handleExpense, saveExpense } from '../../redux/actions';

class WalletForm extends Component {
  state = {
    method: 'Dinheiro',
    currency: 'USD',
    value: '',
    description: '',
    tag: 'Alimentação',
    editOn: false,
  };

  componentDidMount() {
    this.setStateCurrencies();
  }

  componentDidUpdate() {
    const { dispatch, editor, idToEdit, expenses } = this.props;

    if (editor) {
      dispatch(closeEdit());

      const {
        value,
        description,
        currency,
        method,
        tag } = expenses.find((expense) => Number(expense.id) === idToEdit);

      this.setState({
        editOn: true,
        value,
        description,
        currency,
        method,
        tag,
      });
    }
  }

  handleChange = (e) => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
    });
  };

  setStateCurrencies = () => {
    const { currencies } = this.props;
    this.setState({ currency: currencies[0] });
  };

  handleSubmit = async () => {
    const { expenses, dispatch, idToEdit } = this.props;
    const {
      method,
      currency,
      value,
      description,
      tag,
      editOn,
    } = this.state;
    if (!editOn) {
      const data = await currenciesApi();
      const newExpense = {
        id: expenses.length,
        method,
        currency,
        value,
        description,
        tag,
        exchangeRates: data,
      };
      dispatch(saveExpense(newExpense));
      this.setState({
        method: 'Dinheiro',
        currency: 'USD',
        value: '',
        description: '',
        tag: 'Alimentação',
      });
    } else {
      let editExpense = expenses.find((expense) => Number(expense.id) === idToEdit);
      editExpense = {
        ...editExpense,
        value,
        description,
        currency,
        method,
        tag,
      };
      let newExpenses = expenses.filter((expense) => Number(expense.id) !== idToEdit);
      newExpenses = [...newExpenses, editExpense];
      newExpenses.sort((a, b) => a.id - b.id);
      dispatch(handleExpense(newExpenses));
      this.setState({ value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: '',
        editOn: false,
      });
    }
  };

  render() {
    const {
      method,
      currency,
      value,
      description,
      tag,
      editOn,
    } = this.state;
    const { currencies } = this.props;

    return (
      <Container>
        <DescriptionContainer>
          <label htmlFor="description">
            Descrição da despesa
            <input
              id="description"
              type="text"
              data-testid="description-input"
              onChange={ this.handleChange }
              name="description"
              value={ description }
            />
          </label>
          <label htmlFor="tag">
            Categoria da despesa
            <select
              id="tag"
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </DescriptionContainer>
        <PaymentContainer>
          <label htmlFor="value">
            Valor
            <input
              id="value"
              type="number"
              onChange={ this.handleChange }
              data-testid="value-input"
              name="value"
              value={ value }
            />
          </label>
          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              value={ method }
              name="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              name="currency"
              onChange={ this.handleChange }
              value={ currency }
              data-testid="currency-input"
              className="currency"
            >
              {
                currencies.map((element) => (
                  <option
                    key={ element }
                    value={ element }
                  >
                    {element}
                  </option>))
              }
            </select>
          </label>
        </PaymentContainer>
        <ButtonContainer>
          <button type="button" onClick={ this.handleSubmit }>
            {editOn ? 'Editar despesa' : 'Adicionar despesa'}
          </button>
        </ButtonContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  idToEdit: state.wallet.idToEdit,
  editor: state.wallet.editor,
});

WalletForm.propTypes = {
  editor: propTypes.bool.isRequired,
  idToEdit: propTypes.number.isRequired,
  dispatch: propTypes.func.isRequired,
  currencies: propTypes.arrayOf([
    propTypes.string,
  ]).isRequired,
  expenses: propTypes.arrayOf([{
    id: propTypes.number.isRequired,
    method: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    value: propTypes.any.isRequired,
    exchangeRates: propTypes.any.isRequired,
  }]).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
