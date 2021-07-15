import React, { useState } from 'react';

import { sliderInformationVitamins } from '../components/form/formLabels/vitaminsSliders'
import ShowHideSlider from '../components/form/showHideSlider'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';


const AddVitaminCheck = () => {

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
        label="Add Vitamin Requirements"
      />
      {checked ? sliderInformationVitamins.map(e => <ShowHideSlider e={e} />) : null}
    </div>
  )
}

export default AddVitaminCheck