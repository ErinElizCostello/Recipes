import { makeStyles } from '@material-ui/core/styles';

export const useStylesDeleteUserAccountPage = makeStyles({
  
  //general
  general: {
    marginTop: 100
  },


  //text
  textHeader: {
    color: '#5e5e5e',
    margin: 10,
    textAlign: 'center',
  },
  textAccountHasBeenDeleted: {
    color: '#5e5e5e',
    margin: 15,
    textAlign: 'center',
  },


  //login button
  deleteButtonDesign: {
    background: 'linear-gradient(45deg, #ff2b2b 30%, #ffb12b 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: '100%',
    padding: '0 30px',
  },
  deleteButtonSpacing: {
    textAlign: 'center',
    margin: 20
  }
})