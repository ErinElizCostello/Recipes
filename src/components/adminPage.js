import React, { useEffect, useState } from 'react';

import { adminInformation } from '../APIs/database/adminInformation'
import { deleteUserAccount } from '../APIs/database/deleteUserAccount';

import BackButton from './backButton'

import { useStylesAdmin } from './styles/admin'


const AdminPage = () => {
  const classes = useStylesAdmin()

  const [users, setUsers] = useState([])

  useEffect(() => {
    adminInformation()
      .then(usersList => {
        setUsers(usersList.results)
      })
  }, []);

  const deleteUser = (id) => {
    deleteUserAccount(id)
    window.location.reload()
  }

  return (
    <div>
      <BackButton backToWhere="home" />
      <ul className={classes.listStyle}>
        {
          users.map(user =>
            <li>
              <div className={classes.user}>
                <button
                  onClick={() => deleteUser(user.id)}
                  className={classes.deleteButton}>
                  X
                </button>
                id: {user.id}
                username: {user.username}
                <br />
                <div className={classes.divider} /> </div>
            </li>)
        }
      </ul>
    </div>
  );
}

export default AdminPage;