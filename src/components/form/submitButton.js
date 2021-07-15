import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { formatFormInformation } from '../../state/actions/formatFormInformation';

import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const SubmitButton = () => {

  const dispatch = useDispatch()
  const theState = useSelector(state => state)
  

  const onSubmit = () => {
    dispatch(formatFormInformation(theState))
  }

  return (
    <div>
      <Link to={'/searchResults'}>
      <Button onClick={() => onSubmit()}>
        <SearchIcon style={{ height: 50, width: 50 }} />
      </Button>
      </Link>
    </div>
  )
}

export default SubmitButton