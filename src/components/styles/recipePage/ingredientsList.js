import { makeStyles } from '@material-ui/core/styles';

export const useStylesIngredientsList = makeStyles((theme) => ({
  
  ingredients: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& > *': {
      padding: theme.spacing(3),
    },
    color: '#5e5e5e',
    marginTop: 60
  },

  listItemSpacing: {
    padding: 2
  },

  icon: {
    fontSize: 10
  }
}))