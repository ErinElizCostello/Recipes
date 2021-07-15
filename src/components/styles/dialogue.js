import { makeStyles } from '@material-ui/core/styles';

export const useStylesDialogue = makeStyles({

  text: {
    color: '#5e5e5e',
    fontWeight: 'lighter'
  },

  logInLink: {
    textDecoration: 'none',
    color: '#77c9ab',
    "&:hover": {
      color: '#94ffd8',
    }
  },

  signUpLink: {
    textDecoration: 'none',
    color: '#ab69b3',
    "&:hover": {
      color: '#f494ff',
    }
  }
})