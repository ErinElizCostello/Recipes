import { makeStyles } from '@material-ui/core/styles';

export const useStylesSelectForm = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  inputLabel: {
    fontWeight: 'lighter'
  },
  select: {
    backgroundColor: 'white', width: 140,
    color: '#2e2e2e',
    // '&:focus': {
    //   borderRadius: 4,
    //   borderRadius: 'red',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    // },
    // border: '1px solid #ced4da',
  }
}))