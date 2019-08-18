import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { deleteUser } from '../../redux/actions/actions';

export const UserItem = ({
  user,
  deleteUser,
}) => {
  if(!user) {
    return null;
  }

  const address = user.address[0];

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.gender}</td>
      <td>{address.street}</td>
      <td>{address.city}</td>
      <td>{address.zipcode}</td>
      <td>{address.number}</td>
      <td>
        <Button
          variant="secondary"
          onClick={() => deleteUser(user.id)}>Delete</Button>
      </td>
    </tr>
  )
}


export default connect(
  null,
  { deleteUser }
)(UserItem);
