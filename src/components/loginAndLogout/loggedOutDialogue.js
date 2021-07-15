import React, { useState, useEffect } from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


const LoggedOutDialogue = () => {
  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    JSON.parse(localStorage.getItem('loggedOutDialogue')) &&
      JSON.parse(localStorage.getItem('loggedOutDialogue')).isIt ?
      handleClickOpen()
      :
      localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: false }))
  }, []);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('loggedOutDialogue', JSON.stringify({ isIt: false }))
  };

  return (
    <div>
      <Dialog aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">
          You have been successfully logged out
        </DialogTitle>
      </Dialog>
    </div>
  );
}

export default LoggedOutDialogue;