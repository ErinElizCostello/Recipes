import React from 'react';

import { useStylesRecipePage } from '../components/styles/recipePage'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const BasicInformation = (props) => {

  const classes = useStylesRecipePage();

  const preparationMinutes = props.recipeInformation.preparationMinutes
  const cookingMinutes = props.recipeInformation.cookingMinutes

  const readyInMinutes = props.recipeInformation.readyInMinutes
  const calories = Math.round(props.recipeInformation.nutrition.nutrients.filter(item => item.name === "Calories")[0].amount)

  const numberOfIngredients = props.recipeInformation.nutrition.ingredients.length


  return (

    <div className={classes.basicInformation}>

      <div>
        <Typography style={{ fontSize: 35, fontWeight: 100 }}>
          {`${readyInMinutes}`}
        </Typography><br></br>
        <Typography>
          {`Minutes`}
        </Typography>
      </div>

      <div style={{ height: 30, borderLeft: '.5px solid grey', margin: 10 }}></div>

      {/* <hr style={{height:30, color: 'grey'}}></hr> */}
      
      <div>
        <Typography style={{ fontSize: 35, fontWeight: 100 }}>
          {`${calories}`}
        </Typography>
        <br></br>
        <Typography>
          {`Calories`}
        </Typography>
      </div>

      <div style={{ height: 30, borderRight: '.5px solid grey', margin: 10 }}></div>
      {/* <div style={{display: 'flex'}}>
      <hr style={{height:30, borderLeft: '.5px solid grey'}}></hr>
      </div> */}
      <div>
        <Typography style={{ fontSize: 35, fontWeight: 100 }}>
          {`${numberOfIngredients}`}
        </Typography>
        <br></br>
        <Typography>
          {`Ingredients`}
        </Typography>
      </div>



      {/* <div style={{ height: 30, borderLeft: '1px solid grey', margin: 20 }}></div>
        <div>
          Cook: <br></br> {`${cookingMinutes} mn`}
        </div>
        <div style={{ height: 30, borderLeft: '1px solid grey', margin: 20 }}></div>
        <div>
          Total: <br></br> {`${readyInMinutes} mn`}
        </div> */}
      {/* </Typography> */}
      {/* </Paper> */}
    </div>
  );
}

export default BasicInformation;