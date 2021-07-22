import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useStylesDialogue } from './styles/dialogue'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';


const Dialogue = (props) => {
  const classes = useStylesDialogue()

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.dialogueType === 'loggedOut' &&
      JSON.parse(localStorage.getItem('loggedOutDialogue')) &&
      JSON.parse(localStorage.getItem('loggedOutDialogue')).isIt) {
      handleClickOpen()
    } else {
      localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: false }))
    }

    if (props.dialogueType === 'accountDeleted') {
      handleClickOpen()
    }

    if (props.dialogueType === 'loginToLike') {
      handleClickOpen()
    }
  }, []);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {

    setOpen(false);

    if (props.dialogueType === 'loggedOut') {
      localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: false }))
    }
  };

  return (
    <div>
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle
          id="simple-dialog-title"
          className={classes.text}
        >
          {
            props.dialogueType === 'loggedOut' ?
              <Typography>
                You have been successfully logged out
              </Typography>
              : props.dialogueType === 'accountDeleted' ?
                <Typography>
                  Your account has been successfully deleted
                  <br />
                  back to <Link to='/'>home</Link>
                </Typography>
                : props.dialogueType === 'loginToLike' ?
                  <Typography>
                    <Link to='/login' className={classes.logInLink}>Login</Link> or <Link to='/signUp' className={classes.signUpLink}>Sign up</Link> to save your favorite recipes!
                  </Typography>
                  : null
          }
        </DialogTitle>
      </Dialog>
    </div>
  );
}

export default Dialogue;