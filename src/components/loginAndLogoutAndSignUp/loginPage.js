import React, { useState } from 'react';
import { Redirect } from 'react-router';

import { login } from '../../APIs/database/login'

import BackButton from '../backButton'
import WrongUsernameOrPasswordMessage from './wrongUsernameOrPasswordMessage'
import DontOrAreadyHaveAnAccountLink from './dontOrAlreadyHaveAnAccountLink'

import clsx from 'clsx';

import { useStylesLoginPage } from '../styles/loginAndLogoutAndSignUp/loginPage'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import Button from '@material-ui/core/Button';


const LoginPage = () => {
  const classes = useStylesLoginPage()

  const [formValues, setFormValues] = useState({ username: '', password: '' })
  const [wrongUserNameOrPassword, setWrongUserNameOrPassword] = useState(false)
  const [redirectToHomePage, setRedirectToHomePage] = useState(false)

  const handleChangeForm = prop => event => setFormValues({ ...formValues, [prop]: event.target.value })

  const handleClickShowPassword = () => setFormValues({ ...formValues, showPassword: !formValues.showPassword })

  const handleMouseDownPassword = event => event.preventDefault()

  const logInUser = (username, password) => {
    login(username, password)
      .then(data => {
        if (data.success === false) {
          setWrongUserNameOrPassword(true)
        } else {
          localStorage.setItem('User', JSON.stringify(data));
          setRedirectToHomePage(true)
        }
      })
  }

  return (
    <div >
      {redirectToHomePage ? <Redirect to={{ pathname: '/' }}></Redirect> : null}

      <BackButton backToWhere="home" />

      <div className={classes.general}>
        <Container maxWidth="sm">
          <Grid
            container direction="column"
            justifyContent="center"
            alignItems="center">

            <Grid item>
              <WrongUsernameOrPasswordMessage show={wrongUserNameOrPassword} />
            </Grid>

            <Grid item>
              <Typography className={classes.textLoginHeader} variant="h4">
                Log in <LocalDiningIcon />
              </Typography>
            </Grid>

            <form noValidate autoComplete="off">
              <Grid item>
                <div className={classes.formUsername}>
                  <TextField
                    id="username"
                    label="username"
                    variant="outlined"
                    onChange={e => setFormValues({ username: e.target.value })}
                    required
                  />
                </div>
                <div className={clsx(classes.formPasswordMargin, classes.formPasswordTextField)}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={formValues.showPassword ? 'text' : 'password'}
                    value={formValues.password}
                    onChange={handleChangeForm('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </div>
              </Grid>

              <Grid item>
                <div className={classes.loginButtonSpacing}>
                  <Button
                    className={classes.loginButtonDesign}
                    onClick={() => logInUser(formValues.username, formValues.password)}
                  >
                    Login
                  </Button>
                </div>
              </Grid>
            </form>

            <Grid item>
              <DontOrAreadyHaveAnAccountLink account="dontHaveAnAccount" />
            </Grid>

          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default LoginPage
