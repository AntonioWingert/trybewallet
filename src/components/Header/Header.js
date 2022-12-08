import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FaCoins, FaUserCircle } from 'react-icons/fa';
import { Container, ContainerDespesas, ContainerUser } from './styles';
import logo from '../../assets/logo-Trybe-Wallet.svg';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <Container>
        <div>
          <img src={ logo } alt="logo-trybe-wallet" />
          <ContainerDespesas>
            <FaCoins size={ 20 } />
            <p data-testid="total-field">
              Total de despesas:
              {' '}
              <span data-testid="header-currency-field"> 0 BRL</span>
            </p>

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
});

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
