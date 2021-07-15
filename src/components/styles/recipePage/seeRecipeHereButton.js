import { makeStyles } from '@material-ui/core/styles';

export const useStylesSeeRecipeHereButton = makeStyles({

  seeRecipeHereButton: {
    background: 'linear-gradient(45deg, #f9a1ff 30%, #c2ffa3 90%)',
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 150,
  },

  seeRecipeHereButtonSpacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
})