import { ADD_USER, DELETE_USER } from "./actionTypes";

/**
 * Add user to store
 * @param {object} user
 */
export const addUser = user => ({
  type: ADD_USER,
  payload: {
    user
  }
});

/**
 * Delete user from store
 * @param {number} id
 */
export const deleteUser = id => ({
  type: DELETE_USER,
  payload: { id }
});
