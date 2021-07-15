// Select form for mealType, dietTypes, cuisines and intolerances

import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { useStylesSelectForm } from '../../styles/homePage/selectForm'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const SelectForm = (props) => {

  const classes = useStylesSelectForm();
  const dispatch = useDispatch()

  const label = props.selectFormInformation.label
  const addAction = props.selectFormInformation.actions.add
  // const deleteAction = props.selectFormInformation.actions.delete
  // const clearAction = props.selectFormInformation.actions.clear
  const menuItem = props.selectFormInformation.menuItem
  const reducerName = props.selectFormInformation.reducerName

  const dietTypes = useSelector(state => state.dietTypes)
  const cuisines = useSelector(state => state.cuisines)
  const intolerances = useSelector(state => state.intolerances)
  const mealType = useSelector(state => state.mealType)
  const maximumReadyTime = useSelector(state => state.maximumReadyTime)

  const reducerTypes = { a: dietTypes, b: cuisines, c: intolerances, d: mealType, e: maximumReadyTime }

  //This identitfies the correct reducer needed for the select form
  const whichReducerIsIt = reducerTypes[Object.keys(reducerTypes).filter(reducer => reducer === reducerName)]

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
        >
          {menuItem.map(item => <MenuItem key={Math.random()} value={item} >{item}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectForm


// const onDelete = id => {
  //   let deletedItem = ''
  //   Array.isArray(whichReducerIsIt) ?
  //     deletedItem = whichReducerIsIt.filter(item => item.id !== id)
  //     :
  //     deletedItem = whichReducerIsIt.id
  //   dispatch(deleteAction(deletedItem))
  // }

  // const onClearList = () => {
  //   dispatch(clearAction([]))
  // }

   {/* <div> */}
          {/* {
            reducerName === 'a' && dietTypes.id !== undefined ?
              <Chip
                label={dietTypes.theItem}
                onDelete={() => onDelete(dietTypes.id)}
                color="primary"
              />
              :
              null
          }
          {
            reducerName === 'd' && mealType.id !== undefined ?
              <Chip
                label={mealType.theItem}
                onDelete={() => onDelete(mealType.id)}
                color="primary"
              />
              :
              null
          } */}
        {/* </div>
        <div> */}
          {/* {
            reducerName !== 'a' && reducerName !== 'd'
              ?
              whichReducerIsIt.map(item =>
                <div key={item.id}>
                  <Chip
                    label={
                      item.theItem === "GlutenFree" ? item.theItem = "Gluten Free" : item.theItem}
                    onDelete={() => onDelete(item.id)}
                    color="primary"
                  />
                </div>
              )
              : null
          }
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClearList()}
        >
          Clear List
      </Button> */}