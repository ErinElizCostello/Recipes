import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { aMealType, deleteMealType, clearList } from '../../actions/mealType'



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



const MealType = () => {

  const classes = useStyles();

  const dispatch = useDispatch()

  const theMealType = useSelector(state => state.mealType)

  const [mealType, setMealType] = useState({})

  const mealTypeSelect = (event) => {
    setMealType({ item: event.target.value })

    dispatch(aMealType({
      id: Math.random(),
      mealType: event.target.value
    }))

    mealType.item = ''
  }

  const deleteAMealType = id => {
    const update = theMealType.filter(e => e.id !== id)
    dispatch(deleteMealType(update))
  }

  const onClearList = () => {
    dispatch(clearList([]))
    mealType.item = ''
  }


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Type of Meal</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={mealType.item}
          onChange={mealTypeSelect}
          label="Type of Meal"
        >
          <MenuItem value="Skip">
            <em>Skip</em>
          </MenuItem>
          <MenuItem value="maincourse">main course</MenuItem>
          <MenuItem value="sidedish">side dish</MenuItem>
          <MenuItem value="dessert">dessert</MenuItem>
          <MenuItem value="appetizer">appetizer</MenuItem>
          <MenuItem value="salad">salad</MenuItem>
          <MenuItem value="bread">bread</MenuItem>
          <MenuItem value="breakfast">breakfast</MenuItem>
          <MenuItem value="soup">soup</MenuItem>
          <MenuItem value="beverage">beverage</MenuItem>
          <MenuItem value="sauce">sauce</MenuItem>
          <MenuItem value="marinade">marinade</MenuItem>
          <MenuItem value="fingerfood">finger food</MenuItem>
          <MenuItem value="snack">snack</MenuItem>
          <MenuItem value="drink">drink</MenuItem>
        </Select>
        <div>
          {theMealType.map(e => e.mealType === "Skip" ? null :
            <div key={e.id}>
              <Chip
                label={
                  e.mealType === "maincourse" ? e.mealType = "main course" : e.mealType && e.mealType === "sidedish" ? e.mealType = "side dish" : e.mealType && e.mealType === "fingerfood" ? e.mealType = "finger food" : e.mealType
                }
                onDelete={() => deleteAMealType(e.id)}
                color="primary"
              />
            </div>
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

export default MealType