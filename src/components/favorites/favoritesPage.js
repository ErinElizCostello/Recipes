import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getRecipeCodesForUserFavorites } from '../../APIs/database/getRecipeCodesForUserFavorites'
import { searchBulkRecipes } from '../../APIs/spoonacular/searchBulkRecipes'

import { favoritesCodes } from '../../state/actions/favoritesCodes'
import { userFavoritesSuccess } from '../../state/actions/userFavorites'

import Spinner from '../spinner'
import FavoritesHeader from './favoritesHeader'
import ErrorMessage from '../errorMessage'

import { useStylesFavoritesPage } from '../styles/favoritesPage/favoritesPage'
import RecipeCard from '../recipeCard/recipeCard'
import BackButton from '../backButton'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const FavoritesPage = () => {
  const classes = useStylesFavoritesPage()

  const dispatch = useDispatch()

  const favoriteRecipes = useSelector(state => state.userFavorites.data)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const getThoseFavs = async () => {

    const userID = JSON.parse(localStorage.getItem('User')).payload.id

    let listOfRecipeCodes = ''

    await getRecipeCodesForUserFavorites(userID)
      .then(data => {
        let codes = data.results.length ? data.results.map(recipe => recipe.recipe_id_api) : []
        dispatch(favoritesCodes(codes))
        codes.forEach(code => code !== codes.slice(-1) ? listOfRecipeCodes += code += ',' : listOfRecipeCodes += code)
      })

    ///COME BACK TO THIS vvv

    //  listOfRecipeCodes.length ?
    await searchBulkRecipes(listOfRecipeCodes)
      .then(response => {
        if (!response.ok) {
          throw new Error(' Your favorite recipes could not be retrieved')
        }
        return response.json()
      })
      .then(recipe => {
        setError(null)
        setLoading(false)
        dispatch(userFavoritesSuccess(recipe))
      }).catch(error => {
        setLoading(false)
        setError(error.message)
      })
    // : setLoading(false)
  }

  useEffect(() => {
    getThoseFavs()
  }, [])

  return (
    <div className={classes.background}>

      <BackButton backToWhere="home" />

      <FavoritesHeader loading={loading} />
      {error && <ErrorMessage error={error} />}

      {/* {
        !favoriteRecipes.length ?
          <Typography className={classes.noSavedRecipes}>
            You don't have any saved recipes
          </Typography>
          : null
      } */}

      {/* remember to add className={classes.noSavedRecipes} to no save recipes message*/}
      {
        loading ?
          <div className={classes.spinnerSpacing}>
            <div>
              <Spinner />
            </div>
          </div>
          :
          !favoriteRecipes.length && !error ?
            <Typography className={classes.noSavedRecipes}>
              You don't have any saved recipes
            </Typography>
            : null
      }

      <div className={classes.spacingBelowHeader} />

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
            favoriteRecipes.length ?
              favoriteRecipes && favoriteRecipes.map(recipe =>
                <Grid key={Math.random()} item xs={12} sm={3} >
                  <RecipeCard recipe={recipe} />
                </Grid>
              ) : null
          }
        </Grid>
      </Container>
    </div >
  );
}

export default FavoritesPage;