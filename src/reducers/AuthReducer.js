import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '' 
};

export default(state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};
