import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Verifica a Pagina de Login', () => {
  test('Se os elementos estao na pagina de login', () => {
    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByRole('button');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  });

  test('Se o botao inicia desabilitado', () => {
    renderWithRouterAndRedux(<App />);

    const loginBtn = screen.getByRole('button');

    expect(loginBtn).toBeDisabled();
  });

  test('Se a validação esta ocorrendo de forma correta', () => {
    renderWithRouterAndRedux(<App />);

    const rightEmail = 'test@test.com';

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByRole('button');

    userEvent.type(emailInput, rightEmail);
    userEvent.type(passwordInput, '123456');

    expect(loginBtn).toBeEnabled();

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, '12345');

    expect(loginBtn).toBeDisabled();

    userEvent.clear(passwordInput);
    userEvent.type(passwordInput, '123456');

    expect(loginBtn).toBeEnabled();

    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'teste@test');

    expect(loginBtn).toBeDisabled();

    userEvent.clear(emailInput);
    userEvent.type(emailInput, rightEmail);

    expect(loginBtn).toBeEnabled();
  });
});
