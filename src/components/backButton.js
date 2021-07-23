import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { recipeSearchNoResults } from '../state/actions/recipeSearch'

import { useStylesBackButton } from './styles/backButton'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';


const BackButton = (props) => {
  const classes = useStylesBackButton()

  const dispatch = useDispatch()

  const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.user : undefined

  // turnOffNoResults makes sure that if the user does a search that returns no results (and the 'no results' message will appear on the searchResults page), you can return to the home page, do a new search, and the 'no results' message on the searchResults page will not appear again with the new successful search.
  const turnOffNoResults = () => dispatch(recipeSearchNoResults(false))

  return (
    <div>
      <Button
        className={classes.button}
        onClick={() => turnOffNoResults()}
      >
        <Link
          to={props.backToWhere === "home" ? "/" : props.backToWhere === "searchResults" ? "/searchResults" : `/favorites/${user}`}
        >
          <KeyboardBackspaceIcon className={classes.icon} />
        </Link>
      </Button>
    </div>
  );
}

export default BackButton;