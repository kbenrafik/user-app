
import { ADD_USER, DELETE_USER } from "../actions/actionTypes";
import UsersAPI from '../../API/user/UserService';
import { getUsersMock } from '../../API/user/userHelper';

const userService = new UsersAPI(getUsersMock(5));

const initialState = {
  list: userService.getList()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { user } = action.payload;
      userService.addUser(user);
      return {
        ...state,
        list: userService.getList().slice(),
      };
    }
    case DELETE_USER: {
      const { id } = action.payload;

      userService.deleteUserById(id);
      return {
        ...state,
        list: userService.getList().slice(),
      };
    }
    default:
      return state;
  }
}
