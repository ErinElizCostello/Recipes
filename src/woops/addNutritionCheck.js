import React, { useState } from 'react';

import { sliderInformationNutrition } from '../components/form/formLabels/nutritionSliders'
import ShowHideSlider from '../components/form/showHideSlider'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';


const AddNutritionCheck = () => {

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
        label="Add Nutrition Requirements"
      />
      {checked ? sliderInformationNutrition.map(e => <ShowHideSlider e={e} />) : null}
    </div>
  )
}

export default AddNutritionCheck