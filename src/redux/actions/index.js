import currenciesApi from '../../api/currenciesApi';

export const SAVED_LOGIN = 'SAVED_LOGIN';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const savedDates = (email) => ({
  type: SAVED_LOGIN,
  email });

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (data) => ({
  type: REQUEST_SUCCESSFUL,
  data,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error,
});

export const requestCurrencies = () => async (dispatch) => {
  dispatch(requestStarted());
  try {
    const data = await currenciesApi();
    const objData = Object.keys(data);
    const dataArr = objData.filter((item) => item !== 'USDT');
    return dispatch(requestSuccessful(dataArr));
  } catch (error) {
    return dispatch(requestFailed(error));
  }
};

export const saveExpense = (data) => ({
  type: SAVE_EXPENSE,
  data,
});
