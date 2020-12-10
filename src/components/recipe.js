import React from 'react';
import { useDispatch, useSelector } from 'react-redux'


import GridListTile from '@material-ui/core/GridListTile';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { Link } from 'react-router-dom';

import RecipeInformation from './recipeInfo'

import {recipeID} from '../actions/recipeID'




const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Recipe = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles();

  let summary = props.recipe.summary
  let id = props.recipe.id

  
  const onSubmit = () => {
    dispatch(recipeID(id))
  }
  return (
    
      <div>    
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.recipe.image}
              title={props.recipe.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.recipe.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Ready Time: {props.recipe.readyInMinutes}mn <br /><br />
                <td dangerouslySetInnerHTML={{__html: summary.slice(0, 150) + '...'}} />
                {/* {summary.slice(0, 150) + '...'} */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <FavoriteBorderIcon />
            </Button>
            <Link to="/recipeInformation">
            <Button size="small" color="primary" onClick={() => onSubmit()}>
              See More
        </Button>
        </Link>
          </CardActions>
        </Card>
      </div>
  )
}

export default Recipe

// return (
//   <GridListTile >
//           <div style={{ width: '170px', display: 'flex', flexDirection: 'row' }}>
//             <div >
//               <img src={props.recipe.image} style={{ height: '200px', width: '600px' }} alt={"recipe"} />
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', lineHeight: '80%' }}>
//               <p>{props.recipe.title}</p><br /><br />
//             </div>
//           </div>
//         </GridListTile>
//      )

{/* <div >
        <img src={props.recipe.image} alt={"recipe"} />
      </div>
      <div>
        <p>{props.recipe.title}</p><br /><br />
        <p>Ready Time: {props.recipe.readyInMinutes}mn</p><br /><br />
        <p>{summary.slice(0, 200) + '...'}</p><br /><br />
      </div> */}