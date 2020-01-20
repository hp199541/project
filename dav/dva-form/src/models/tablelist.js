import * as api from './../services/example'
export default {

  namespace: 'tablelist',

  state: {
    data:[]
  },
  reducers: {
    Tablelist(state, action) {
      return { ...state, ...action.data };
    },
    remove(state,action) {
      // console.log(state,action.data)
      // action.payload.splice(0,1)
      // console.log(state,action.data)
      return { ...state, ...action.data };
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *removeTablelist({ payload }, { call, put }) {  // eslint-disable-line
      // console.log(payload)
      yield put({ type: 'remove',
      payload });
      
    },
    *getTablelist({ payload }, { call, put }) {  // eslint-disable-line
      const result =   yield call(api.getTablelist,payload)
      const data = result.data
        yield put({ type: 'Tablelist',
        data });
    },
  },
};
