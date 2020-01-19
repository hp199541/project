
export default {

  namespace: 'tablelist',

  state: {
    columns:[],
    data:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    getTablelist(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
