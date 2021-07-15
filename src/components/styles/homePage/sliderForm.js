import { makeStyles } from '@material-ui/core/styles';

export const useStylesSliderForm = makeStyles({
  root: {
    width: 300,
  },

  labelSpacing: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30, 
    marginTop: 30
  }
})