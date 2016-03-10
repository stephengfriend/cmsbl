import { Record } from 'immutable';

import { LOCK_SUCCESS, LOGOUT_SUCCESS } from './actions';

const InitialState = Record({
  isFetching: false,
  isAuthenticated: false
});

const initialState = new InitialState;

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOCK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    default:
      return state;
  }
}
