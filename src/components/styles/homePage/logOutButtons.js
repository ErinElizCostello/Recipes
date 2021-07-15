import { makeStyles } from '@material-ui/core/styles';

export const useStylesLogOutButton = makeStyles({
  general: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-end',
    margin: 20,
    // color: '#5e5e5e',
    fontWeight: 'lighter',
    
  },

  text: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center',
    margin: 10, 
    
  },

  logOutButton: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    margin: 10,
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'lighter',

    // color: '#5e5e5e',
    "&:hover": {
      color: '#f494ff',
      cursor: 'pointer'
    },
    
  }
})