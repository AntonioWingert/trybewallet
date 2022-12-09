import { CLOSE_EDIT, HANDLE_EXPENSE, EDIT_EXPENSE, REQUEST_FAILED,
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
  case HANDLE_EXPENSE: return {
    ...state,
    expenses: action.data,
  };
  case EDIT_EXPENSE: return {
    ...state,
    editor: true,
    idToEdit: action.id,
  };
  case CLOSE_EDIT: return {
    ...state,
    editor: false,
  };
  default: return state;
  }
};

export default wallet;
