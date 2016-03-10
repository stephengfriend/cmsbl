export const SHOW_LOCK = 'SHOW_LOCK';
export const LOCK_SUCCESS = 'LOCK_SUCCESS';
export const LOCK_ERROR = 'LOCK_ERROR';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function showLock() {
  return {
    type: SHOW_LOCK
  };
}

function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token
  };
}

function lockError(err) {
  return {
    type: LOCK_ERROR,
    err
  };
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

export function register() {
  const Auth0Lock = require('auth0-lock');
  const lock = new Auth0Lock('p2C9MVQtRjdbT7sRsBXOLsfrMJnLJucH', 'cmsbl.auth0.com'); // eslint-disable-line
  return ({ dispatch }) => {
    dispatch(showLock);
    lock.showSignup({
      icon: require('./logo_small.png'),
      socialBigButtons: true,
      popup: true,
      loginAfterSignup: true,
      rememberLastLogin: true
    }, (err, profile, token) => {
      if (err) {
        dispatch(lockError(err));
        return;
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      dispatch(lockSuccess(profile, token));
    });
  };
}

export function login() {
  const Auth0Lock = require('auth0-lock');
  const lock = new Auth0Lock('p2C9MVQtRjdbT7sRsBXOLsfrMJnLJucH', 'cmsbl.auth0.com'); // eslint-disable-line
  return ({ dispatch }) => {
    dispatch(showLock);
    lock.show({
      icon: require('./logo_small.png'),
      socialBigButtons: true,
      popup: true,
      loginAfterSignup: true,
      rememberLastLogin: true
    }, (err, profile, token) => {
      if (err) {
        dispatch(lockError(err));
        return;
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      dispatch(lockSuccess(profile, token));
    });
  };
}

// Logs the user out
export function logoutUser() {
  return ({ dispatch }) => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  };
}
