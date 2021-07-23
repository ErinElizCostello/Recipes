import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { generalSearch } from '../../state/actions/generalSearch'

import SubmitButton from './submitButton'

import { useStylesGeneralSearch } from '../styles/form/generalSearchInput'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


const GeneralSearch = () => {
  const classes = useStylesGeneralSearch()

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
    dispatch(generalSearch({
      id: Math.random(),
      item: e.target.value,
    }));
  }

  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        className={classes.input}
        label=""
        variant="outlined"
        onChange={e => onChange(e)}
        value={value}
        placeholder="Search your favorite recipes"
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position='start'>
              <SubmitButton />
            </InputAdornment>
          )
        }}
      />
    </div>
  )
}

export default GeneralSearch