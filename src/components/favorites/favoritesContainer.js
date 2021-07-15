import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { favoritesCodes } from '../../state/actions/favoritesCodes'
import { userFavoritesPending, userFavoritesSuccess } from '../../state/actions/userFavorites'

import { getRecipeCodesForUserFavorites } from '../../APIs/database/getRecipeCodesForUserFavorites'
import { searchBulkRecipes } from '../../APIs/spoonacular/searchBulkRecipes'

import Spinner from '../spinner'
import FavoritesHeader from './favoritesHeader'
import ErrorMessage from '../errorMessage'

import { useStylesFavoritesPage } from '../styles/favoritesPage'

import RecipeCard from '../recipeCard/recipeCard'
import BackButton from '../backButton/backButton'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { formatMs } from '@material-ui/core';



const FavoritesContainer = () => {
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
    // .catch(error => {
    //   setLoading(false)
    //   setError(error.message)
    // dispatch(autoCompleteError(error));
    // })

    // !error &&
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
        // dispatch(autoCompleteError(error));
      })
  }

  useEffect(() => {
    getThoseFavs()
  }, [])

  return (
    <div className={classes.background}>


      <BackButton backToWhere="home" />
      {/* <Divider variant="middle" /> */}
      <FavoritesHeader loading={loading} />
      {error && <ErrorMessage error={error} />}

      {
        favoriteRecipes.status ?
          <Typography className={classes.noSavedRecipes}>
            You don't have any saved recipes
          </Typography>
          : null
      }


      {loading ?
        <div className={classes.spinnerSpacing}>
          <div>
            <Spinner />
          </div>
        </div>
        : null}


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
            // loading ? 
            // <div><Grid item sm={5}></Grid><Grid item xs={12} sm={2}><Spinner /></Grid><Grid item sm={5}></Grid></div>
            //   : 
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

export default FavoritesContainer;



// const noFavsSaved = () =>
//   <Grid item>
//     <Grid item sm={4}></Grid>
//     <Grid item sm={4} xs={12}>
//       <Typography className={classes.noSavedRecipes}>
//         You don't have any saved recipes
//       </Typography>
//     </Grid>
//     <Grid item sm={4}></Grid>
//   </Grid>


//   :
//   favoriteRecipes.status ?
//   <Typography className={classes.noSavedRecipes}>
//   You don't have any saved recipes
// </Typography>
// <div>
//   <Grid item sm={4}></Grid>
//   <Grid item xs={12} sm={4}>
//     <Typography className={classes.noSavedRecipes}>
//       You don't have any saved recipes
//     </Typography>
//   </Grid>
//   <Grid item sm={4}></Grid>
// </div>

{/* <Grid item xs={12}>
            <FavoritesHeader />
          </Grid> */}

{/* <Grid item sm={4}></Grid> */ }

{/* {
            loading ? <Grid item xs={12} sm={4}><Spinner /></Grid>
              :
              favoriteRecipes.status ?

                <Grid item xs={12} sm={4}>
                  <Typography className={classes.noSavedRecipes}>
                    You don't have any saved recipes
                    </Typography>
                </Grid>
                : null
          } */}

{/* <Grid item sm={4}></Grid> */ }



{/* {
        favoriteRecipes.length ?
        favoriteRecipes && favoriteRecipes.map(recipe => <Favorite key={Math.random()} recipe={recipe} />)
          : null
      } */}







// const onSubmit = () => {
// apiCodes.length ?

// return fetch(`https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true&apiKey=${API_KEY}&ids=${list}`)
//   .then(res => res.json())
//   .then(recipe => {
//     if (recipe.error) {
//       throw (recipe.error);
//     }
//     console.log(recipe)
//     // setFavorites(recipe)
//     console.log('got those dang recipes')
//   })
// :
// setFavorites([])

// }
// let load = loading ? <p>LOADING!!!!!</p>


/////

// let list = ''

// console.log(list)
// let newList = list.toString()

// const codes = useSelector(state => state.favorites)

// codes && codes.forEach(e => e !== codes.slice(-1)[0]  ? list += e += ',' : list += e) 

// const datID = () => {
//   if(localStorage.getItem(JSON.stringify('User'))) {
//   return localStorage.getItem(JSON.stringify('User').payload.id)
//   }
//   else{
//   return null
//   }
// }
// const [loggedInOrNot, setLoggedInOrNot] = useState(false)


  // const checkIfUserIsLoggedIn = async () => {
  //   const token = JSON.parse(localStorage.getItem('User')) ? JSON.parse(localStorage.getItem('User')).payload.token : ''

  //   await fetch(`http://localhost:3001/checkUser`, {
  //     headers: {
  //       "Authorization" : `Bearer ${token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(response => {
  //     if (response.error) {
  //       console.log((response.error));
  //       setLoggedInOrNot(false)
  //     }
  //     console.log('response')
  //     console.log(response)
  //     setLoggedInOrNot(true)    
  //   })
  // }

  /////

   //  const  getDaRecipes = () => {
  //     return fetch(`https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true&apiKey=${API_KEY}&ids=${list}`)
  //     .then(res => res.json())
  //     .then(recipe => {
  //       if (recipe.error) {
  //         throw (recipe.error);
  //       }
  //       console.log('got those dang recipes')
  //       console.log(recipe)
  //       setLoading(false)
  //       setFavs(recipe)
  //       console.log('3')
  //       // console.log('favs: ' + favs)
  //     })
  //   }