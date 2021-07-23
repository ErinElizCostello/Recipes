import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { autoCompleteIngredients } from '../../../APIs/spoonacular/autoCompleteIngredients'

import { ingredientsList } from '../../../state/actions/ingredientsList'
import { autoCompletePending, autoCompleteSuccess } from '../../../state/actions/autoComplete'

import ErrorMessage from '../../errorMessage'

import { useStylesIngredientsInput } from '../../styles/form/advancedSearch/ingredientsInput'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';


const Ingredients = () => {
  const classes = useStylesIngredientsInput()

  const dispatch = useDispatch()

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

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      <div>
        <Autocomplete
          className={classes.input}
          id="combo-box-demo"
          options={ingredient}
          getOptionLabel={(option) => option}
          style={{ width: 300 }}
          onSelect={e => onChange(e)}
          renderInput={(params) => <TextField {...params} label="Ingredients to use..." variant="outlined" />}
        />
      </div>
      <div className={classes.buttonSpacing}>
        <Button
          className={classes.button}
          onClick={() => addToList(value.item)}
        >
          Add Ingredient
        </Button>
      </div>
    </div>
  )
}

export default Ingredients