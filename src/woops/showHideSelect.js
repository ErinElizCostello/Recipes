//the show-hide + button for the select components: meal type, diet type, cuisines and intolerances

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import SelectForm from '../components/form/selectForm'
import ChipsOptions from '../components/form/chipsOptions';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddIcon from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import { selectInformation } from '../components/form/formLabels/select';
// import NutritionDrawerButton from '../advancedSearch/nutritionDrawerButton';


const ShowHideSelect = (props) => {

  const dispatch = useDispatch()

  const selectFormInformation = props.selectFormInformation.stuff

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(selectFormInformation.actions.delete([]))
  }

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
        label={selectFormInformation.label}
      />

    
      {checked ? <SelectForm selectFormInformation={selectFormInformation} /> : notChecked()}
      
    </div>
  )
}

export default ShowHideSelect