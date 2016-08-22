// NOTE: This will need to be hooked up to 'store/reducers' and 'store/sagas'

// import { call, take, put, select } from 'redux-saga/effects';
// ------------------------------------
// Constants
// ------------------------------------
export const CREATE_DEMO_SUCCESS = 'demos/CREATE_DEMO_SUCCESS';
export const LOGIN_SUCCESS = 'demos/LOGIN_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------
export const createDemoSuccess = (value) => ({
  type: CREATE_DEMO_SUCCESS,
  payload: value,
});

export const loginSuccess = (value) => ({
  type: LOGIN_SUCCESS,
  payload: value,
});

export const actions = {
  createDemoSuccess,
  loginSuccess,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CREATE_DEMO_SUCCESS]: (state, action) => ({
    ...state,
    name: action.payload.name,
    guid: action.payload.guid,
    id: action.payload.id,
    roles: [{
      username: action.payload.users[0].username,
      type: action.payload.users[0].roles[0].name,
    }],
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    token: action.payload.token,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
};
export const demosReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
export default demosReducer;

// ------------------------------------
// Sagas
// ------------------------------------
export const demoSelector = state => state.demoSession;

export const sagas = [
];
