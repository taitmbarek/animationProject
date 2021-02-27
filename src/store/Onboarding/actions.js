import {
  REGISTER_UPDATE_DATA,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESSFUL,
} from './actionTypes';

export const registerUser = (payload) => {
  return {
    type: REGISTER_USER,
    payload,
  };
};
export const registerUserSuccess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload,
  };
};
export const registerUserFailed = (payload) => {
  return {
    type: REGISTER_USER_FAILED,
    payload,
  };
};
export const registerUserUpdate = (payload) => {
  return {
    type: REGISTER_UPDATE_DATA,
    payload,
  };
};
