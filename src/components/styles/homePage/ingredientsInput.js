import { makeStyles } from '@material-ui/core/styles';

export const useStylesIngredientsInput = makeStyles((theme) => ({

  // display: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   direction: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 30
  // },

  input: {
    backgroundColor: 'rgba(255,255,255)',
    borderRadius: '5px',
    width: 500,
    height: 55
  },
  submit: {
    margin: 20
  },
  button: {
    // marginLeft: 10,
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 160,
    height: 40,
    backgroundColor: '#e8a751',
    // backgroundColor: '#e3b374',
    // backgroundColor: '#d6bf3e',
    color: 'white',
    border: '#c2c2c2 1px solid',
    '&:hover': {
      border: 'black 1px #e3b374',
    },
    //  font: theme.typography
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightLight,
    borderRadius: 4,
   
  },
  buttonSpacing: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10
  }

}))