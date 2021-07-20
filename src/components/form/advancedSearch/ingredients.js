import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { ingredientsList, deleteIngredient, clearIngredientsList } from '../../../state/actions/ingredientsList'
import { autoCompletePending, autoCompleteSuccess, autoCompleteError } from '../../../state/actions/autoComplete'
import { autoCompleteIngredients } from '../../../APIs/spoonacular/autoCompleteIngredients'
import { setChips, deleteChip, clearChips } from '../../../state/actions/chips'
import { useStylesIngredientsInput } from '../../styles/homePage/ingredientsInput'

import ErrorMessage from '../../errorMessage'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/autocomplete';


const Ingredients = () => {
  const classes = useStylesIngredientsInput()

  const dispatch = useDispatch()

  const listOfIngredients = useSelector(state => state.ingredientsList)
  let autoCompleteData = useSelector(state => state.AutoCompleteIngredients.data)

  let ingredient = autoCompleteData.map(theIngredient => theIngredient.name)

  const [value, setValue] = useState({})
  const [error, setError] = useState(null)

  const onChange = e => {
    setValue({ theItem: e.target.value })
    dispatch(autoCompletePending())
    return autoCompleteIngredients(e.target.value)
      .then(res => {
        if (!res.ok) {
          throw new Error(' Ingredients could not be fetched')
        }
        return res.json()
      })
      .then(recipe => {
        setError(null)
        dispatch(autoCompleteSuccess(recipe))

      }).catch(error => {
        setError(error.message)
        // dispatch(autoCompleteError(error));
      })
  }

  const addToList = (ingredient) => {
    setValue({ theItem: ingredient })
    if (value.theItem) {
      dispatch(ingredientsList({
        id: Math.random(),
        theItem: value.theItem,
      }));
      value.theItem = '';
    }
  }

  const onDeleteItem = id => {
    const deletedIngredient = listOfIngredients.filter(theIngredient => theIngredient.id !== id)
    dispatch(deleteIngredient(deletedIngredient))
  }

  //  const saveChips = () => {
  //   dispatch(setChips(listOfIngredients))
  //  }

  return (
    <div 
    // className={classes.display}
    >
      {error && <ErrorMessage error={error} />}
      {/* <div style={{}}> */}
      {/* {Array.isArray(listOfIngredients) && listOfIngredients.length !== 0 ?
          // saveChips()
          listOfIngredients.map(theIngredient =>
            <div key={theIngredient.id}>
              <Chip
                label={theIngredient.theItem}
                onDelete={() => onDeleteItem(theIngredient.id)}
                color="primary"
              />
            </div>
          )
          : null
        } */}
      {/* </div> */}
      <div>
        <Autocomplete
          className={classes.input}
          id="combo-box-demo"
          options={ingredient}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onSelect={e => onChange(e)}
          // PaperComponent={paperComponent}
          renderInput={(params) => <TextField {...params} label="Ingredients to use..." variant="outlined" />}
        />
      </div>
      <div
        className={classes.buttonSpacing}
      >

        <Button
          className={classes.button}
          // variant="contained"
          // color="primary"
          onClick={() => addToList(value.item)}
        >
          Add Ingredient
        </Button>
      </div>
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(clearIngredientsList([]))}
      >
        Clear List
    </Button> */}
    </div>
  )
}

export default Ingredients