import {createActions, handleActions} from 'redux-actions';
import Immutable from 'seamless-immutable';


const initialState = Immutable({
  updating: false,
});

export const actions = createActions({
  APPLICATION: {
    UPDATE: {
      STARTED: null,
      FINISHED: null,
    },
  },
}).application;

const reducer = handleActions({
  [actions.update.started](state) {
    return state.merge({updating: true});
  },
  [actions.update.finished](state) {
    return state.merge({updating: false});
  },
}, initialState);


export default reducer;
