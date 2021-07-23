// Select form for readyTime, mealType, dietTypes, cuisines and intolerances

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useStylesSelectForm } from '../../styles/form/advancedSearch/selectForm'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const SelectForm = (props) => {
  const classes = useStylesSelectForm();

  const dispatch = useDispatch()

  const label = props.selectFormInformation.label
  const addAction = props.selectFormInformation.actions.add
  const menuItem = props.selectFormInformation.menuItem
  const reducerName = props.selectFormInformation.reducerName

  const cuisines = useSelector(state => state.cuisines)
  const intolerances = useSelector(state => state.intolerances)

  const [select, setSelect] = useState({})

  const onSelect = (event) => {
    setSelect({ item: event.target.value })
    let isItAlreadySelected = false

    // prevents user from making same selection more than once for cuisines and intolerances
    if (reducerName === 'b') {
      cuisines.forEach(cuisine => cuisine.theItem === event.target.value ? isItAlreadySelected = true : null)
    }

    if (reducerName === 'c') {
      intolerances.forEach(intolerance => intolerance.theItem === event.target.value ? isItAlreadySelected = true : null)
    }

    if (!isItAlreadySelected) {
      dispatch(addAction({
        id: Math.random(),
        theItem: event.target.value
      }))
    }
    
    setSelect({})
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel} id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={select.item}
          onChange={onSelect}
          label={label}
          className={classes.select}
          defaultValue=""
        >
          {menuItem.map(item => <MenuItem key={Math.random()} value={item} >{item}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectForm