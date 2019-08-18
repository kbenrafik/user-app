import UserService from "./UserService";

const userMock = {
  id: 1,
  name: 'Tom Bla',
  gender: 'male',
  email: 'test@tom.com',
  phone: '+31 6 11 12 23 90',
  address: [
    {
      number: 7,
      street: 'johannes',
      city: 'Amsterdam',
      zipcode: '1234 AB'
    }
  ]
};

const userService = new UserService([
  userMock
]);

describe('UserService', () => {
  it("getList()", () => {
    expect(userService.getList()).toStrictEqual([
      userMock
    ]);
  });

  it("addUser()", () => {
    const userMock2 = {
      ...userMock,
      id: 2
    }
    userService.addUser(userMock2)
    expect(userService.getList()).toStrictEqual([
      userMock,
      userMock2
    ]);
  });

  it("deleteUser()", () => {
    userService.deleteUserById(2)
    expect(userService.getList()).toStrictEqual([
      userMock
    ]);
  });

});
