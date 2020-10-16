import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/autocomplete';

import { theList, deleteItem, clearList } from '../../actions/list'
import { addAutoComplete, fetchACSuccess, fetchACError } from '../../actions/autoComplete'

const API_KEY = 'c976da7e49db48afbbbd3353b50742c7'


const Ingredients = () => {

  const dispatch = useDispatch()

  const heresAList = useSelector(state => state.theList)

  let autoC = useSelector(state => state.ACReducer.data)
  
  let ingred = autoC.map(e => e.name)
  
  const [value, setValue] = useState({})

  const onChange = e => {
    setValue({ item: e.target.value })
    
    return fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=${API_KEY}&query=${e.target.value}&number=10`)
      .then(res => res.json())
      .then(recipe => {
        if (recipe.error) {
          throw (recipe.error);
        }
        dispatch(fetchACSuccess(recipe))       
      }).catch(error => {
        console.log(error)
        dispatch(fetchACError(error));
      })
  }

  const addToList = (item, thing) => {
    setValue({ item: thing })
    console.log("value: " + value.item)
    console.log("thing:" + thing)
    dispatch(theList({
      id: Math.random(),
      [item]: value.item,
    }));
    value.item = '';
  }

  const onDeleteItem = id => {
    const update = heresAList.filter(e => e.id !== id)
    dispatch(deleteItem(update))
  }

  return (
    <div>
      <div>
        {Array.isArray(heresAList) && heresAList.length !== 0 ? heresAList.map(e =>
          <div key={e.id}>
            <Chip
              label={e.item}
              onDelete={() => onDeleteItem(e.id)}
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
        onClick={() => addToList("item", value.item)}
      >
        Add to List
      </Button>
      <Autocomplete
        id="combo-box-demo"
        options={ingred}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        onSelect={e => onChange(e)}
        renderInput={(params) => <TextField {...params} label="Ingredients" variant="outlined"  />}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(clearList([]))}
      >
        Clear List
    </Button>
    </div>
  )
}

export default Ingredients


{/* <TextField
        id="outlined-basic"
        label="Ingredients"
        variant="outlined"
        onChange={e => setValue({ item: e.target.value })}
        value={value.item}
      /> */}