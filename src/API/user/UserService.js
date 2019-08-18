import { userSchema } from './userHelper';

export default class UserService {
  constructor(users) {
    this.list = []
    if(Array.isArray(users)) {
      users.forEach(user => this.addUser(user));
    }
  }

  /**
   * shared idUnique for UsersService to keep tracking ids for new users
   */
  static idUnique = 1

  /**
   * Get list of users
   * @requires {array} users
   */
  getList() {
    return this.list
  }

  /**
   * Add user
   * @param {object} user
   */
  addUser(user) {
    if(userSchema.isValidSync(user)) {
      this.list.push({
        id: UserService.idUnique,
        ...user
      })
      UserService.idUnique++
    } else {
      console.error('user is invalid')
    }
  }

  /**
   * Delete user by id
   * @param {number} id - user id
   */
  deleteUserById(id) {
    this.list = this.list.filter(user => user.id !== id)
  }
}
