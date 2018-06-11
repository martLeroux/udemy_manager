import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //NO DON'T DO THAT
      //state.email = action.payload;
      //return state;
      return { ...state, email: action.payload };
      // we need to create a new object, take all the element
      //in my previous state and replace the e-mail one
    default:
      return state;
  }
};
