import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {bandsReducer} from './bandsReducer';

const store = createStore(bandsReducer, applyMiddleware(thunkMiddleware));

export default store;
