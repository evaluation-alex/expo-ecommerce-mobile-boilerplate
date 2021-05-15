import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';

import application from './Reducer';
import settings from './Modules/Settings/Reducer';


export default () => {
  const rootReducer = combineReducers({
    application,
    settings,
  });

  return createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
  );
};
