import React from 'react';

const NutrientsRP = (props) => {

  let nutrient = `${props.nutr.title} ${props.nutr.amount}${props.nutr.unit} (${props.nutr.percentOfDailyNeeds}% of your daily needs)`
  return(
    <div>
      {nutrient} <br />
    </div>
  )
}

export default NutrientsRP