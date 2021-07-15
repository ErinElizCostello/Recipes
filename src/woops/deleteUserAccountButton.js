import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const DeleteUserAccountButton = () => {
  return (
    <div>
      <Link to="/deleteYourAccount">
      <Button
          variant="contained"
          color="primary"    
        >
          I want to delete my account
        </Button>
        </Link>
    </div>
  )
}

export default DeleteUserAccountButton