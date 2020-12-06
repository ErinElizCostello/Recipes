import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import SelectForm from './selectForm'
import GeneralSearch from './generalSearch'
import { deleteItem,
  // theList,  clearList 
} from '../../actions/list'


const ShowHideGenSearch = (props) => {

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
            checked={checked}
            onChange={handleChange}
            name="checked"
            color="secondary"
          />
        }
        label="Search for Anything"
      />

      { 
      checked ? 
      // dispatch(theInfo.actions.delete([])) &&

      <GeneralSearch /> : notChecked()}
      {/* {checked ? automaticDisp() : null} */}
    </div>
  )
}

export default ShowHideGenSearch