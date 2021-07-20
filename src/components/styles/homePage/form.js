import { makeStyles } from '@material-ui/core/styles';

export const useStylesForm = makeStyles(theme => ({
  showHideButton: {
    // display: 'flex',
    // direction: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
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

  // generalSearch: {
  //   display: 'flex', 
  //   direction: 'column', 
  //   alignItems: 'center', 
  //   justifyContent: 'center', 
  //   flexFlow: 'column wrap'
  // },

  chipsArea: {
    margin: 10
  }
}))