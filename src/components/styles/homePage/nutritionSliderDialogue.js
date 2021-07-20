import { makeStyles } from '@material-ui/core/styles';

export const useStylesNutritionSliderDialogue = makeStyles((theme) => ({
  root: {
    
    width: '100%',
    height: '100%',
    color: '#2e2e2e'
  },
  heading: {

    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightLight,
  },
  button: {
    display: 'flex',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
    height: 56,
    backgroundColor: 'white',
    color: '#828282',
    border: '#c2c2c2 1px solid',
    '&:hover': {
      border: 'black 1px solid',
    },
    //  font: theme.typography
    // fontSize: theme.typography.pxToRem(16),
    // fontWeight: theme.typography.fontWeightLight,
    borderRadius: 4
  },
  buttonFont: {
    // fontWeight: light,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightLight,
    marginLeft: 10
  },
  sliderForm: {
    margin: 20
  },

  nutritionButtonIconSpacing: {
    marginRight: 2
  }
}))