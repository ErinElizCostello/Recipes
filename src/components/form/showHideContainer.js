import React from 'react';
import ShowHideSlider from './showHideSlider'
import ShowHideSelect from './showHideSelect'
import ShowHideIngredients from './showHideIngredients'
import TimeSlider from './timeSlider'
import { sliderInformation, sliderInformationVitamins, timeSliderInformation, selectInformation, ingredientsInformation } from './formInformation'
import AddNutritionCheck from './addNutritionCheck'
import AddVitaminCheck from './addVitaminCheck'
const ShowHideContainer = () => {


  return (
    <div>
      <ShowHideIngredients />
      {timeSliderInformation.map(e => <ShowHideSlider e={e} />)}
      {selectInformation.map(e => <ShowHideSelect e={e} />)}
      <AddNutritionCheck />
      <AddVitaminCheck />
      {/* {sliderInformation.map(e => <ShowHideSlider e={e} />)} */}
      {/* {sliderInformationVitamins.map(e => <ShowHideSlider e={e} />)} */}
    </div>
  )
}

export default ShowHideContainer