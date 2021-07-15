import { makeStyles } from '@material-ui/core/styles';

export const useStylesTitle = makeStyles({

  general: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
  },

  title: {
    color: '#5e5e5e',
    marginLeft: 40,
    marginTop: 10,
    justifyContent: 'center',
  },

  credits: {
    color: '#5e5e5e',
    fontSize: 15,
    marginLeft: 50,
    justifyContent: 'center',
  }
})