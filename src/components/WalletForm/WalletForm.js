import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container } from './style';

class WalletForm extends Component {
  state = {
    methodPayment: 'money',
    currencyPayment: '',
    valueInput: 0,
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
        <div>
          <input
            type="text"
            data-testid="description-input"
            onChange={ this.handleChange }
            name="descriptionInput"
            value={ descriptionInput }
          />
          <select
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
        </div>
        <div>
          <input
            type="number"
            onChange={ this.handleChange }
            data-testid="value-input"
            name="valueInput"
            value={ valueInput }
          />
          <select
            value={ methodPayment }
            name="methodPayment"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
          <select
            name="currencyPayment"
            onChange={ this.handleChange }
            value={ currencyPayment }
            data-testid="currency-input"
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
        </div>
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
