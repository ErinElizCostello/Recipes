import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import BackButton from '../backButton/backButton'
import Spinner from '../spinner';
import NoResults from './noResults';
import ErrorMessage from '../errorMessage'

import RecipeCard from "../recipeCard/recipeCard"

import { useStylesSearchResults } from '../styles/searchResults/searchresults'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const SearchResults = () => {
  const classes = useStylesSearchResults()

  const recipes = useSelector(state => state.recipeSearch.data)
  const loading = useSelector(state => state.recipeSearch.pending)
  const emptySearch = useSelector(state => state.recipeSearch.emptySearch)
  const error = useSelector(state => state.recipeSearch)
  const showSearches = useSelector(state => state.recipeSearch.data)
  const noResults = useSelector(state => state.recipeSearch.noResults)


  const obj = error && Object.assign(error).error 

  obj &&
console.log(obj)


  // const errorMessage = Object.assign(error)

  // const err = (error) => errorMessage.push(error)

  // console.log(errorMessage)  

  // useEffect(() => {
  //   errorMessage ? setError(errorMessage) : setError(null)
  // }, []);

  return (
    <div >
      <BackButton backToWhere="home" />
      {
        noResults ? <NoResults />
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
              <div>
               {
                 
               }
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
                  {obj === ' Recipes could not be fetched' && <ErrorMessage error={obj} />  }
                </Grid>
              </Container>
              {/* <RecipeContainer /> */}
            </div >
            :
            <div style={{ display: 'flex', direction: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 200 }}>
              <Spinner />
            </div >
      }
    </div>
  );
}

export default SearchResults;