import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const SecuredRouteToAdminPage = (props) => {
  return (
    <div>
      <Route
        render={() =>
          localStorage.getItem('User') && JSON.parse(localStorage.getItem('User')).payload.user === ADMIN_NAME
            ?
            (<AdminPage />)
            :
            (<Redirect to={{ pathname: '/home' }}></Redirect>)}
      >
      </Route>
    </div>
  );
}

export default SecuredRouteToFavorites;