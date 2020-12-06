import React from 'react';
import ShowHideSlider from './showHideSlider'
import ShowHideSelect from './showHideSelect'
import ShowHideIngredients from './showHideIngredients'
import ShowHideGenSearch from './showHideGenSearch'
// import TimeSlider from './timeSlider'
import { timeSliderInformation, selectInformation,
  // sliderInformation, sliderInformationVitamins,  ingredientsInformation 
} from './formInformation'
import AddNutritionCheck from './addNutritionCheck'
import AddVitaminCheck from './addVitaminCheck'
import Submit from './submit'
import TimeSlider from './timeSlider';
import GeneralSearch from './generalSearch'



const ShowHideContainer = () => {


  return (
    <div>
      {/* <ShowHideGenSearch /> */}
      <GeneralSearch />
      <ShowHideIngredients />
      
      {timeSliderInformation.map(e => <ShowHideSlider key={Math.random()} e={e} />)}
      {selectInformation.map(e => <ShowHideSelect key={Math.random()} e={e} />)}
      <AddNutritionCheck />
      <AddVitaminCheck />
      <Submit />
      {/* {sliderInformation.map(e => <ShowHideSlider e={e} />)} */}
      {/* {sliderInformationVitamins.map(e => <ShowHideSlider e={e} />)} */}
    </div>
  )
}

export default ShowHideContainer