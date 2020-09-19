import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { cuisineList, deleteCuisine, clearList } from '../../actions/cuisines'



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



const Cuisine = () => {

  const classes = useStyles();

  const dispatch = useDispatch()

  const theCuisine = useSelector(state => state.cuisines)

  const [cuisine, setCuisine] = useState({})

  const cuisineSelect = (event) => {
    setCuisine({item: event.target.value})

    dispatch(cuisineList({
      id: Math.random(),
      aCuisine: event.target.value
    }))

    cuisine.item = ''
  }

  const deleteTheCuisine = id => {
    const update = theCuisine.filter(e => e.id !== id)
    dispatch(deleteCuisine(update))
  }

  const onClearList = () => {
    dispatch(clearList([]))
    cuisine.item = ''
  }


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Type of Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={cuisine.item}
          onChange={cuisineSelect}
          label="Type of Cuisine"
        >
          <MenuItem value="Skip">
            <em>Skip</em>
          </MenuItem>
          <MenuItem value="African">African</MenuItem>
          <MenuItem value="American">American</MenuItem>
          <MenuItem value="British">British</MenuItem>
          <MenuItem value="Cajun">Cajun</MenuItem>
          <MenuItem value="Caribbean">Caribbean</MenuItem>
          <MenuItem value="Chinese">Chinese</MenuItem>
          <MenuItem value="EasternEuropean">Eastern European</MenuItem>
          <MenuItem value="European">European</MenuItem>
          <MenuItem value="French">French</MenuItem>
          <MenuItem value="German">German</MenuItem>
          <MenuItem value="Greek">Greek</MenuItem>
          <MenuItem value="Indian">Indian</MenuItem>
          <MenuItem value="Irish">Irish</MenuItem>
          <MenuItem value="Italian">Italian</MenuItem>
          <MenuItem value="Japanese">Japanese</MenuItem>
          <MenuItem value="Jewish">Jewish</MenuItem>
          <MenuItem value="Korean">Korean</MenuItem>
          <MenuItem value="LatinAmerican">Latin American</MenuItem>
          <MenuItem value="Mediterranean">Mediterranean</MenuItem>
          <MenuItem value="Mexican">Mexican</MenuItem>
          <MenuItem value="MiddleEastern">Middle Eastern</MenuItem>
          <MenuItem value="Nordic">Nordic</MenuItem>
          <MenuItem value="Southern">Southern</MenuItem>
          <MenuItem value="Spanish">Spanish</MenuItem>
          <MenuItem value="Thai">Thai</MenuItem>
          <MenuItem value="Vietnamese">Vietnamese</MenuItem>

        </Select>
      <div>
        {theCuisine.map(e => e.aCuisine === "Skip" ? null :   
          <div key={e.id}>
            <Chip
              label={
                e.aCuisine === "EasternEuropean" ? e.diet = "Eastern European" : e.aCuisine &&
                e.aCuisine === "LatinAmerican" ? e.diet = "Latin American" : e.aCuisine &&
                e.aCuisine === "MiddleEastern" ? e.diet = "Middle Eastern" : e.aCuisine               
              }
              onDelete={() => deleteTheCuisine(e.id)}
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

export default Cuisine