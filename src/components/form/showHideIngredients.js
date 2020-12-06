import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import SelectForm from './selectForm'
import Ingredients from './ingredients'
import { deleteItem, 
  // theList,  clearList 
} from '../../actions/list'
import AddIcon from '@material-ui/icons/Add';


const ShowHideIngredients = (props) => {

  const dispatch = useDispatch()

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const notChecked = () => {
    dispatch(deleteItem([]))
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
        label="Ingredients to use"
      />

      { 
      checked ? 
      // dispatch(theInfo.actions.delete([])) &&

      <Ingredients /> : notChecked()}
      {/* {checked ? automaticDisp() : null} */}
    </div>
  )
}

export default ShowHideIngredients