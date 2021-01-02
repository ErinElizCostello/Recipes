import React from 'react';

const IngredientRP = (props) => {

  let ingredient = `${props.ingred.name} ${props.ingred.amount} ${props.ingred.unit}`
  return(
    <div>
      {ingredient}
    </div>
  )
}

export default IngredientRP