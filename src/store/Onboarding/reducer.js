import {
  REGISTER_UPDATE_DATA,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESSFUL,
} from './actionTypes';
const initialState = {
  error: null,
  loading: false,
  isLoggedIn: false,
  data: null,
};
const onboard = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      state = {
        ...state,
        loading: true,
        registrationError: null,
      };
      break;
    case REGISTER_USER_SUCCESSFUL:
      state = {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
      break;
    case REGISTER_USER_FAILED:
      state = {
        ...state,
        loading: false,
        registrationError: action.payload,
      };
      break;
    case REGISTER_UPDATE_DATA:
      state = {
        ...state,
        data: {...state.data, ...action.payload},
      };
      break;
  }
  return state;
};
export default onboard;
