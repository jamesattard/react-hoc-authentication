import {
  CHANGE_AUTH
} from '../actions/types';

export default function(state = false, action) { // by default not logged in
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
  }

  return state;
}