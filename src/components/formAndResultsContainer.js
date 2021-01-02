import React from 'react';
import Form from './form/form'
import RecipeContainer from './recipeContainer'
import SignUpButton from './login-signUp/signUpButton'
import LogInButton from './login-signUp/logInButton'


const FormAndResultsContainer = () => {
  return (
    <div>
      <LogInButton />
      <SignUpButton />
      <Form />
      <RecipeContainer />
    </div>
  )
}

export default FormAndResultsContainer