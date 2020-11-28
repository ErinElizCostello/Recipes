import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/autocomplete';

import { genSearch, deleteGenSearchItem, clearGenSearchList } from '../../actions/genSearch'
import { addAutoComplete, fetchACSuccess, fetchACError } from '../../actions/autoComplete'

const API_KEY = 'c976da7e49db48afbbbd3353b50742c7'


const GeneralSearch = () => {

  const dispatch = useDispatch()

  const heresAList = useSelector(state => state.genSearch)
  
  const [value, setValue] = useState({})

  const addToList = (item, thing) => {
    setValue({ item: thing })
    
    dispatch(genSearch({
      id: Math.random(),
      [item]: value.item,
    }));
    value.item = '';
  }

  const onDeleteItem = id => {
    const update = heresAList.filter(e => e.id !== id)
    dispatch(deleteGenSearchItem(update))
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
        onClick={() => dispatch(clearGenSearchList([]))}
      >
        Clear List
    </Button>
    </div>
  )
}

export default GeneralSearch


{/* <TextField
        id="outlined-basic"
        label="Ingredients"
        variant="outlined"
        onChange={e => setValue({ item: e.target.value })}
        value={value.item}
      /> */}