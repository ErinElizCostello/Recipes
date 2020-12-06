import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ShowHideSlider from './showHideSlider'
// import SelectForm from './selectForm'
// import Ingredients from './ingredients'
// import { theList, deleteItem, clearList } from '../../actions/list'
import { sliderInformation, 
  // sliderInformationVitamins, timeSliderInformation, selectInformation, ingredientsInformation 
} from './formInformation'
import AddIcon from '@material-ui/icons/Add';


const AddNutritionCheck = () => {

  // const dispatch = useDispatch()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // const notChecked = () => {
  //   dispatch(deleteItem([]))
  //   // dispatch(theInfo.actions.delete(["Skip"]))
  // }

  // const automaticDisp = () => {
  //   dispatch(info.actions.add(["Skip"]))
  // }

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

      { 
      checked ? 
      // dispatch(theInfo.actions.delete([])) &&

      sliderInformation.map(e => <ShowHideSlider e={e} />) : null}
      {/* {checked ? automaticDisp() : null} */}
    </div>
  )
}

export default AddNutritionCheck