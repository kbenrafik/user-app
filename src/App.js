import React from 'react';
import { UsersList, UserAdd } from './components/users'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <h1 className="mt-4 mb-4">Users App</h1>
      <div className="row mt-4 mb-4">
        <div className="col-md-12">
          <UsersList />
        </div>
      </div>

      <div className="row mt-4 mb-4">
        <div className="col-md-12">
          <UserAdd />
        </div>
      </div>
    </div>
  );
}

export default App;

// eslint OK from create reacr
// build test OK from create react app
// add user OK array address
// delete user OK
// showing list users OK
// validation user data OK

// what to test
// README TODO
// prettier TODO
