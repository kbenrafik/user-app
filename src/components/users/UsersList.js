import React from 'react'
import { connect } from 'react-redux';
import UserIem from './UserItem';

const UsersList = ({
  users
}) => {
  return (
    <div>
      <h3>List of users</h3>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">Zipcode</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserIem user={user} key={user.id} />)}
        </tbody>
      </table>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.list
  }
};

export default connect(mapStateToProps)(UsersList);
