import { SAVED_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVED_LOGIN: return {
    ...state,
    email: action.email,
  };
  default: return state;
  }
};

export default user;
