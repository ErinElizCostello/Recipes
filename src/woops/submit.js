import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { formatFormInformation } from '../state/actions/formatFormInformation';

import Button from '@material-ui/core/Button';


const Submit = () => {

  const dispatch = useDispatch()
  const theState = useSelector(state => state)

  const onSubmit = () => {
    dispatch(formatFormInformation(theState))
  }

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onSubmit()}
      >
        Find recipes!
      </Button>
    </div>
  )
}

export default Submit