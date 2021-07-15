import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import FormAndRecipeContainer from '../../components/formAndResultsContainer'
import SignUp from '../../components/login-signUp/signUp';
import RecipeInformation from '../../components/recipeInfo'
import LogIn from '../../components/login-signUp/login'
import FavoritesContainer from '../../components/favorites/favoritesContainer'
import FavoriteRecipeInformation from '../../components/favorites/favRecipeInfo';
import { authenticate } from 'passport';
import SecuredRoute from '../securedRoute'
import DeleteUserAccount from '../../components/login-signUp/deleteUserAccount';

const auth = {
  isLoggedIn: false,
  loggingIn() {
    this.isLoggedIn = true
  },
  logInStatus() {
    return this.isLoggedIn
  }
}

const Routes = () => {
  return (
    <div >
      <Switch>
      <Route exact path='/'>
        <FormAndRecipeContainer />
      </Route>
      <Route path='/recipeInformation'>
        <RecipeInformation />
      </Route>
      <Route path='/signUp'>
        <SignUp />
      </Route>
      <Route path='/logIn'>
        <LogIn />
      </Route>
      <Route path='/deleteYourAccount'>
        <DeleteUserAccount />
      </Route>
      <Route path='/favoriteRecipeInformation'>
        <FavoriteRecipeInformation />
      </Route>
      <SecuredRoute path='/favorites' component={FavoritesContainer} /> 
      </Switch>
    </div>
  );
}

export default Routes;

