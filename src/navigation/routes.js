import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../components/homePage/homepage'
import SearchResults from '../components/searchResults/searchResults';
import SignUp from '../components/loginAndLogoutAndSignUp/signUp';
import RecipePage from '../components/recipePage/recipePage'
import LoginPage from '../components/loginAndLogoutAndSignUp/loginPage'
import FavoritesPage from '../components/favorites/favoritesPage'
import DeleteUserAccount from '../components/deleteUserAccount';
import AdminPage from '../components/adminPage'
import SecuredRouteToFavorites from './securedRouteToFavorites'


const Routes = () => {
  return (
    <div >
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/recipePage/:id'>
          <RecipePage />
        </Route>
        <Route path='/signUp'>
          <SignUp />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/deleteYourAccount'>
          <DeleteUserAccount />
        </Route>
        <Route path='/searchResults'>
          <SearchResults />
        </Route>
        <Route exact path='/admin'>
          <AdminPage />
        </Route>
        <SecuredRouteToFavorites path={`/favorites/:id`} component={FavoritesPage} />
      </Switch>
    </div>
  );
}

export default Routes;