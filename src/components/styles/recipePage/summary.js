import { makeStyles } from '@material-ui/core/styles';

export const useStylesSummary = makeStyles((theme) => ({
  summary: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      padding: theme.spacing(5),
    },
    marginTop: 50,
    color: '#5e5e5e',
  },
}))