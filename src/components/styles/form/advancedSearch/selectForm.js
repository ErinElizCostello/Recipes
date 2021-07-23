import { makeStyles } from '@material-ui/core/styles';

export const useStylesSelectForm = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  inputLabel: {
    fontWeight: 'lighter'
  },

  select: {
    backgroundColor: 'white', width: 140,
    color: '#2e2e2e',
  }
}))