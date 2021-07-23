import { makeStyles } from '@material-ui/core/styles';

export const useStylesNutritionTable = makeStyles((theme) => ({
  
  nutrition: {
    width: '100%',
    color: '#5e5e5e',
    width: '100%',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))