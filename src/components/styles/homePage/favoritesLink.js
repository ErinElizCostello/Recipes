import { makeStyles } from '@material-ui/core/styles';

export const useStylesFavoritesLink = makeStyles((theme) => ({
  general: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    // color: 'black',
    // fontWeight: 'lighter'
  },

  text: {
    display: 'flex', 
    direction: 'row', 
    justifyContent: 'center',
    margin: 10, 
    // fontWeight: 'lighter',
  },

  favoritesLink: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    textDecoration: 'none',
    color: 'black',
    fontWeight: '#2e2e2e',
    "&:hover": {
      color: '#94ffd8',
    }
  },
}))