# User APP

Simple app to register informations about users, with validation!

![Alt text](/user_app.png?raw=true "Title")

## How to run the app

With yarn:

```bash
yarn install
yarn start
```

With npm:

```bash
npm install
npm start
```

## Solution

- I've used React as UI library and Redux as a state container, the store has
```javascript
{
  users: {
    list: Array(users)
  }

}
```
- Yup for schema validation

- and to make the logic centralize I've made UserService.js that has below functions with testing

```javascript
userService.getList()
userService.addUser()
userService.deleteUserById()
```

- I've used comments for JSDOC
- faker for data mock
and to make mock users I've made userHelper that has
```javascript
getUsersMock(numberOfUsers)
```


## Requirement and features
- [x] Show list of users
- [x] Add user
- [x] Delete user
- [x] 1 API test
- [x] 1 React test
- [x] README!
- [x] Build mechanism: using default of react-scripts
- [x] ES6

## How to run test

With yarn:

```bash
yarn test
```

With npm:

```bash
npm test
```

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
