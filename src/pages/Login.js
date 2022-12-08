import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Container from '../styles/Login';
import logo from '../assets/logo-Trybe-Wallet.svg';
import { requestCurrencies, savedDates } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestCurrencies());
  }

  handleChange = (event) => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const { email } = this.state;
    const { dispatch } = this.props;
    dispatch(savedDates(email));
  };

  render() {
    const { email, password } = this.state;
    const VALID_PASSWORD = 6;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return (
      <Container>
        <form>
          <img src={ logo } alt="logo trybe wallet" />
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="Senha"
          />
          <Link to="/carteira">
            <button
              onClick={ this.handleSubmit }
              disabled={ !(email.match(regexEmail) && password.length >= VALID_PASSWORD) }
              type="submit"
            >
              Entrar
            </button>
          </Link>
        </form>
      </Container>
    );
  }
}

Login.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect()(Login);
