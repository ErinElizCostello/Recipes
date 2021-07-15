// the show-hide + button for ingredients, maximum ready time, the nutrition sliders and vitamin sliders

import React, { useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';
import AdvancedSearch from './advancedSearch';


const ShowHideButton = (props) => {

  const formType = props.formType

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            icon={<AddIcon />}
            checkedIcon={<AddIcon />}
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="secondary"
          />
        }
        label="Advanced Search"
      />
      {
        checked && formType === "advancedSearch" ?
          <AdvancedSearch /> : null
      }
    </div>
  )
}

export default ShowHideButton


// const ingredientsNotChecked = () => {
//   dispatch(deleteIngredient([]))
// }

// formType === "advancedSearch" ?
//             "Advanced Search"
//             : formType === 'ingredients' ?
//               "Ingredients to use"
//               : null
//         }
// :
// formType === 'maximumReadyTime' ?
//   'Add a maximum ready time'
//   :
//   formType === 'nutrition' ?
//     "Add Nutrition Requirements"
//     :
//     "Add Vitamin Requirements"

{/* {
        checked && formType === 'maximumReadyTime' ?
          <MaximumReadyTime /> : maximumReadyTimeNotChecked()
      }
      {
        checked && formType === 'nutrition' ?
          sliderInformationNutrition.map(nutritionSlider => <ShowHideSlider sliderInformation={nutritionSlider} />)
          :
          null
      }
      {
        checked && formType === 'vitamins' ?
          sliderInformationVitamins.map(vitaminSlider => <ShowHideSlider sliderInformation={vitaminSlider} />)
          :
          null
      } */}

      // {
      //   checked && formType === 'ingredients' ?
      //     <Ingredients /> : ingredientsNotChecked()
      // }