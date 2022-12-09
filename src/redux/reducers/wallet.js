import { REQUEST_FAILED,
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  SAVE_EXPENSE,
} from '../actions';

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
  case SAVE_EXPENSE: return {
    ...state,
    expenses: [...state.expenses, action.data],
  };
  default: return state;
  }
};

export default wallet;
