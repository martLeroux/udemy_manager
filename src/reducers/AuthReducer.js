import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default(state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      //NO DON'T DO THAT
      //state.email = action.payload;
      //return state;
      return { ...state, email: action.payload };
      // we need to create a new object, take all the element
      //in my previous state and replace the e-mail one
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
      //takes the current state, replace all the value with the initial one, and then change the user alue
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: 'Authentication Failed.' };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
