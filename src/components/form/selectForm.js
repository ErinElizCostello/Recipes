import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const SelectForm = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch()

  const theDietTypes = useSelector(state => state.theDietTypes)
  const cuisines = useSelector(state => state.cuisines)
  const intolerances = useSelector(state => state.intolerances)
  const mealType = useSelector(state => state.mealType)

  const leReducers = { a: theDietTypes, b: cuisines, c: intolerances, d: mealType }

  const addAction = props.info.actions.add
  const deleteAction = props.info.actions.delete
  const clearAction = props.info.actions.clear
  const menuItem = props.info.menuItem
  const reducerName = props.info.reducerName
  const datReducer = leReducers[Object.keys(leReducers).filter(e => e === reducerName)]
  
  const [select, setSelect] = useState({})

  // console.log(menuItem)

  const onSelect = (event) => {
    setSelect({ item: event.target.value })

    dispatch(addAction({
      id: Math.random(),
      theItem: event.target.value
    }))

    select.item = ''
  }

  const onDelete = id => {
    const update = datReducer.filter(e => e.id !== id)
    dispatch(deleteAction(update))
  }

  const onClearList = () => {
    dispatch(clearAction([]))
    select.item = ''
  }


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Diet Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={select.item}
          onChange={onSelect}
          label="Diet Type"
        >
          {menuItem.map(e => <MenuItem value={e} >{e}</MenuItem>)}
        </Select>
        <div>
          {datReducer.map(e => e.theItem !== "Skip" ?
            <div key={e.id}>
              <Chip
                label={
                  e.theItem === "GlutenFree" ? e.theItem = "Gluten Free" : e.theItem}
                onDelete={() => onDelete(e.id)}
                color="primary"
              />
            </div>
            : null
          )}
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onClearList()}
        >
          Clear List
      </Button>
      </FormControl>
    </div>
  )
}

export default SelectForm

// const theList = datReducer.filter(i => i !== 'Skip' && i == reducerName).map(e => e.theItem === "Skip" ? null :
  // <div key={e.id}>
  //   <Chip
  //     label={
  //       e.theItem === "GlutenFree" ? e.theItem = "Gluten Free" : e.theItem}
  //     onDelete={() => onDelete(e.id)}
  //     color="primary"
  //   />
  // </div>
  // )
  // theReducers.filter(e => reducerName === e)
  // console.log(theList)

  // const theLetter = letter.filter(e => e === reducerName)
  // const datReducer = leReducers[letter]