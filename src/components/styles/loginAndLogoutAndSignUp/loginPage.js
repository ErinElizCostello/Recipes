import { makeStyles } from '@material-ui/core/styles';

export const useStylesLoginPage = makeStyles((theme) => ({

  general: {
    marginTop: 100
  },

  textWrongUser: {
    color: '#5e5e5e',
    margin: 15
  },

  textLoginHeader: {
    color: '#5e5e5e',
    margin: 10
  },

  textDontHaveAnAccount: {
    fontSize: 15,
    color: '#5e5e5e',
    '&:hover': {
      color: '#87ffc5',
    }
  },

  linkDontHaveAnAccount: {
    textDecoration: 'none',
  },

  formUsername: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
  formPasswordMargin: {
    margin: theme.spacing(1),
  },

  formPasswordTextField: {
    width: '25ch',
  },

  loginButtonDesign: {
    background: 'linear-gradient(45deg, #87ffc5 30%, #ccbb3d 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 150,
    padding: '0 30px',
  },

  loginButtonSpacing: {
    textAlign: 'center',
    margin: 20
  }
}))