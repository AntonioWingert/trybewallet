import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, DescriptionContainer, PaymentContainer } from './style';

class WalletForm extends Component {
  state = {
    methodPayment: 'money',
    currencyPayment: '',
    valueInput: '',
    descriptionInput: '',
    tagInput: 'alimentacao',
  };

  componentDidMount() {
    this.setStateCurrencies();
  }

  handleChange = (e) => {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
    });
  };

  setStateCurrencies = () => {
    const { currencies } = this.props;
    this.setState({ currencyPayment: currencies[0] });
  };

  render() {
    const {
      methodPayment,
      currencyPayment,
      valueInput,
      descriptionInput,
      tagInput,
    } = this.state;
    const { currencies } = this.props;

    return (
      <Container>
        <DescriptionContainer>
          <label htmlFor="descriptionInput">
            Descrição da despesa
            <input
              id="descriptionInput"
              type="text"
              data-testid="description-input"
              onChange={ this.handleChange }
              name="descriptionInput"
              value={ descriptionInput }
            />
          </label>
          <label htmlFor="tagInput">
            Categoria da despesa
            <select
              id="tagInput"
              name="tagInput"
              data-testid="tag-input"
              onChange={ this.handleChange }
              value={ tagInput }
            >
              <option value="alimentação">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
        </DescriptionContainer>
        <PaymentContainer>
          <label htmlFor="valueInput">
            Valor
            <input
              id="valueInput"
              type="number"
              onChange={ this.handleChange }
              data-testid="value-input"
              name="valueInput"
              value={ valueInput }
            />
          </label>
          <label htmlFor="methodPayment">
            Método de pagamento
            <select
              id="methodPayment"
              value={ methodPayment }
              name="methodPayment"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="money">Dinheiro</option>
              <option value="credit-card">Cartão de crédito</option>
              <option value="debit-card">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="currencyPayment">
            Moeda
            <select
              id="currencyPayment"
              name="currencyPayment"
              onChange={ this.handleChange }
              value={ currencyPayment }
              data-testid="currency-input"
              className="currencyPayment"
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  map: propTypes.func.isRequired,
  currencies: propTypes.arrayOf([
    propTypes.string,
  ]).isRequired,
};

export default connect(mapStateToProps)(WalletForm);
