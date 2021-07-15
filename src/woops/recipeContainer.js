import React from 'react'

import Spinner from '../components/spinner'
import ErrorMessage from '../components/errorMessage'

import { useSelector } from 'react-redux'
import RecipeCard from "../components/recipeCard/recipeCard"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const RecipeContainer = () => {

  const recipes = useSelector(state => state.recipeSearch.data)
  const loading = useSelector(state => state.recipeSearch.pending)
  const emptySearch = useSelector(state => state.recipeSearch.emptySearch)
  const error = useSelector(state => state.recipeSearch.error)

  return (
    <div>
      <div>
        {emptySearch && <h1>Here are some suggestions :D</h1>}
  
      </div>
      
      <div>
        {error && <ErrorMessage error={error} />}
      </div>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          direction="row"
          flexwrap="wrap"
          justifyitems="flex-start"
          alignItems="flex-start"
        >
          {
            loading ? <Spinner /> :
              recipes && recipes.map(e =>
                <Grid key={Math.random()} item xs={12} sm={3}>
                  <RecipeCard key={Math.random()} recipe={e} />
                </Grid>
              )
          }
      
        </Grid>
      </Container>
    </div>
  )
}

export default RecipeContainer