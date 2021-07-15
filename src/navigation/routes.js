import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../components/homePage/homepage'
import SignUp from '../components/signUp/signUp';
import RecipePage from '../components/recipePage/recipePage'
import LoginPage from '../components/loginAndLogout/loginPage'
import FavoritesContainer from '../components/favorites/favoritesContainer'
import DeleteUserAccount from '../components/deleteUserAccount/deleteUserAccount';
import AdminPage from '../components/admin/adminPage'

import SecuredRouteToFavorites from './securedRouteToFavorites'
import SearchResults from '../components/searchResults/searchResults';


const Routes = () => {
  return (
    <div >
      <Switch>
        <Route exact path='/'>
          <HomePage />
          {/* <FormAndRecipeContainer /> */}
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
        <SecuredRouteToFavorites path={`/favorites/:id`} component={FavoritesContainer} />
      </Switch>
    </div>
  );
}

export default Routes;