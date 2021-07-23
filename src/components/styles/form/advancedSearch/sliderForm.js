import { makeStyles } from '@material-ui/core/styles';

export const useStylesSliderForm = makeStyles(theme => ({
  
  root: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: 300
    },
  },

  labelSpacing: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30
  }
}))