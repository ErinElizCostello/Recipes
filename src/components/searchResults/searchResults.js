import React from 'react';
import { useSelector } from 'react-redux'

import BackButton from '../backButton'
import Spinner from '../spinner';
import NoResults from './noResults';
import ErrorMessage from '../errorMessage'
import RecipeCard from "../recipeCard/recipeCard"

import { useStylesSearchResults } from '../styles/searchResults/searchresults'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const SearchResults = () => {
  const classes = useStylesSearchResults()

  const recipeSearchInfo = useSelector(state => state.recipeSearch)
  const recipes = useSelector(state => state.recipeSearch.data)
  const emptySearch = useSelector(state => state.recipeSearch.emptySearch)
  const showSearches = useSelector(state => state.recipeSearch.data)
  const noResults = useSelector(state => state.recipeSearch.noResults)

  const errorMessage = recipeSearchInfo && Object.assign(recipeSearchInfo).error

  return (
    <div >
      <BackButton backToWhere="home" />
      {
        noResults ? <NoResults />
          :
          errorMessage ? <ErrorMessage error={errorMessage} />
            :
            showSearches && showSearches.length ?
              <div>
                <div className={classes.spacingAtTheTop}></div >
                {
                  emptySearch ?
                    <Typography className={classes.hereAreSomeSuggestions}>
                      Here are some suggestions...
                    </Typography>
                    :
                    null
                }

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
                      recipes && recipes.map(e =>
                        <Grid key={Math.random()} item xs={12} sm={3}>
                          <RecipeCard key={Math.random()} recipe={e} />
                        </Grid>
                      )
                    }
                  </Grid>
                </Container>
              </div >
              :
              <div className={classes.spinnerSpacing}>
                <Spinner />
              </div >
      }
    </div>
  );
}

export default SearchResults;