import { makeStyles } from '@material-ui/core/styles';

export const useStylesCardInformation = makeStyles((theme) => ({ 
  media: {
    height: 140,
  },
  typography: {
    padding: theme.spacing(2),
  }
}))