// import { Button } from '@material-ui/core';
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import Favorite from './favorite';
// import { FavsFetch } from './favsFetch'

// const API_KEY = 'c976da7e49db48afbbbd3353b50742c7'

// const FavortiesMap = (props) => {

  
//   const [favs, setFavs] = useState([])
//   const [loading, setLoading] = React.useState(false);

  

  // const onSubmit = () => {
  //   return fetch(`https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true&apiKey=${API_KEY}&ids=${newList}`)
  //     .then(res => res.json())
  //     .then(recipe => {
  //       if (recipe.error) {
  //         throw (recipe.error);
  //       }
  //       console.log('got those dang recipes')
  //       console.log(recipe)
  //       setFavs(recipe)
  //       console.log(favs)
  //     })
    
  // }
  
    
  // const codes = useSelector(state => state.favorites)
  // let list = ''
  // codes.forEach(e => e !== codes.slice(-1)[0] ? list += e += ',' : list += e)
  
  // console.log('outside list: ' + list)
  // // let theList = props.list

  // useEffect(() => {

  //   console.log('inside list: '+ list)
  //   setLoading(true)


  //    fetch(`https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true&apiKey=${API_KEY}&ids=${list}`)
  //     .then(res => res.json())
  //     .then(recipe => {
  //       if (recipe.error) {
  //         throw (recipe.error);
  //       }
  //       console.log('got those dang recipes')
  //       console.log(recipe)
  //       setLoading(false)
  //       setFavs(recipe)
  //       console.log('favs: ' + favs)
  //     })
    
  // }, [])

  // let test = `https://api.spoonacular.com/recipes/informationBulk?includeNutrition=true&apiKey=${API_KEY}&ids=${newList}`

  // console.log('test: ' + test)



  // return (
  //   <div>
{/* <Button onClick={() => onSubmit()}>favs!</Button> */}
      // {favs && favs.map(recipe => <Favorite recipe={recipe} />)}
//     </div>
//   );
// }

// export default FavortiesMap;