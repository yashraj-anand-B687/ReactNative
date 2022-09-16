//add
//complete
//delete
//edit

import {Add, Complete, deletee, editt} from './actionType';

export const add = text => ({
  type: Add,
  payload: text,
});

export const complete = key => ({
  type: Complete,
  payload: key,
});

export const Deletee = key => ({
  type: deletee,
  payload: key,
});

export const Editt = val => ({
  type: editt,
  payload: val,
});
