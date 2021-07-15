import React, { useState } from 'react';
import { deleteUserAccount } from '../../APIs/database/deleteUserAccount'
import { useStylesDeleteUserAccountPage } from '../styles/deleteUserAccountPage'

import BackButton from '../backButton/backButton'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Dialog from '../dialogue/dialogue'


const DeleteUserAccount = () => {

  const classes = useStylesDeleteUserAccountPage()

  const [accountDeletedMessage, setAccountDeletedMessage] = useState(false)
  const [showDialogue, setShowDialogue] = useState(false)

  const deleteYourAccount = () => {
    let userId = JSON.parse(localStorage.getItem('User')).payload.id
    deleteUserAccount(userId)
      .then(data => {
        localStorage.removeItem('User')
        setAccountDeletedMessage(true)
        setShowDialogue(true)
      })
  }

  return (
    <div>
      <BackButton backToWhere="home" />
      {showDialogue ? <Dialog dialogueType="accountDeleted" /> : null}
      <Container maxWidth="sm">
        <Grid
          container direction="column" justify="center" alignItems="center">
          <Grid item>
            <div className={classes.general}>
              <Typography className={classes.textHeader} variant='h5'>
                Clicking the button below will permanently delete your account
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.deleteButtonSpacing}>
              <Button
                className={classes.deleteButtonDesign}
                variant="contained"
                color="primary"
                onClick={() => deleteYourAccount()}
              >
                Permanently delete my account
              </Button>
            </div>
          </Grid>

          <Grid item>
            {
              accountDeletedMessage ?
                <Typography className={classes.textAccountHasBeenDeleted} variant='h6'>
                  Your account has been deleted
                </Typography>
                : null
            }
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default DeleteUserAccount


{/* {mustBeLoggedInToDeleteAccount ? <p>Yu must be logged in to delete your account</p> : null} */ }

 // const [mustBeLoggedInToDeleteAccount, setMustBeLoggedInToDeleteAccount] = useState(false)

  // if (!localStorage.getItem('User')) {
    //   setMustBeLoggedInToDeleteAccount(true)
    // } else {