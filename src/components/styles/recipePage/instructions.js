import { makeStyles } from '@material-ui/core/styles';

export const useStylesInstructions = makeStyles((theme) => ({ 
  instructionsGeneral: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      padding: theme.spacing(1),
    },
    margin: 20,
    color: '#5e5e5e',
  },

  instructionsHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 60,
    color: '#5e5e5e',
  },

  instructionsTitle: {
    marginBottom: 5,
    color: '#5e5e5e',
  },

  instructionsNumberOfServings: {
    fontSize: 15, 
    marginBottom: 25, 
    fontWeight: 'bold',
    color: '#5e5e5e',
  },

  basicDescription: {
    fontSize: 15, 
    fontWeight: 100,
    // marginBottom: 30
  },

  divider: {
    height: 20, 
    borderLeft: '.5px solid grey', 
    margin: 10
  },
  
  spacer: {
    margin: 30
  }
}))