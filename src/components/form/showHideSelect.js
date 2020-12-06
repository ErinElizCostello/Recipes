import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import SelectForm from './selectForm'
// import Ingredients from './ingredients'
import AddIcon from '@material-ui/icons/Add';



const ShowHideSelect = (props) => {

  const dispatch = useDispatch()

  const info = props.e.stuff
  
  const theInfo = props.e.stuff
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(theInfo.actions.delete([]))
    // dispatch(theInfo.actions.delete(["Skip"]))
  }

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
        label={info.label}
      />

      { 
      checked ? 
      // dispatch(theInfo.actions.delete([])) &&

      <SelectForm info={info} /> : notChecked()}
      {/* {checked ? automaticDisp() : null} */}
    </div>
  )
}

export default ShowHideSelect