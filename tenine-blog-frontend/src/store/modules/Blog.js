import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

import * as api from 'api/api';

//액션 타입
const INITIALIZE = "blog/INITIALIZE";
const LIST_GET = "blog/LIST_GET";

//액션 생성자
export const listGet = createAction(LIST_GET, api.getOne);
export const initailize = createAction(INITIALIZE);

// 상태 초기화
const initialState = Map({
  blog : Map({})
});

// 리듀서
export default handleActions({
  [INITIALIZE] : (state, action) => {
  },
  ...pender({
    type: LIST_GET,
    onSuccess:(state,action) => {
      console.log(action.payload.data);
      const { data : blog } = action.payload;
      return blog;
    },
    onError:(state,action) =>{
    }
  })
},initialState)
