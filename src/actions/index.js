import {
  CHANGE_AUTH
} from './types';

export function authenticte(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}