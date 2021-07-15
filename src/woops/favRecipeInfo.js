// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// // import { recipeReducer } from '../reducers/fetching';
// import Container from '@material-ui/core/Container';

// // import IngredientRP from '../recipePage/ingredientRP'
// // import CaloricBreakdown from '../recipePage/caloricBreakdown'
// import Nutrition from '../components/recipePage/nutrition'
// import Instructions from '../components/recipePage/instructions'
// import Button from '@material-ui/core/Button';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';

// // import { saveFavorite } from '../APIs/API'

// const FavoriteRecipeInformation = () => {

//   let id = useSelector(state => state.recipeID)
   
//   let favId = ''

//   const [heart, setHeart] = useState(false)
//   const [favToggle, setFavToggle] = useState(true)
//   const [remFavs, setRemFavs] = useState(false)

// //   const favsInfo = () => {
// //     if (!id.length) {
// //       favId = id
// //     }
// //   }

// useEffect(() => {
//   console.log('the ID: ' + id)
// }, []);

//   const recipeInfo = useSelector(state => state.favRecipeReducer.data.filter(recipe => recipe.id === id))

//   const recipe = recipeInfo[0]


//   const getFavs = async () => {
    
//     await fetch('http://localhost:3001/favorites')
//       .then(response => response.json())
//       .then(data => {
//         let codes = data.results.map(e => e.recipe_id_api)
//         let inThere = codes.find(e => e === id)
//         inThere ?
//           setRemFavs(true) : setRemFavs(false)
        
//       })
//   }

//   useEffect(() => {
//     getFavs()
//   }, []);

//   const onSubmit = (id) => {
//     const local = JSON.parse(localStorage.getItem('User')).payload.id
//     !remFavs ?

//       fetch('http://localhost:3001/favorites', {
//         method: 'POST',
//         // mode: "no-cors",
//         body: JSON.stringify({
//           // id: 3,
//           user_id: local,
//           recipe_id_api: id
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           // 'Accept': 'application/json',
//           // 'Access-Control-Allow-Origin': '*'
//         }
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log('saved: ' + data)
//           setRemFavs(true)
//         })
//       :

//       fetch(`http://localhost:3001/favorites/${id}`, {
//         mode: "cors",
//         method: 'DELETE',
//         body: JSON.stringify({
//           recipe_id_api: id
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//         .then(response => response.json())
//     setRemFavs(false)

//     // fetch('http://localhost:3001/favorites', {
//     //   method: 'POST',
//     //   // mode: "no-cors",
//     //   body: JSON.stringify({
//     //     // id: 3,
//     //     user_id: Math.random(),
//     //     recipe_id_api: id
//     //   }),
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     // 'Accept': 'application/json',
//     //     // 'Access-Control-Allow-Origin': '*'
//     //   }
//     // })
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     console.log('saved: ' + data)
//     //   })
//   }

  
//   return (
//     <div>
//       <Container maxWidth="sm" >
//         <img src={recipe && recipe.image} alt="recipe image" /><br /><br />

//         {recipe && recipe.title}<br /><br />

//         <Button size="small" color="primary" onClick={() => onSubmit(recipe.id)}>
//           {remFavs ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//           {/* {favToggle ? <FavoriteBorderIcon /> : <FavoriteIcon />} */}
//         </Button>

//         <br /><br />
//         Number of Servings:
//         {recipe && recipe.servings}
//         <br /><br />
//         Preparation Time: {recipe && recipe.preparationMinute} minutes
//         Cooking Time: {recipe && recipe.cookingMinutes} minutes
//         Total Ready Time: {recipe && recipe.readyInMinutes} minutes

//         <br /><br />

//         <td dangerouslySetInnerHTML={{ __html: recipe && recipe.summary }} /><br /><br />

//         <br /><br />
//         Caloric Breakdown:
// <br />
//           Protein: {recipe && recipe.nutrition.caloricBreakdown.percentProtein}%<br />
//           Fat: {recipe && recipe.nutrition.caloricBreakdown.percentFat}%<br />
//           Carbs: {recipe && recipe.nutrition.caloricBreakdown.percentCarbs}%<br />

//         <br /><br />

//         {/* {recipe && recipe.nutrition.nutrients.map(item => <NutrientsRP nutr={item} />)} */}

//         <br /><br />

        

//         <br /><br />

//         <h3>Ingredients:</h3><br />

//         <ul>
//           {recipe && recipe.nutrition.ingredients.map(item =>

//             <li>
//               {item.name} {item.amount * recipe.servings} {item.unit}
//               {/* <IngredientRP ingred={item} /> */}

//             </li>

//           )}
//         </ul>

//         <br /><br />

//         <h3>Instructions:</h3><br />

//         {/* <ul>
//           {recipe && recipe.analyzedInstructions[0].steps.map(step => <li><InstructionRP step={step} /></li>)}
//         </ul> */}

//         {recipe && recipe.sourceUrl}<br /><br />
//       </Container>
//     </div>
//   )

// }

// export default FavoriteRecipeInformation