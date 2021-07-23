import { makeStyles } from '@material-ui/core/styles';


export const useStylesSignUpPage = makeStyles((theme) => ({

  general: {
    marginTop: 100
  },

  textSignUpHeader: {
    color: '#5e5e5e',
    margin: 10
  },

  // textAlreadyHaveAnAccount: {
  //   fontSize: 15,
  //   color: '#5e5e5e',
  //   '&:hover': {
  //     color: '#87ffc5',
  //   }
  // },

  textUserAlreadyExists: {
    color: '#5e5e5e',
    margin: 15,
    textAlign: 'center'
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

  signUpButtonSpacing: {
    textAlign: 'center',
    margin: 20
  },

  signUpButtonDesign: {
    background: 'linear-gradient(45deg, #ccbb3d 30%, #8cffd7 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: 150,
    color: 'white',
    height: 48,
    padding: '0 30px',
    justifyContent: 'center'
  }
}))