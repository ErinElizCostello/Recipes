import { makeStyles } from '@material-ui/core/styles';

export const useStylesErrorMessage = makeStyles({
  spacing: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  text: {
    fontSize: 20,
    color: '#5e5e5e',
  }
})
