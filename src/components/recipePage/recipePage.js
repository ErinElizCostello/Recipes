import React from 'react';

import BackButton from '../backButton/backButton'
import Image from './image'
import Title from './title'
import LikeFavoriteRecipe from '../likeFavoriteRecipe/likeFavoriteRecipe'
import SeeRecipeHereButton from './seeRecipeHereButton'
import ShareButtons from './shareButtons'
import IngredientsList from './ingredientsList'
import Summary from './summary'
import NutritionDialogue from './nutritionDialogue'
import InstructionsHeader from './instructionsHeader'
import Instructions from './instructions'

import { useStylesRecipePage } from '../styles/recipePage/recipePage'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const RecipePage = () => {
  const classes = useStylesRecipePage();

  let localId = JSON.parse(localStorage.getItem('id'))
  let localState = JSON.parse(localStorage.getItem('state'))

  // the searchPageOrFavoritesPage function is to know if we are we accessing RecipePage from the main search page or from user favorites page. If accessing from the main search page, the recipe data is stored in the "recipeSearch" reducer. If accessing from the user favorites page, the recipe data is stored in the "userFavorites" reducer
  const searchPageOrFavoritesPage = () =>
    localState.recipeSearch.data.length ?
      localState.recipeSearch.data.filter(recipe => recipe.id === localId)[0]
      :
      localState.userFavorites.data.filter(recipe => recipe.id === localId)[0]

  return (
    <div>
      <BackButton backToWhere={localState.recipeSearch.data.length ? 'home' : 'favorites'} />
      
      {/* <Divider variant="middle" /> */}
      <div className={classes.whiteSpaceBtwnTopDividerAndImage} />

      <div className={classes.general}>
        <Container maxWidth="lg">
          <Grid container>

            {/* Row 1 */}
            <Grid item sm={1} ></Grid>
            <Grid item xs={12} sm={5}>
              <Image recipeInformation={searchPageOrFavoritesPage()} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Title recipeInformation={searchPageOrFavoritesPage()} />
              <div className={classes.likeFavoriteRecipeSpacing}>
                <LikeFavoriteRecipe />
              </div>
              <SeeRecipeHereButton recipeInformation={searchPageOrFavoritesPage()} />
              <ShareButtons recipeInformation={searchPageOrFavoritesPage()} />
            </Grid>
            <Grid item sm={1} ></Grid>

            {/* Row 2 */}
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={3}>
              <IngredientsList recipeInformation={searchPageOrFavoritesPage()} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Summary recipeInformation={searchPageOrFavoritesPage()} />
              <NutritionDialogue recipeInformation={searchPageOrFavoritesPage()} />
            </Grid>
            <Grid item sm={1}></Grid>

          </Grid>

          <Grid container>

            {/* Row 3 */}
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <Divider variant="middle" />
            </Grid>
            <Grid item sm={2}></Grid>

          </Grid>

          <Grid container>

            {/* Row 4 */}
            <Grid item sm={2}></Grid>
            <Grid item xs={12} sm={8}>
              <InstructionsHeader recipeInformation={searchPageOrFavoritesPage()} />
              <Instructions recipeInformation={searchPageOrFavoritesPage()} />
            </Grid>
            <Grid item sm={2}></Grid>

          </Grid>
          
        </Container>

        <Divider className={classes.divider} variant="middle" />

      </div>
    </div >
  )
}

export default RecipePage