import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import FavoritesPage from '../components/favorites/favoritesPage'


const SecuredRouteToFavorites = () => {
  return (
    <div>
      <Route
        render={() =>
          localStorage.getItem('User')
            ?
            (<FavoritesPage />)
            :
            (<Redirect to={{ pathname: '/login' }}></Redirect>)}
      >
      </Route>
    </div>
  );
}

export default SecuredRouteToFavorites;