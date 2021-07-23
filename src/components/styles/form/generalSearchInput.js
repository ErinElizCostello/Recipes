import { makeStyles } from '@material-ui/core/styles';

export const useStylesGeneralSearch = makeStyles((theme) => ({

  input: {
    backgroundColor: 'rgba(255,255,255)',
    borderRadius: '5px',
    [theme.breakpoints.up('xs')]: {
      width: 325
    },
    [theme.breakpoints.up('sm')]: {
      width: 500
    },
    height: 60
  }
}))