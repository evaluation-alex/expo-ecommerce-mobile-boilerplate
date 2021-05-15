import {createActions, handleActions} from 'redux-actions';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
  app: null,
});

export const actions = createActions({
  SETTINGS: {
    UPDATE_APP_SETTINGS: app => app,
  },
}).settings;

const reducer = handleActions({
  [actions.updateAppSettings](state, {payload: app}) {
    return state.merge({app});
  },
}, initialState);


export default reducer;
