import { makeStyles } from '@material-ui/core/styles';

export const useStylesSearchResults = makeStyles({

  spacingAtTheTop: {
    margin: 50
  },

  hereAreSomeSuggestions: {
    margin: 50, 
    color: '#5e5e5e', 
    fontWeight: 'light'
  },

  spinnerSpacing: {
    display: 'flex', 
    direction: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 200
  }
})