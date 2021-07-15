import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import { favoritesGET, favoritesPOST, favoritesDELETE } from '../../APIs/database/favorites'
import { getRecipeCodesForUserFavorites } from '../../APIs/database/getRecipeCodesForUserFavorites'

import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Dialog from '../dialogue/dialogue'


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

  const likeRecipe = async () => {
    await likingFromSearchPageOrInformationPage()
    const local = JSON.parse(localStorage.getItem('User')).payload.id
    if (!heartButton) {
      await favoritesPOST(local, recipeIDForAPI).then(data => setHeartButton(true))
    } else {
      await favoritesDELETE(recipeIDForAPI)
      setHeartButton(false)
    }
  }

  const rememberFavoritesWhenSearchingRecipes = async () => {
    const userId = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.id : ''
    await likingFromSearchPageOrInformationPage()
    await getRecipeCodesForUserFavorites(userId)
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



// import PopoverLoginToLike from './popoverLoginToLike';
// const [popover, setPopover] = useState(null);
// : popoverHandleClick()
// const popoverHandleClick = () => {
//   setPopover(true);
// };

// const popoverHandleClose = () => {
//   setPopover(null);
// };

{/* <PopoverLoginToLike openOrClosePopover={[popover, popoverHandleClose]} /> */ }