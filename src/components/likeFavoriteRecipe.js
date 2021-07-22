import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import { favoritesPOST, favoritesDELETE } from '../APIs/database/favorites'
import { getRecipeCodesForUserFavorites } from '../APIs/database/getRecipeCodesForUserFavorites'

import Dialog from './dialogue'

import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


const LikeFavoriteRecipe = (props) => {

  const [heartButton, setHeartButton] = useState(false)
  const [dialogue, setDialogue] = useState(false);

  let recipeIDForAPI = ''
  let recipeIDForAPIFromState = useSelector(state => state)

  const likingFromSearchPageOrInformationPage = () => {
    props.recipeInfo ?
      recipeIDForAPI = props.recipeInfo.recipe.id
      :
      recipeIDForAPI = recipeIDForAPIFromState.recipeID
  }

  const mustBeLoggedInToLikeRecipe = () => {
    localStorage.getItem('User') ? likeRecipe(recipeIDForAPI) : setDialogue(true)
  }

  const likeRecipe = () => {
    likingFromSearchPageOrInformationPage()

    const local = JSON.parse(localStorage.getItem('User')).payload.id

    if (!heartButton) {
      favoritesPOST(local, recipeIDForAPI).then(data => setHeartButton(true))
    } else {
      favoritesDELETE(recipeIDForAPI)
      setHeartButton(false)
    }
  }

  const rememberFavoritesWhenSearchingRecipes = () => {
    const userId = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.id : ''

    likingFromSearchPageOrInformationPage()
    
    getRecipeCodesForUserFavorites(userId)
      .then(data => {
        let isThisRecipeAlreadySaved = data.results.map(recipe => recipe.recipe_id_api).find(recipe_id_api => recipe_id_api === recipeIDForAPI)

        if (isThisRecipeAlreadySaved && localStorage.getItem('User')) {
          setHeartButton(true)
        } else {
          setHeartButton(false)
        }
      })
  }

  useEffect(() => {
    rememberFavoritesWhenSearchingRecipes()
  }, []);

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={() => mustBeLoggedInToLikeRecipe()}
      >
        {
          heartButton ? <FavoriteIcon /> : <FavoriteBorderIcon />
        }
      </Button>

      {
        dialogue && <Dialog dialogueType="loginToLike" />
      }

    </div>
  );

}

export default LikeFavoriteRecipe;