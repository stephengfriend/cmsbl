import { combineReducers } from 'redux';
import { reduxFields } from '../lib/redux-fields';
import { routerReducer as routing } from 'react-router-redux';

import auth from '../auth/reducer';
import device from '../device/reducer';
import ui from '../ui/reducer';

const appReducer = combineReducers({
  auth,
  device,
  reduxFields,
  routing,
  ui
});

export default appReducer;
