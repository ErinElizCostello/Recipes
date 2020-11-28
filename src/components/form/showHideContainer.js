import React from 'react';
import ShowHideSlider from './showHideSlider'
import ShowHideSelect from './showHideSelect'
import ShowHideIngredients from './showHideIngredients'
import ShowHideGenSearch from './showHideGenSearch'
import TimeSlider from './timeSlider'
import { sliderInformation, sliderInformationVitamins, timeSliderInformation, selectInformation, ingredientsInformation } from './formInformation'
import AddNutritionCheck from './addNutritionCheck'
import AddVitaminCheck from './addVitaminCheck'
import Submit from './submit'


const ShowHideContainer = () => {


  return (
    <div>
      <ShowHideGenSearch />
      <ShowHideIngredients />
      {timeSliderInformation.map(e => <ShowHideSlider e={e} />)}
      {selectInformation.map(e => <ShowHideSelect e={e} />)}
      <AddNutritionCheck />
      <AddVitaminCheck />
      <Submit />
      {/* {sliderInformation.map(e => <ShowHideSlider e={e} />)} */}
      {/* {sliderInformationVitamins.map(e => <ShowHideSlider e={e} />)} */}
    </div>
  )
}

export default ShowHideContainer