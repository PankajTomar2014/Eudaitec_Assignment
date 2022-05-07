import { combineReducers } from 'redux';
import listApiReducer from './FetchListReducer';

const appReducer = combineReducers({
  listData: listApiReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;