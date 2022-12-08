import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_STARTED: return {
    ...state,
  };
  case REQUEST_SUCCESSFUL: return {
    ...state,
    currencies: [...action.data],
  };
  case REQUEST_FAILED: return {
    ...state,
    error: action.error,
  };
  default: return state;
  }
};

export default wallet;
