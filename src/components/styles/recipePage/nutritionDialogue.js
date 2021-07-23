import { makeStyles } from '@material-ui/core/styles';

export const useStylesNutritionDialogue = makeStyles({
  
  seeNutritionButton: {
    background: '#c2ffa3', 
    border: 0,
    borderRadius: 30,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 300,
    padding: '0 30px',
    margin: 20
  },

  seeNutritionButtonSpacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50
  },
})