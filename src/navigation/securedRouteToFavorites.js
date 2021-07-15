import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import FavoritesContainer from '../components/favorites/favoritesContainer'


const SecuredRouteToFavorites = () => { 
  return (
    <div>
      <Route 
        render={() =>
          localStorage.getItem('User') 
          ?
          (<FavoritesContainer />)
          :
          (<Redirect to={{pathname: '/login'}}></Redirect>)}
          >
        </Route>
    </div>
  );
}

export default SecuredRouteToFavorites;