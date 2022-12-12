import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import mockData from './helpers/mockData';

const firstMockExpense = {
  id: 0,
  value: '5',
  currency: 'USD',
  method: 'Cartão de crédito',
  tag: 'Lazer',
  description: 'Cinco dólares',
  exchangeRates: mockData,
};

describe('Testa o botão de Editar', () => {
  test('A aplicação funciona corretamente', async () => {
    const INITIAL_STATE = {
      wallet: {
        expenses: [firstMockExpense],
        editor: false,
        idToEdit: 0,
        currencies: Object.keys(mockData),
      } };
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'], initialState: INITIAL_STATE });

    const totalField = screen.getByTestId('total-field');
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });
    const editButton = screen.getByTestId('edit-btn');
    const valueInput = screen.getByTestId('value-input');
    const currencyInput = await screen.findByTestId('currency-input');
    const eurOption = await screen.findByRole('option', { name: 'EUR' });

    expect(totalField.textContent).toBe('23.77');
    userEvent.click(editButton);
    expect(addButton.textContent).toBe('Editar despesa');
    expect(valueInput.value).toBe('5');
    userEvent.clear(valueInput);
    expect(valueInput.value).toBe('');
    userEvent.type(valueInput, '12');
    expect(valueInput.value).toBe('12');
    userEvent.selectOptions(currencyInput, eurOption);
    userEvent.click(addButton);
    expect(totalField.textContent).toBe('61.52');
    expect(addButton.textContent).toBe('Adicionar despesa');
  });
});
