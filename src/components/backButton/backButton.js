import React from 'react';
import { Link } from 'react-router-dom';

import { useStylesBackButton } from '../styles/backButton'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { recipeSearchNoResults } from '../../state/actions/recipeSearch'


const BackButton = (props) => {
  const classes = useStylesBackButton()

  const dispatch = useDispatch()

  const user = localStorage.getItem('User') ? JSON.parse(localStorage.getItem('User')).payload.user : undefined

  const turnOffNoResults = () => dispatch(recipeSearchNoResults(false))

  return (
    <div>
      <Button className={classes.button} onClick={() => turnOffNoResults()}>
        <Link to={props.backToWhere === "home" ? "/" : `/favorites/${user}`
        // props.backToWhere === "favorites" ? `/favorites/${user}` : '/searchResults'
        } >
          <KeyboardBackspaceIcon className={classes.icon} />
        </Link>
      </Button>
    </div>
  );
}

export default BackButton;