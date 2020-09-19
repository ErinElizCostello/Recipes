import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

import { theList, deleteItem, clearList } from '../../actions/list'



const Ingredients = () => {

  const dispatch = useDispatch()

  const heresAList = useSelector(state => state.theList)

  const [value, setValue] = useState({})

  const addToList = (item, thing) => {

    if (heresAList === "Skip") {
      dispatch(clearList([]))
    }

    dispatch(theList({
      id: Math.random(),
      [item]: thing,
    }))
    value.item = '';
  }

  const onDeleteItem = id => {
    const update = heresAList.filter(e => e.id !== id)
    dispatch(deleteItem(update))
  }

  return (
    <div>
      <div>
        {Array.isArray(heresAList) ? heresAList.map(e =>
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
      
      <TextField
        id="outlined-basic"
        label="Ingredients"
        variant="outlined"
        onChange={e => setValue({ item: e.target.value })}
        value={value.item}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToList("item", value.item)}
      >
        Add to List
      </Button>
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