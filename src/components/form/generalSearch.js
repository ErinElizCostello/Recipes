import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/autocomplete';

import { genSearch, deleteGenSearchItem, clearGenSearchList } from '../../actions/genSearch'
// import { addAutoComplete, fetchACSuccess, fetchACError } from '../../actions/autoComplete'

// const API_KEY = 'c976da7e49db48afbbbd3353b50742c7'


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
    // const update = heresAList.filter(e => e.id !== id)
   const update = []
    dispatch(deleteGenSearchItem(update))
  }

  return (
    <div>
      <div>
        {
          heresAList.length !== 0 ?
          <div key={heresAList.id}>
          <Chip
            label={heresAList.item}
            onDelete={() => onDeleteItem(heresAList.id)}
            color="primary"
          />
        </div>
      : null  
      }
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToList("item", value.item)}
      >
        Add
      </Button>
      <TextField
        id="outlined-basic"
        label="Search Anything"
        variant="outlined"
        onChange={e => setValue({ item: e.target.value })}
        value={value.item}
      />
      {/* <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(clearGenSearchList([]))}
      >
        Clear List
    </Button> */}
    </div>
  )
}

export default GeneralSearch

// {
  // Array.isArray(heresAList) && heresAList.length !== 0 ? 
  // heresAList.map(e =>


  // )
  //   : null
  // }