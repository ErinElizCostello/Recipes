import { makeStyles } from '@material-ui/core/styles';

export const useStylesFavoritesAndLogOutButtons = makeStyles({
  general: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    margin: 20,
    alignItems: 'center'
  },

  text: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center',
    margin: 10, 
  },

  favoritesButton: {
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

  logOutButton: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    margin: 10,
    textDecoration: 'none',
    color: '#2e2e2e',
    "&:hover": {
      color: '#f494ff',
      cursor: 'pointer'
    }
  }
})