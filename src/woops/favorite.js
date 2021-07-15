// import React, {useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux'

// import GridListTile from '@material-ui/core/GridListTile';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { Link } from 'react-router-dom';
// import RecipePage from '../recipePage/recipePage'
// import { recipeID } from '../../state/actions/recipeID'
// import FavoriteRecipeInformation from './favRecipeInfo'


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });



// const Favorite = (props) => {

//   const classes = useStyles();
//   const dispatch = useDispatch()

//   let summary = props.recipe.summary
//   // let id = props.recipe.id
//   // let theId = id

//   const [favToggle, setFavToggle] = useState(false)
  
//   // const onSubmit = () => {
//   //   console.log('submitting!')
//   // }

//   const goToInfo = (anId) => {
    
//     dispatch(recipeID(anId))
//   }

//   const unFav = (id) => {
//     // let id = props.recipe.id
//     const local = JSON.parse(localStorage.getItem('User')).payload.id
    
    
//     favToggle ?
    

//     fetch('http://localhost:3001/favorites', {
//       method: 'POST',
//       // mode: "no-cors",
//       body: JSON.stringify({
//         // id: 3,
//          user_id: local,
         
//         recipe_id_api: id
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         // 'Accept': 'application/json',
//         // 'Access-Control-Allow-Origin': '*'
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('saved: ' + data)
//         setFavToggle(false)
//       })
// :

//     fetch(`http://localhost:3001/favorites/${id}`, {
//       mode: "cors",
//       method: 'DELETE',
//       body: JSON.stringify({
//         recipe_id_api: id
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     })
//       .then(response => response.json())     
//       setFavToggle(true)
//   }



// return (
//   <div>
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.recipe.image}
//           title={props.recipe.title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.recipe.title}
            
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Ready Time: {props.recipe.readyInMinutes}mn <br /><br />
//                 Summary here
//                 <td dangerouslySetInnerHTML={

//               { __html: summary.slice(0, 150) + '...' }} />
//             {/* {summary.slice(0, 150) + '...'} */}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button onClick={() => unFav(props.recipe.id)} size="small" color="primary">
//           {!favToggle ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//         </Button>
//         <Link 
//         to="/favoriteRecipeInformation"
//         >
//           <Button size="small" color="primary" 
//           onClick={() => goToInfo(props.recipe.id)}
//           >
//             See More
//         </Button>
//         </Link>
//       </CardActions>
//     </Card>
//   </div>
// );
// }

// export default Favorite;