import React from 'react';


const CaloricBreakdown = (props) => {

  const percentProtein = props.recipeInformation.nutrition.caloricBreakdown.percentProtein
  const percentFat = props.recipeInformation.nutrition.caloricBreakdown.percentFat
  const percentCarbs = props.recipeInformation.nutrition.caloricBreakdown.percentCarbs

  return (
    <div>
      <p>Caloric Breakdown</p>
      Protein: {percentProtein}%<br />
      Fat: {percentFat}%<br />
      Carbs: {percentCarbs}%<br />
    </div>
  )
}

export default CaloricBreakdown