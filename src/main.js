import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormAndRecipeContainer from './components/formAndResultsContainer'
import SignUp from './components/login-signUp/signUp';
import RecipeInformation from './components/recipeInfo'
import LogIn from './components/login-signUp/login'

const Main = () => {
  return (

    <div >

      <Route exact path='/'
      // component={FormAndRecipeContainer}
      >
        <FormAndRecipeContainer />
      </Route>
      <Route path='/recipeInformation'
      // component={RecipeInformation}
      >
        <RecipeInformation />
      </Route>
      <Route path='/signUp'
      // component={SignUp}
      >
        <SignUp />
      </Route>
      <Route path='/logIn'
      // component={LogIn}
      >
        <LogIn />
      </Route>

    </div>
  );
}

export default Main;