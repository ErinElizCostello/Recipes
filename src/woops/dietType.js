import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { theDietType, deleteDiet, clearList } from '../../actions/dietType'



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



const DietType = () => {

  const classes = useStyles();

  const dispatch = useDispatch()

  const theDiets = useSelector(state => state.theDietType)

  const [dietType, setDietType] = useState({})

  const dietTypeSelect = (event) => {
    setDietType({item: event.target.value})

    dispatch(theDietType({
      id: Math.random(),
      diet: event.target.value
    }))

    dietType.item = ''
  }

  const deleteDietType = id => {
    const update = theDiets.filter(e => e.id !== id)
    dispatch(deleteDiet(update))
  }

  const onClearList = () => {
    dispatch(clearList([]))
    dietType.item = ''
  }


  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Diet Type</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={dietType.item}
          onChange={dietTypeSelect}
          label="Diet Type"
        >
          <MenuItem value="Skip">
            <em>Skip</em>
          </MenuItem>
          <MenuItem value="GlutenFree">Gluten Free</MenuItem>
          <MenuItem value="Ketogenic">Ketogenic</MenuItem>
          <MenuItem value="Vegetarian">Vegetarian</MenuItem>
          <MenuItem value="Lacto-Vegetarian">Lacto-Vegetarian</MenuItem>
          <MenuItem value="Ovo-Vegetarian">Ovo-Vegetarian</MenuItem>
          <MenuItem value="Vegan">Vegan</MenuItem>
          <MenuItem value="Pescetarian">Pescetarian</MenuItem>
          <MenuItem value="Paleo">Paleo</MenuItem>
          <MenuItem value="Primal">Primal</MenuItem>
          <MenuItem value="Whole30">Whole30</MenuItem>
        </Select>
      <div>
        {theDiets.map(e => e.diet === "Skip" ? null :
          <div key={e.id}>
            <Chip
              label={
                e.diet === "GlutenFree" ? e.diet = "Gluten Free" : e.diet}
              onDelete={() => deleteDietType(e.id)}
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

export default DietType