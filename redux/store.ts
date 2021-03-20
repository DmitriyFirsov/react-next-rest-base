import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import mainReducer from './mainReducer';

type AppState = ReturnType<typeof mainReducer>;

// create a makeStore function
const makeStore: MakeStore<AppState> = () => createStore(mainReducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper<AppState>(makeStore);
