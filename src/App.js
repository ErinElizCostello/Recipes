import React from 'react';
import Form from './components/form/form'
import RecipeContainer from './components/recipeContainer'
// import Recipe from './components/recipe';
// import ActionHelper from './selectHelper'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './main'

function App() {
  return (
    <div>
      {/* <Form />
      <RecipeContainer /> */}
      <Main />
    </div>
  );
}

export default App;
