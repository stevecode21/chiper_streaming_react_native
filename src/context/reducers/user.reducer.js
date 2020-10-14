import {TYPES} from '../../constants/types';

export default function (state, action) {
  switch (action.type) {
    case TYPES.SET_CURRENT_USER:
      console.log('Este es el action.payload', action.payload);
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
