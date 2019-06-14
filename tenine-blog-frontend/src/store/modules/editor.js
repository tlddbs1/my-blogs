import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'api/api';

// 액션 타입
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';
const WRITE_POST = 'editor/WRITE_POST';

// 액션 생성자
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);
export const writePost = createAction(WRITE_POST,api.writePost);
// 상태 초기화
const initialState = Map({
  title: '',
  markdown: ''
});

// 리듀서
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  },
  ...pender({
    type: WRITE_POST,
    onSuccess:(state,action) => {
      const {_id}  = action.payload.data;
      return state.set('postId' , _id);
    }
  })
}, initialState)