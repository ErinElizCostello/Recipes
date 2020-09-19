import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { intolerancesList, deleteIntolerance, clearList } from '../../actions/intolerances'



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



const Intolerances = () => {

  const classes = useStyles();

  const dispatch = useDispatch()

  const theIntolerances = useSelector(state => state.intolerances)

  const [intolerance, setIntolerance] = useState({})

  const intoleranceSelect = (event) => {
    setIntolerance({ item: event.target.value })

    dispatch(intolerancesList({
      id: Math.random(),
      anIntolerance: event.target.value
    }))

    intolerance.item = ''
  }

  const deleteAnIntolerance = id => {
    const update = theIntolerances.filter(e => e.id !== id)
    dispatch(deleteIntolerance(update))
  }

  const onClearList = () => {
    dispatch(clearList([]))
    intolerance.item = ''
  }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Food Intolerances</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled-label"
          value={intolerance.item}
          onChange={intoleranceSelect}
          label="Food Intolerances"
        >
          <MenuItem value="Skip">
            <em>Skip</em>
          </MenuItem>
          <MenuItem value="Dairy">Dairy</MenuItem>
          <MenuItem value="Egg">Egg</MenuItem>
          <MenuItem value="Gluten">Gluten</MenuItem>
          <MenuItem value="Grain">Grain</MenuItem>
          <MenuItem value="Peanut">Peanut</MenuItem>
          <MenuItem value="Seafood">Seafood</MenuItem>
          <MenuItem value="Sesame">Sesame</MenuItem>
          <MenuItem value="Shellfish">Shellfish</MenuItem>
          <MenuItem value="Soy">Soy</MenuItem>
          <MenuItem value="Sulfite">Sulfite</MenuItem>
          <MenuItem value="TreeNut">Tree Nut</MenuItem>
          <MenuItem value="Wheat">Wheat</MenuItem>
        </Select>
        <div>
          {theIntolerances.map(e => e.anIntolerance === "Skip" ? null :
            <div key={e.id}>
              <Chip
                label={
                  e.anIntolerance === "TreeNut" ? e.anIntolerance = "Tree Nut" : e.anIntolerance}
                onDelete={() => deleteAnIntolerance(e.id)}
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

export default Intolerances