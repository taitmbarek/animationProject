import {combineReducers} from 'redux';
import onboard from './Onboarding/reducer';
const rootReducer = combineReducers({
  onboard,
});

export default rootReducer;
