import { combineReducers } from 'redux';

const emptyReducer = (state = { id: 'test' }) => state;

export default combineReducers({ emptyReducer });
