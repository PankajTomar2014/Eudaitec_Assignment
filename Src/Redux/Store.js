import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Index';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
