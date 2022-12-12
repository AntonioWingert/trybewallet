import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testa a pagina de carteira', () => {
  test('Se os elementos são renderizados', () => {
    renderWithRouterAndRedux(<App />);

    const rightEmail = 'test@test.com';

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByRole('button');

    userEvent.type(emailInput, rightEmail);
    userEvent.type(passwordInput, '123456');
    userEvent.click(loginButton);

    const emailField = screen.getByTestId('email-field');
    const totalField = screen.getByTestId('total-field');
    const valueInput = screen.getByTestId('value-input');
    const descInput = screen.getByTestId('description-input');
    const currencyInput = screen.getByTestId('currency-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');

    expect(emailField.textContent).toBe('test@test.com');
    expect(totalField.textContent).toBe('0.00');
    expect(valueInput).toBeInTheDocument();
    expect(descInput).toBeInTheDocument();
    expect(currencyInput).toBeInTheDocument();
    expect(methodInput).toBeInTheDocument();
    expect(tagInput).toBeInTheDocument();
  });

  test('Se é possivel adicionar elementos', async () => {
    const initialEntries = ['/carteira'];

    renderWithRouterAndRedux(<App />, { initialEntries });

    const valueInput = screen.getByTestId('value-input');
    const descInput = screen.getByTestId('description-input');
    const methodInput = screen.getByTestId('method-input');
    const tagInput = screen.getByTestId('tag-input');
    const ccOption = screen.getByRole('option', { name: 'Cartão de crédito' });
    const lazerOption = screen.getByRole('option', { name: 'Lazer' });
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });

    act(() => {
      userEvent.type(valueInput, '11');
      userEvent.type(descInput, 'Onze euros');
      userEvent.selectOptions(methodInput, ccOption);
      userEvent.selectOptions(tagInput, lazerOption);
      userEvent.click(addButton);
    });

    expect(addButton).toBeEnabled();
  });
  test('Se um erro é disparado caso a aplicação falhe', async () => {
    const initialEntries = ['/carteira'];

    renderWithRouterAndRedux(<App />, { initialEntries });

    const errorContainer = await screen.findByText(/ocorreu um erro/i);

    expect(errorContainer).not.toBeInTheDocument();
  });
});
