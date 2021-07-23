import { makeStyles } from '@material-ui/core/styles';

export const useStylesLoginAndSignUpButtons = makeStyles({
  
  general: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-start',
    margin: 20,
  },

  text: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center',
    margin: 10, 
  },

  slash: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
    color: '#5e5e5e',
  },

  logInLink: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    margin: 10,
    textDecoration: 'none',
    color: '#2e2e2e',
    "&:hover": {
      color: '#94ffd8',
    }
  },

  signUpLink: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    margin: 10,
    textDecoration: 'none',
    color: '#2e2e2e',
    "&:hover": {
      color: '#f494ff',
    }
  }
})