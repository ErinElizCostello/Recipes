import { makeStyles } from '@material-ui/core/styles';

export const useStylesForm = makeStyles(theme => ({
  showHideButton: {
    [theme.breakpoints.up('xs')]: {
      color: '#ffffff'
    },
    [theme.breakpoints.up('md')]: {
      color: '#5e5e5e'
    },
  },

  addIcon: {
    [theme.breakpoints.up('xs')]: {
      color: '#ffffff'
    },
    [theme.breakpoints.up('md')]: {
      color: '#5e5e5e'
    },
  },

  text: {
    color: '#5e5e5e'
  },

  chipsArea: {
    margin: 10
  }
}))