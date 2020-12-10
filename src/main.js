import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FormAndRecipeContainer from './components/formAndResultsContainer'
import RecipeInformation from './components/recipeInfo'

const Main = () => {
  return (
    
    <div >
       
      <Route path='/search' component={FormAndRecipeContainer}></Route>
      <Route path='/recipeInformation' component={RecipeInformation}></Route>
   
    </div>
  );
}

export default Main;