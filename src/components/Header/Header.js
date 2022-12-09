import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FaCoins, FaUserCircle } from 'react-icons/fa';
import { Container, ContainerDespesas, ContainerUser } from './styles';
import logo from '../../assets/logo-Trybe-Wallet.svg';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const currentValue = expenses.reduce((acc, curr) => (
      acc + (curr.value * curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <Container>
        <div>
          <img src={ logo } alt="logo-trybe-wallet" />
          <ContainerDespesas>
            <FaCoins size={ 20 } />
            <p>
              Total de despesas:
              {' '}
              <span data-testid="total-field">{currentValue.toFixed(2)}</span>
            </p>
            <span data-testid="header-currency-field">
              BRL
            </span>

          </ContainerDespesas>
          <ContainerUser>
            <FaUserCircle size={ 20 } />
            <p data-testid="email-field">{email}</p>
          </ContainerUser>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.shape({})),
};

Header.defaultProps = {
  expenses: [],
};

export default connect(mapStateToProps)(Header);
